<template>
  <article class="feature" :class="{ reverse }">
    <div>
      <h2>{{ title }}</h2>
      <slot />
    </div>
    <img :src="image" :alt="imageAlt" />
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  image: string
  imageAlt: string
  reverse?: boolean
}>()
</script>
