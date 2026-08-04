<template>
  <button class="theme-toggle" type="button" :aria-label="`Switch to ${isDark ? 'light' : 'dark'} theme`" @click="toggle">
    {{ isDark ? '☀ Light' : '◐ Dark' }}
  </button>
</template>

<script setup lang="ts">
const isDark = ref(false)

function applyTheme() {
  document.documentElement.dataset.theme = isDark.value ? 'dark' : 'light'
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

function toggle() {
  isDark.value = !isDark.value
  applyTheme()
}

onMounted(() => {
  const storedTheme = localStorage.getItem('theme')
  isDark.value = storedTheme ? storedTheme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.dataset.theme = isDark.value ? 'dark' : 'light'
})
</script>
