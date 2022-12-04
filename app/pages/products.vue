<template>
  <section class="career">
    <div class="hero">
      <h1 class="hero__text container mx-auto text-white">
        Pensieve helps governments solve their most complex challenges in digital transformation
      </h1>
    </div>

    <div class="content pt-24 pb-64 flex flex-col">
      <div class="container mx-auto flex flex-col sm:flex-row justify-between mb-48">
        <div class="w-1/3 flex flex-col">
          <h2 class="text-6xl leading-none mb-10 font-thin">
            How It Works
          </h2>
          <h3 class="hiw-title">
            4 <br />
            User Layer Interface
          </h3>
          <p class="hiw-description">
            Intuitive Desktop and mobile apps with a human-centric approach
          </p>
          <h3 class="hiw-title">
            3 <br />
            Data Analytics for Decision-Making Support
          </h3>
          <p class="hiw-description">
            Our AI/ML algorithms augment human intelligence effectively and efficiently
          </p>
          <h3 class="hiw-title">
            2 <br />
            Data Integration and Engineering
          </h3>
          <p class="hiw-description">
            Integration and engineering layer that connects multiple data sources.
          </p>
          <h3 class="hiw-title">
            1 <br />
            Data Assets and Acquisition
          </h3>
          <p class="hiw-description">
            Multiple data sources, sensors, and legacy systems exist in silos.
          </p>
        </div>
        <div class="w-2/3 flex justify-end items-start">
          <lottie-player
            src="/animation/career-1.json"
            ref="lottie"
            id="lottieBtn"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
    <div class="products">
      <div class="container mx-auto">
        <h2 class="text-5xl font-thin mb-64">
          Pensieve enables a new era of e-government/ digital government that provides great public
          service at scale.
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
  max-width: 936px;
  font-size: 80px;
  font-weight: 200;
  line-height: 1;
}
.content {
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
</style>
