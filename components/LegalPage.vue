<template>
  <div>
    <header class="site-header">
      <NuxtLink class="brand" to="/"><img :src="assetUrl('/assets/jabref.svg')" alt="" width="34" height="34" /> JabRef</NuxtLink>
      <ThemeToggle />
    </header>
    <main class="legal-page container">
      <NuxtLink to="/">← Back to homepage</NuxtLink>
      <article>
        <h1>{{ title }}</h1>
        <!-- Content comes from the repository's trusted legal HTML. -->
        <div class="legal-content" v-html="content" />
      </article>
    </main>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  content: string
}>()

const baseURL = useRuntimeConfig().app.baseURL
const assetUrl = (path: string) => `${baseURL}${path.replace(/^\//, '')}`
</script>
