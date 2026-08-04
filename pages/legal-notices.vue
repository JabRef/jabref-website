<template>
  <LegalPage title="Impressum" :content="legalNotices" />
</template>

<script setup lang="ts">
import legalNotices from '~/assets/legal-notices.html?raw'
</script>
