<template>
  <div v-if="operatingSystem" class="download-options" :aria-busy="isLoading">
    <div v-if="operatingSystem === 'windows'" class="download-actions">
      <a class="button" :href="downloadUrl('win_msi')">Download for Windows</a>
    </div>

    <div v-else-if="operatingSystem === 'linux'" class="download-actions">
      <a class="button" :href="downloadUrl('linux_deb')">.deb (Ubuntu, Debian)</a>
      <a class="button" :href="downloadUrl('linux_rpm')">.rpm (Fedora, RedHat)</a>
    </div>

    <div v-else class="download-actions">
      <a class="button" :href="downloadUrl('mac_arm64_pkg')">Apple Silicon (Arm)</a>
      <a class="button" :href="downloadUrl('mac_x86_64_pkg')">macOS Intel (x64)</a>
    </div>

    <p v-if="operatingSystem === 'windows'" class="download-details">
      <a :href="downloadUrl('win_zip')">Windows Portable</a><br />
      Also available for <a :href="JABREF_LATEST_RELEASE_URL">macOS and Linux</a>
    </p>

    <div v-else-if="operatingSystem === 'mac'" class="download-details">
      <p>
        <a :href="downloadUrl('mac_arm64_dmg')">Apple Silicon Portable (.dmg)</a>
        or <a :href="downloadUrl('mac_x86_64_dmg')">macOS Intel Portable (.dmg)</a>
      </p>
      <p class="download-hint">Unsure about your Mac type? Click the Apple icon, select “About This Mac”. If it shows “Chip”, you have Apple Silicon. Otherwise, it’s Intel.</p>
      <p>Also available for <a :href="JABREF_LATEST_RELEASE_URL">Windows and Linux</a></p>
    </div>

    <p v-else class="download-details">
      <a :href="downloadUrl('linux_tar_gz')">Linux Portable</a><br />
      Also available for <a :href="JABREF_LATEST_RELEASE_URL">macOS and Windows</a>
    </p>

    <p v-if="loadFailed" class="download-fallback">Direct downloads are unavailable right now. The links open the latest GitHub release instead.</p>
  </div>
</template>

<script setup lang="ts">
import type { OperatingSystem } from '~/composables/detectOs'
import { detectOs } from '~/composables/detectOs'
import {
  fetchLatestJabRefRelease,
  JABREF_LATEST_RELEASE_URL,
  resolveDownloadUrl,
  type DownloadTarget,
  type JabRefRelease,
} from '~/utils/jabrefDownloads'

const operatingSystem = ref<OperatingSystem>()
const release = ref<JabRefRelease>()
const isLoading = ref(true)
const loadFailed = ref(false)
const baseURL = useRuntimeConfig().app.baseURL

function downloadUrl(target: DownloadTarget): string {
  return release.value ? resolveDownloadUrl(release.value, target) : JABREF_LATEST_RELEASE_URL
}

onMounted(async () => {
  operatingSystem.value = detectOs()
  try {
    release.value = await fetchLatestJabRefRelease(baseURL)
  } catch {
    loadFailed.value = true
  } finally {
    isLoading.value = false
  }
})
</script>
