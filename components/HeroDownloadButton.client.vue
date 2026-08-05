<template>
  <a class="button" :href="downloadUrl">{{ label }}</a>
</template>

<script setup lang="ts">
import { detectOs, type OperatingSystem } from '~/composables/detectOs'
import {
  fetchLatestJabRefRelease,
  JABREF_LATEST_RELEASE_URL,
  resolveDownloadUrl,
  type DownloadTarget,
  type JabRefRelease,
} from '~/utils/jabrefDownloads'

const operatingSystem = ref<OperatingSystem>()
const release = ref<JabRefRelease>()
const baseURL = useRuntimeConfig().app.baseURL

const targetByOperatingSystem: Record<OperatingSystem, DownloadTarget> = {
  windows: 'win_msi',
  linux: 'linux_deb',
  mac: 'mac_arm64_pkg',
}

const labelByOperatingSystem: Record<OperatingSystem, string> = {
  windows: 'Download for Windows',
  linux: 'Download for Linux (Ubuntu, Debian)',
  mac: 'Download for macOS (Apple Silicon)',
}

const label = computed(() => operatingSystem.value ? labelByOperatingSystem[operatingSystem.value] : 'Download JabRef')
const downloadUrl = computed(() => {
  if (!operatingSystem.value || !release.value) return JABREF_LATEST_RELEASE_URL

  return resolveDownloadUrl(release.value, targetByOperatingSystem[operatingSystem.value])
})

onMounted(async () => {
  operatingSystem.value = detectOs()
  try {
    release.value = await fetchLatestJabRefRelease(baseURL)
  } catch {
    // Keep the generic latest-release URL when GitHub cannot be reached.
  }
})
</script>
