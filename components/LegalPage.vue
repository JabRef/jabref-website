<template>
  <div>
    <header class="site-header">
      <NuxtLink class="brand" to="/"><img :src="'/assets/jabref.svg'" alt="" /> JabRef</NuxtLink>
      <ThemeToggle />
    </header>
    <main class="legal-page container">
      <NuxtLink to="/">← Back to homepage</NuxtLink>
      <article>
        <h1>{{ title }}</h1>
        <pre>{{ content }}</pre>
      </article>
    </main>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  content: string
}>()
</script>
