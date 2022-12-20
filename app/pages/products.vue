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
        <h2 class="text-4xl font-thin">What We Deliver</h2>
        <!-- MOBILE ANIMATION -->
        <lottie-player
          class="block sm:hidden"
          src="/animation/mobile_stack_1.json"
          ref="mobile_lottie_1"
          id="mobile_stack_1"
          loop
          autoplay
          style="z-index: 1;"
        ></lottie-player>
        <lottie-player
          class="block sm:hidden"
          src="/animation/mobile_stack_2.json"
          ref="mobile_lottie_2"
          id="mobile_stack_2"
          loop
          autoplay
          style="z-index: 2;"
        ></lottie-player>
        <lottie-player
          class="block sm:hidden"
          src="/animation/mobile_stack_3.json"
          ref="mobile_lottie_3"
          id="mobile_stack_3"
          loop
          autoplay
          style="z-index: 3;"
        ></lottie-player>
        <lottie-player
          class="block sm:hidden"
          src="/animation/mobile_stack_4.json"
          ref="mobile_lottie_4"
          id="mobile_stack_4"
          loop
          autoplay
          style="z-index: 4;"
        ></lottie-player>

        <!-- END MOBILE ANIMATION -->
        <lottie-player
          class="hidden sm:block"
          src="/animation/stack-1.json"
          ref="lottie_1"
          id="stack-1"
          loop
          autoplay
          style="z-index: 1;"
        ></lottie-player>
        <lottie-player
          class="hidden sm:block"
          src="/animation/stack-2.json"
          ref="lottie_2"
          id="stack-2"
          loop
          autoplay
          style="z-index: 2;"
        ></lottie-player>
        <lottie-player
          class="hidden sm:block"
          src="/animation/stack-3.json"
          ref="lottie_3"
          id="stack-3"
          loop
          autoplay
          style="z-index: 3;"
        ></lottie-player>
        <lottie-player
          class="hidden sm:block"
          src="/animation/stack-4.json"
          ref="lottie_4"
          id="stack-4"
          loop
          autoplay
          style="z-index: 4;"
        ></lottie-player>
      </div>
    </div>
    <div class="products">
      <div class="container mx-auto">
        <h2 class="text-5xl font-thin mb-32">
          Explore tomorrow’s AI-driven solutions finely crafted for digital government and
          enterprise
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          <div v-for="(service, i) in services" class="flex flex-col items-center" :key="i">
            <img class="mb-10 min-w-10 min-h-10" :src="service.image_url" :alt="service.name" />
            <p class="text-3xl text-center font-thin">{{ service.name }}</p>
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
}
</style>
