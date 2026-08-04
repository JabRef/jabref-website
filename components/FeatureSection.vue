<template>
  <article class="feature" :class="{ reverse }">
    <div>
      <h2>{{ title }}</h2>
      <slot />
    </div>
    <img :src="assetUrl(image)" :alt="imageAlt" :width="imageWidth" :height="imageHeight" />
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  reverse?: boolean
}>()

const baseURL = useRuntimeConfig().app.baseURL
const assetUrl = (path: string) => `${baseURL}${path.replace(/^\//, '')}`
</script>
