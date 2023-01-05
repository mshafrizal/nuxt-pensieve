<template>
  <footer class="footer flex items-center px-6 sm:px-16 md:px-16 lg:px-0 py-10 sm:py-0">
    <div class="container mx-auto flex flex-col items-center w-full">
      <div class="flex justify-between w-full mb-10">
        <img
          src="https://ik.imagekit.io/vin64b9qvp9/pensieveassets/uploads/pensieve-logo-black_wwWueRMhu.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669442167496"
          alt="Pensieve P Logo"
          class="w-32"
        />

        <p class="hidden md:flex text-xs">2022 Pensieve • All Rights Reserved</p>

        <div class="flex gap-6">
          <img
            src="https://ik.imagekit.io/vin64b9qvp9/pensieveassets/uploads/footer-2-instagram_ct-jXfnbq.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669442175603"
            alt="Instagram logo"
            class="w-4 h-4 flex-grow-0"
          />
          <img
            src="https://ik.imagekit.io/vin64b9qvp9/pensieveassets/uploads/footer-3-kalibrr_yfoyaFJJW.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669442184159"
            alt="Kalibrr logo"
            class="w-4 h-4 flex-grow-0"
          />
          <img
            src="https://ik.imagekit.io/vin64b9qvp9/pensieveassets/uploads/footer-4-linkedin_rd7LocaEG.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669442180112"
            alt="Linkedin logo"
            class="w-4 h-4 flex-grow-0"
          />
        </div>
      </div>
      <p class="flex md:hidden text-xs">2022 Pensieve • All Rights Reserved</p>
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
