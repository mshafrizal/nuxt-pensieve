<template>
  <main :class="[$route.name]" class="main-home sm:flex-grow sm:flex md:px-0">
    <nav id="navMobile" class="nav--mobile">
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/products">Products</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blog">Blog</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/career">Career</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
    <header-home />
    <nuxt class="nuxt" />

    <!-- <svg class="divider -mx-4 sm:mx-0" width="100%" viewBox="0 0 10 1">
      <polygon stroke="none" stroke-width="0" fill="#0b3765" points="0,0.6 0,1 10,1 10,0" />
    </svg> -->

    <footer-home />
  </main>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator';
import HeaderHome from '@/components/partials/headerHome.vue';
import FooterHome from '@/components/partials/footerHome.vue';

@Component({
  components: {
    HeaderHome,
    FooterHome,
  },
})
export default class DefaultLayout extends Vue {
  get navMobileState(): boolean {
    return this.$store.state.navMobileState;
  }

  @Watch('navMobileState')
  onNavMobileStateChange(val: boolean): void {
    const navMobileEl: HTMLElement | null = document.getElementById('navMobile');
    if (navMobileEl) {
      if (val) {
        navMobileEl.style.right = '0px';
      } else {
        navMobileEl.style.right = '-220px';
      }
    }
  }
}
</script>

<style lang="scss">
* {
  font-family: Archivo;
}
.divider {
  position: relative;
  min-width: 100vw;
  margin-top: auto;
  max-height: 100vh;
}

.nuxt {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>
