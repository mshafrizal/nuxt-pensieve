<template>
  <footer class="footer fixed bottom-0 w-full py-6">
    <p class="container mx-auto">2022 Pensieve • All Rights Reserved</p>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style lang="scss">
.footer {
  background-color: $pgreylight;
}
</style>
