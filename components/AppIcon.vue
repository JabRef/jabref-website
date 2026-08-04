<template>
  <FontAwesomeIcon class="icon" :icon="icon" aria-hidden="true" />
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBook,
  faBug,
  faCode,
  faComments,
  faGift,
  faGlobe,
  faHeart,
  faLightbulb,
  faNewspaper,
  faPersonWalking,
} from '@fortawesome/free-solid-svg-icons'
import { faChrome, faEdge, faFirefoxBrowser } from '@fortawesome/free-brands-svg-icons'

const props = defineProps<{ name: string }>()

const icons = {
  heart: faHeart,
  gift: faGift,
  code: faCode,
  walk: faPersonWalking,
  chat: faComments,
  book: faBook,
  bulb: faLightbulb,
  bug: faBug,
  edit: faNewspaper,
  chrome: faChrome,
  firefox: faFirefoxBrowser,
  edge: faEdge,
  vivaldi: faGlobe,
}

const icon = computed(() => icons[props.name as keyof typeof icons] ?? faBook)
</script>
