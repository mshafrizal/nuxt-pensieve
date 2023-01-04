<template>
  <footer class="footer-home fixed bottom-0 w-full px-8 py-2 md:py-6 md:px-10">
    <p class="container mx-auto">2022 Pensieve • All Rights Reserved</p>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style lang="scss">
.footer-home {
  background-color: $pgreylight;
}
</style>
