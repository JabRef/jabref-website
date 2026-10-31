<template>
  <LegalPage title="Impressum" :content="legalNotices" />
</template>

<script setup lang="ts">
import legalNoticesHtml from '~/assets/legal-notices.html?raw'

const baseURL = useRuntimeConfig().app.baseURL
const legalNotices = legalNoticesHtml.replace('href="/privacy-policy"', `href="${baseURL}privacy-policy"`)
</script>
