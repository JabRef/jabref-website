/**
 * Client-side replacement for JabRefOnline's `/download/:target` redirects.
 *
 * GitHub exposes the current release assets through a public, CORS-enabled API.
 * Resolving the asset by name instead of constructing a versioned filename keeps
 * this static site independent from a server and from packaging-name changes.
 */
export const JABREF_LATEST_RELEASE_URL = 'https://github.com/JabRef/jabref/releases/latest'

const JABREF_LATEST_RELEASE_API_URL = 'https://api.github.com/repos/JabRef/jabref/releases/latest'

export type DownloadTarget =
  | 'win_msi'
  | 'win_zip'
  | 'mac_arm64_dmg'
  | 'mac_arm64_pkg'
  | 'mac_x86_64_dmg'
  | 'mac_x86_64_pkg'
  | 'linux_deb'
  | 'linux_rpm'
  | 'linux_tar_gz'
  | 'linux_arm64_deb'
  | 'linux_arm64_rpm'
  | 'linux_arm64_tar_gz'

export interface ReleaseAsset {
  name: string
  browser_download_url: string
}

export interface JabRefRelease {
  assets: ReleaseAsset[]
}

const assetMatchers: Record<DownloadTarget, (assetName: string) => boolean> = {
  win_msi: (name) => name.endsWith('.msi'),
  win_zip: (name) => name.endsWith('-portable_windows.zip'),
  mac_arm64_dmg: (name) => /(?:_silicon|-arm64)\.dmg$/i.test(name),
  mac_arm64_pkg: (name) => /(?:_silicon|-arm64)\.pkg$/i.test(name),
  mac_x86_64_dmg: (name) => name.endsWith('.dmg') && !/(?:_silicon|-arm64)\.dmg$/i.test(name),
  mac_x86_64_pkg: (name) => name.endsWith('.pkg') && !/(?:_silicon|-arm64)\.pkg$/i.test(name),
  linux_deb: (name) => /_amd64\.deb$/i.test(name),
  linux_rpm: (name) => /-1\.x86_64\.rpm$/i.test(name),
  linux_tar_gz: (name) => name.endsWith('-portable_linux.tar.gz'),
  linux_arm64_deb: (name) => /_arm64\.deb$/i.test(name),
  linux_arm64_rpm: (name) => /_arm64-1\.aarch64\.rpm$/i.test(name),
  linux_arm64_tar_gz: (name) => name.endsWith('-portable_linux_arm64.tar.gz'),
}

export async function fetchLatestJabRefRelease(): Promise<JabRefRelease> {
  const response = await fetch(JABREF_LATEST_RELEASE_API_URL, {
    headers: { Accept: 'application/vnd.github+json' },
  })

  if (!response.ok) {
    throw new Error(`GitHub returned ${response.status} while loading the latest JabRef release`)
  }

  const release = (await response.json()) as JabRefRelease
  if (!Array.isArray(release.assets)) {
    throw new Error('GitHub returned a release without assets')
  }

  return release
}

export function resolveDownloadUrl(release: JabRefRelease, target: DownloadTarget): string {
  return release.assets.find((asset) => assetMatchers[target](asset.name))?.browser_download_url
    ?? JABREF_LATEST_RELEASE_URL
}
