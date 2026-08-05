<template>
  <div v-if="operatingSystem" class="download-options">
    <div v-if="operatingSystem === 'windows'" class="download-actions">
      <a class="button" href="https://www.jabref.org/download/win_msi">Download for Windows</a>
    </div>

    <div v-else-if="operatingSystem === 'linux'" class="download-actions">
      <a class="button" href="https://www.jabref.org/download/linux_deb">.deb (Ubuntu, Debian)</a>
      <a class="button" href="https://www.jabref.org/download/linux_rpm">.rpm (Fedora, RedHat)</a>
    </div>

    <div v-else class="download-actions">
      <a class="button" href="https://www.jabref.org/download/mac_arm64_pkg">Apple Silicon (Arm)</a>
      <a class="button" href="https://www.jabref.org/download/mac_x86_64_pkg">macOS Intel (x64)</a>
    </div>

    <p v-if="operatingSystem === 'windows'" class="download-details">
      <a href="https://www.jabref.org/download/win_zip">Windows Portable</a><br />
      Also available for <a href="https://github.com/JabRef/jabref/releases/latest">macOS and Linux</a>
    </p>

    <div v-else-if="operatingSystem === 'mac'" class="download-details">
      <p>
        <a href="https://www.jabref.org/download/mac_arm64_dmg">Apple Silicon Portable (.dmg)</a>
        or <a href="https://www.jabref.org/download/mac_x86_64_dmg">macOS Intel Portable (.dmg)</a>
      </p>
      <p class="download-hint">Unsure about your Mac type? Click the Apple icon, select “About This Mac”. If it shows “Chip”, you have Apple Silicon. Otherwise, it’s Intel.</p>
      <p>Also available for <a href="https://github.com/JabRef/jabref/releases/latest">Windows and Linux</a></p>
    </div>

    <p v-else class="download-details">
      <a href="https://www.jabref.org/download/linux_tar_gz">Linux Portable</a><br />
      Also available for <a href="https://github.com/JabRef/jabref/releases/latest">macOS and Windows</a>
    </p>
  </div>
</template>

<script setup lang="ts">
import type { OperatingSystem } from '~/composables/detectOs'
import { detectOs } from '~/composables/detectOs'

const operatingSystem = ref<OperatingSystem>()

onMounted(() => {
  operatingSystem.value = detectOs()
})
</script>
