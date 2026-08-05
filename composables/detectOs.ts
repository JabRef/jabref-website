export type OperatingSystem = 'linux' | 'mac' | 'windows'

/**
 * Mirrors the platform detection used by JabRefOnline's download section.
 * It is deliberately client-only because browser platform data is unavailable
 * while Nuxt generates the static site.
 */
export function detectOs(): OperatingSystem | undefined {
  if (!import.meta.client) return undefined

  const platform = window.navigator.platform
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K']
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE']
  const iosPlatforms = ['iPhone', 'iPad', 'iPod']

  if (macosPlatforms.includes(platform) || iosPlatforms.includes(platform)) return 'mac'
  if (windowsPlatforms.includes(platform)) return 'windows'
  if (platform.includes('Linux')) return 'linux'

  return undefined
}

export function isWindows(): boolean {
  return detectOs() === 'windows'
}

export function isLinux(): boolean {
  return detectOs() === 'linux'
}

export function isMac(): boolean {
  return detectOs() === 'mac'
}
