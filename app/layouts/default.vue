<template>
  <main :class="[$route.name]" class="main md:px-0">
    <site-header />
    <nuxt class="nuxt" />
    <site-footer />
    <div class="progress">
      <div class="progress-container">
        <div class="progress-bar" id="bar"></div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import SiteHeader from '@/components/partials/header.vue';
import SiteFooter from '@/components/partials/footer.vue';

@Component({
  components: {
    SiteHeader,
    SiteFooter,
  },
})
export default class DefaultLayout extends Vue {
  scroll = 0;

  height = 0;

  scrolled = 0;

  mounted(): void {
    if (process.client) {
      window.onscroll = () => {
        this.progressBar();
      };
    }
  }

  progressBar(): void {
    this.scroll = document.body.scrollTop || document.documentElement.scrollTop;
    this.height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrolled = (this.scroll / this.height) * 100;
    const bar = document.getElementById('bar');
    if (bar) {
      bar.style.width = `${this.scrolled}%`;
    }
  }
}
</script>

<style lang="scss">
* {
  font-family: 'Archivo';
}
.divider {
  position: relative;
  min-width: 100vw;
  margin-top: auto;
}

.nuxt {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: 0;
}

.progress {
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
  background-color: #f1f1f1;
}

.progress-container {
  width: 100%;
  height: 8px;
  background: #ccc;
}

.progress-bar {
  height: 8px;
  background: #857bff;
  width: 0%;
}
</style>
