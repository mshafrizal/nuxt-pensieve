<template>
  <section class="career">
    <div class="hero">
      <h1 class="hero__text container mx-auto text-white">
        Goodbye Data Complexities.
        <br />
        <br />
        Hello AI-Powered Government.
      </h1>
    </div>

    <div class="wwd py-16 pl-6 flex flex-col">
      <div class="container mx-auto flex flex-col sm:mb-48">
        <h2 class="font-thin">What We Deliver</h2>
        <!-- MOBILE ANIMATION -->
        <lottie-player
          class="block sm:hidden"
          src="/animation/products_mobile.json"
          ref="mobile_lottie_1"
          id="lottie-mobile"
          loop
          style="z-index: 4;"
        ></lottie-player>

        <!-- END MOBILE ANIMATION -->
        <div ref="desktopStackAnimationRef" id="desktopStackAnimation" class="flex flex-col">
          <lottie-player
            class="hidden sm:block"
            src="/animation/products.json"
            ref="lottie_4"
            id="lottie-desktop"
            loop
            style="z-index: 4;"
          ></lottie-player>
        </div>
      </div>
    </div>
    <div class="products">
      <div class="container mx-auto">
        <h2 class="font-thin mb-6 sm:mb-32">
          Explore tomorrow’s AI-driven solutions finely crafted for digital government and
          enterprise
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-10">
          <div v-for="(service, i) in services" class="flex flex-col items-center" :key="i">
            <img class="mb-10 min-w-10 min-h-10" :src="service.image_url" :alt="service.name" />
            <p class="text-center font-thin">{{ service.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import settings from '@/content/settings/general.json';

@Component({
  transition() {
    return 'slide-left';
  },
})
export default class Career extends Vue {
  services = settings.services;

  scrollTop = 0;

  lastScrollTop = 0;

  loaded = false;

  async handleScroll(): Promise<void> {
    this.scrollTop = window.scrollY;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;

    if (scroll > this.lastScrollTop) {
      if (this.scrollTop > 600 && !this.loaded) {
        const desktopLottie = document.getElementById('lottie-desktop') as HTMLElementLottie;
        const mobileLottie = document.getElementById('lottie-mobile') as HTMLElementLottie;

        if (desktopLottie) {
          const lottieInstance = await desktopLottie.getLottie();
          desktopLottie.classList.add('fade-in');
          desktopLottie.addEventListener('complete', () => {
            lottieInstance.goToAndPlay(32, true);
          });
          lottieInstance.play();
        }

        if (mobileLottie) {
          const lottieInstance = await mobileLottie.getLottie();
          mobileLottie.classList.add('fade-in');
          desktopLottie.addEventListener('complete', () => {
            lottieInstance.goToAndPlay(32, true);
          });
          lottieInstance.play();
        }
        this.loaded = true;
      }
    }
    this.lastScrollTop = scroll <= 0 ? 0 : scroll;
  }

  created(): void {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  destroyed(): void {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
}
</script>

<style scoped>
.hero {
  width: 100%;
  background-image: url('~static/images/HEADERPRODUCTS.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 680px;
}
.hero__text {
  position: absolute;
  text-align: left;
  top: 50%;
  left: 80px;
  transform: translate(0, -50%);
  color: white;
  width: 100%;
  max-width: 1280px;
  font-size: 80px;
  font-weight: 200;
  line-height: 1;
}
.wwd {
  background-color: #dddddd;
}
.products {
  background-color: #ebebeb;
  padding: 192px 0;
}
.hiw-title {
  font-size: 40px;
  font-weight: 200;
  line-height: 1;
  margin-bottom: 10px;
}
.hiw-description {
  font-size: 26px;
  font-weight: 200;
  color: #808080;
  margin-bottom: 66px;
}
#desktopStackAnimation {
  min-height: 400px;
}
@media only screen and (max-width: 600px) {
  .hero {
    height: 576px;
  }
  .hero__text {
    font-size: 40px;
    left: 24px;
    top: 30%;
    transform: translate(0, -30%);
    max-width: 256px;
  }
  .wwd h2 {
    font-size: 30px;
  }
  .products {
    padding: 96px 24px;
  }
  .products h2 {
    font-size: 30px;
  }
}
#lottie-desktop,
#lottie-mobile {
  opacity: 0;
  transition: opacity 2s;
}

#lottie-desktop.fade-in,
#lottie-mobile.fade-in {
  opacity: 1;
}
.wwd h2,
.products h2 {
  font-size: 66px;
}
</style>
