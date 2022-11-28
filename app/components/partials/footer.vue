<template>
  <footer class="footer flex items-center">
    <div class="container mx-auto flex items-center w-full">
      <img
        src="https://ik.imagekit.io/vin64b9qvp9/pensieveassets/uploads/footer-1-P__Mq5GDDmgc.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669442171601"
        alt="Pensieve P Logo"
        class="w-4 h-4 mr-8"
      />
      <p class="flex-grow">2022 Pensieve • All Rights Reserved</p>
      <img
        src="https://ik.imagekit.io/vin64b9qvp9/pensieveassets/uploads/footer-2-instagram_ct-jXfnbq.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669442175603"
        alt="Instagram logo"
        class="w-4 h-4 mr-8"
      />
      <img
        src="https://ik.imagekit.io/vin64b9qvp9/pensieveassets/uploads/footer-3-kalibrr_yfoyaFJJW.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669442184159"
        alt="Kalibrr logo"
        class="w-4 h-4 mr-8"
      />
      <img
        src="https://ik.imagekit.io/vin64b9qvp9/pensieveassets/uploads/footer-4-linkedin_rd7LocaEG.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669442180112"
        alt="Linkedin logo"
        class="w-4 h-4"
      />
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style lang="scss">
.footer {
  background-color: #ced1d1;
  height: 148px;
  color: #4f6077;
}
</style>
