<template>
  <section class="flex flex-col w-full justify-stretch items-center min-h-screen flex-grow-1">
    <h1 class="text-5xl">Whoops, wrong way...</h1>
    <NuxtLink to="/">Click here to go home</NuxtLink>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  // Called to know which transition to apply
  transition() {
    return 'slide-left';
  },
  layout: 'home',
})
export default class Error extends Vue {}
</script>
