<template>
  <header class="flex items-center px-4 py-3 md:px-10 md:py-8 relative">
    <div class="header__logo">
      <nuxt-link to="/">
        <img
          class="hidden md:block w-24"
          src="https://ik.imagekit.io/vin64b9qvp9/pensieveassets/uploads/pensieve-logo-black_wwWueRMhu.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669442167496"
          alt="Logo"
        />
        <img
          class="block md:hidden w-4"
          src="https://ik.imagekit.io/vin64b9qvp9/pensieveassets/uploads/footer-1-P__Mq5GDDmgc.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669442171601"
          alt="Pensieve Logo"
        />
      </nuxt-link>
    </div>

    <nav class="nav ml-auto">
      <button id="menuBtn" class="flex md:hidden cursor-pointer p-1 hover:bg-gray-400">
        <lottie-player
          src="/animation/hamburger.json"
          ref="menuLottie"
          id="menuLottie"
        ></lottie-player>
      </button>
      <ul
        class="hidden md:flex flex-row items-center sm:mt-4 sm:pt-4 md:mt-0 md:pt-0 md:mr-4 lg:mr-0"
      >
        <li>
          <nuxt-link to="/about" class="block font-magistral font-medium px-4 py-1 md:p-2 lg:px-4">
            About
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/products"
            class="block font-magistral font-medium px-4 py-1 md:p-2 lg:px-4"
          >
            Products
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blog" class="block font-magistral font-medium px-4 py-1 md:p-2 lg:px-4">
            Blog
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/career" class="block font-magistral font-medium px-4 py-1 md:p-2 lg:px-4">
            Career
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/contact"
            class="block font-magistral font-medium px-4 py-1 md:p-2 lg:px-4"
          >
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

  get navMobileState(): boolean {
    return this.$store.state.navMobileState;
  }

  onNavMobileClick(): void {
    this.$store.dispatch('UPDATE_NAV_MOBILE_STATE', !this.navMobileState);
  }

  mounted(): void {
    if (process.browser) {
      window.addEventListener('load', async () => {
        const lottie = document.getElementById('menuLottie') as HTMLElementLottie;
        if (lottie) {
          const lottieInstance = await lottie.getLottie();
          lottie.addEventListener('click', (): void => {
            this.onNavMobileClick();
            if (this.navMobileState) {
              lottieInstance.playSegments([16, 30], true);
            } else {
              lottieInstance.playSegments([31, 43], true);
            }
          });
        }
      });
    }
  }
}
</script>

<style lang="scss">
.nav {
  ul li > a {
    &.nuxt-link-active {
      color: $bluise;
    }
  }
}
#menuBtn:focus {
  outline: none;
}
</style>
