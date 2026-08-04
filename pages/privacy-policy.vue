<template>
  <LegalPage title="Datenschutzerklärung" :content="privacyPolicy" />
</template>

<script setup lang="ts">
import privacyPolicy from '~/assets/privacy-policy.html?raw'
</script>
