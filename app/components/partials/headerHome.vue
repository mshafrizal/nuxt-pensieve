<template>
  <header class="flex items-center py-4 md:py-8">
    <div class="header__logo">
      <nuxt-link to="/">
        <img
          class="w-24"
          src="https://ik.imagekit.io/vin64b9qvp9/pensieveassets/uploads/pensieve-logo-black_wwWueRMhu.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669442167496"
          alt="Logo"
        />
      </nuxt-link>
    </div>

    <nav class="nav ml-auto">
      <ul class="flex flex-row items-center sm:mt-4 sm:pt-4 md:mt-0 md:pt-0 md:mr-4 lg:mr-8">
        <li>
          <nuxt-link to="/about" class="block font-medium px-4 py-1 md:p-2 lg:px-4">
            About
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/products" class="block font-medium px-4 py-1 md:p-2 lg:px-4">
            Products
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blog" class="block font-medium px-4 py-1 md:p-2 lg:px-4">
            Blog
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/career" class="block font-medium px-4 py-1 md:p-2 lg:px-4">
            Career
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact" class="block font-medium px-4 py-1 md:p-2 lg:px-4">
            Contact
          </nuxt-link>
        </li>

        <!-- <li
          v-for="(page, index) in pages"
          :key="index"
          class="block font-medium px-4 py-1 md:p-2 lg:px-4"
        >
          <nuxt-link :to="`/${page.slug}`">{{ page.title }}</nuxt-link>
        </li> -->
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Header extends Vue {
  get pages(): Page[] {
    return this.$store.state.pages;
  }
}
</script>

<style lang="scss">
.nav {
  ul li > a {
    &.nuxt-link-active {
      color: $bluise;
      @apply font-bold;
    }
  }
}
</style>
