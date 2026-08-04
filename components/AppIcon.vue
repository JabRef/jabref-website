<template>
  <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
    <path v-if="name === 'heart'" fill="currentColor" d="M12 21.3 3.8 13A5.5 5.5 0 0 1 11.6 5L12 5.5l.4-.5a5.5 5.5 0 0 1 7.8 7.8L12 21.3Z" />
    <path v-else-if="name === 'gift'" fill="currentColor" d="M20 7h-3.2A3.5 3.5 0 0 0 12 3.8 3.5 3.5 0 0 0 7.2 7H4v4h1v9h14v-9h1V7Zm-8-1.2c.8-1 2.4-.8 2.4.1 0 .7-.7 1.1-2.4 1.1V5.8Zm-2.4.1c0-.9 1.6-1.1 2.4.1V7c-1.7 0-2.4-.4-2.4-1.1ZM7 11h4v7H7v-7Zm6 7v-7h4v7h-4Z" />
    <path v-else-if="name === 'code'" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 9-3 3 3 3m8-6 3 3-3 3m-2-8-4 16" />
    <path v-else-if="name === 'chat'" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 5h16v11H9l-5 4V5Z" />
    <path v-else-if="name === 'book'" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 4h6a3 3 0 0 1 3 3v13a3 3 0 0 0-3-3H4V4Zm16 0h-6a3 3 0 0 0-3 3v13a3 3 0 0 1 3-3h6V4Z" />
    <path v-else-if="name === 'bulb'" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 18h6m-5 3h4m4-12a6 6 0 1 0-12 0c0 2 1 3 2.3 4.6.8.8.7 2.4.7 2.4h6s-.1-1.6.7-2.4C17 12 18 11 18 9Z" />
    <path v-else-if="name === 'bug'" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 8h6a3 3 0 0 1 3 3v5a4 4 0 0 1-8 0v-5a3 3 0 0 1 3-3Zm3-3v3M7 11H4m3 4H4m13-4h3m-3 4h3" />
    <path v-else-if="name === 'edit'" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 20 4.3-1L19 8.3 15.7 5 5 15.7 4 20Zm9.7-13.7 3.3 3.3" />
    <path v-else fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 4v4l3 2" />
  </svg>
</template>

<script setup lang="ts">
defineProps<{ name: string }>()
</script>
