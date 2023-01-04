<template>
  <header class="fixed top-0 w-full px-2 md:px-10 flex items-center py-4 md:py-8 z-10">
    <div class="header__logo">
      <nuxt-link to="/">
        <img
          id="longLogo"
          class="w-24 hidden md:block"
          src="https://ik.imagekit.io/vin64b9qvp9/pensieveassets/uploads/pensieve-logo-green_-JWIJpk9N.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669439827352"
          alt="Logo"
        />
        <img
          id="shortLogo"
          class="block md:hidden w-4"
          src="https://ik.imagekit.io/vin64b9qvp9/pensieveassets/uploads/footer-1-P__Mq5GDDmgc.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669442171601"
          alt="Pensieve Logo"
        />
      </nuxt-link>
    </div>

    <nav class="nav ml-auto">
      <button id="menuBtn" class="flex md:hidden cursor-pointer p-1">
        <lottie-player
          src="/animation/hamburger.json"
          ref="menuLottie"
          id="menuLottie"
        ></lottie-player>
      </button>
      <ul
        id="desktopnav"
        class="hidden md:flex flex-row items-center sm:mt-4 sm:pt-4 md:mt-0 md:pt-0 md:mr-4 lg:mr-8"
      >
        <li>
          <nuxt-link to="/about" class="block init font-medium px-4 py-1 md:p-2 lg:px-4">
            About
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/products" class="block init font-medium px-4 py-1 md:p-2 lg:px-4">
            Products
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blog" class="block init font-medium px-4 py-1 md:p-2 lg:px-4">
            Blog
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/career" class="block init font-medium px-4 py-1 md:p-2 lg:px-4">
            Career
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact" class="block init font-medium px-4 py-1 md:p-2 lg:px-4">
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
import settings from '@/content/settings/general.json';

@Component
export default class Header extends Vue {
  scrollTop = 0;

  lastScrollTop = 0;

  get pages(): Page[] {
    return this.$store.state.pages;
  }

  get navMobileState(): boolean {
    return this.$store.state.navMobileState;
  }

  onNavMobileClick(): void {
    this.$store.dispatch('UPDATE_NAV_MOBILE_STATE', !this.navMobileState);
  }

  changeHeaderTextColor(): void {
    const desktopNav = document.getElementById('desktopnav');
    if (desktopNav) {
      const links = desktopNav.querySelectorAll('li > a');
      if (links.length > 0) {
        links.forEach((link) => {
          if (this.scrollTop > 600) {
            link.classList.remove('init');
            link.classList.add('scrolled');
          } else {
            link.classList.remove('scrolled');
            link.classList.add('init');
          }
        });
      }
    }
  }

  changeLogo(url: string): void {
    const longLogoEl = document.getElementById('longLogo');
    if (longLogoEl) {
      longLogoEl.setAttribute('src', url);
    }
  }

  async handleScroll(): Promise<void> {
    this.scrollTop = window.scrollY;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;

    if (scroll > this.lastScrollTop) {
      if (this.scrollTop > 600) {
        this.changeLogo(settings.pensieve_black_logo);
        this.changeHeaderTextColor();
      }
    } else if (this.scrollTop < 600) {
      this.changeLogo(settings.pensieve_green_logo);
      this.changeHeaderTextColor();
    }
    this.lastScrollTop = scroll <= 0 ? 0 : scroll;
  }

  created(): void {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll);
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

  destroyed(): void {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
}
</script>

<style lang="scss">
.nav {
  ul li > a {
    &.init {
      color: #fff;
    }
    &.scrolled {
      color: #000;
    }
    &.nuxt-link-active.init {
      color: $pgreen;
      @apply font-bold;
    }
    &.nuxt-link-active.scrolled {
      color: $bluise;
    }
  }
}
header {
  backdrop-filter: blur(10px);
}
#menuBtn:focus {
  outline: none;
}
</style>
