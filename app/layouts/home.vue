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
    <div class="container mx-auto">
      <site-header />
      <nuxt class="nuxt" />
    </div>

    <!-- <svg class="divider -mx-4 sm:mx-0" width="100%" viewBox="0 0 10 1">
      <polygon stroke="none" stroke-width="0" fill="#0b3765" points="0,0.6 0,1 10,1 10,0" />
    </svg> -->

    <site-footer />
  </main>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator';
import SiteHeader from '@/components/partials/headerHome.vue';
import SiteFooter from '@/components/partials/footerHome.vue';

@Component({
  components: {
    SiteHeader,
    SiteFooter,
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

.nav--mobile {
  font-family: 'Archivo';
  font-weight: 200;
  font-size: 20px;
  position: fixed;
  top: 60px;
  right: -220px;
  width: 220px;
  height: 100%;
  z-index: 20;
  // background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  padding: 40px;
  transition: 1s;
  ul {
    li {
      margin-bottom: 20px;
      a {
        &:hover {
          color: #00ff00;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
