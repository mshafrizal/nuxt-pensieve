<!-- eslint-disable vue-a11y/media-has-caption -->
<template>
  <section class="career">
    <div class="hero">
      <h1 class="hero__text container mx-auto text-white">
        Your top partner for AI-driven solutions for government and enterprise is here
      </h1>
    </div>

    <div class="content pt-24 pb-64 flex flex-col">
      <div class="container mx-auto flex flex-col sm:flex-row justify-between mb-48">
        <div class="w-2/3 flex flex-col">
          <h2 class="text-6xl leading-none mb-10 font-thin">
            Pensieve is here to help your organization run faster critical operations with AI. We go
            beyond your expectation.
          </h2>
        </div>
        <div
          class="w-1/3 flex justify-end items-start border border-black lg:p-6 font-mono text-xl"
        >
          Tackle integration and insights complexities in your government or business for smoother
          digital transformation.
          <br />
          <br />
          Pensieve’s artificial intelligence is here to remove that painful experience you have.
        </div>
      </div>
      <div class="container mx-auto flex">
        <div class="w-full md:w-1/3 flex flex-col mb-10 font-thin">
          <h3 class="text-4xl">Reducing hours of manual work to just minutes</h3>
          <p class="subtitle">
            Our beautiful analytics convert tons of data into intelligence and insights in minutes.
          </p>
          <h3 class="text-4xl">Not just insights, but also immediate action</h3>
          <p class="subtitle">
            Our software provides built-in workflows to give users guidance on actionable next steps
            for operations.
          </p>
          <h3 class="text-4xl">Ready to use on Day 1</h3>
          <p class="subtitle">
            Unlike complex softwares, our products are highly intuitive, that users can master in 1
            day.
          </p>
        </div>
        <div class="w-full md:w-2/3 flex mb-10 justify-center items-center">
          <img src="~/static/animation/about-1.gif" alt="about animation" />
        </div>
      </div>
    </div>
    <div class="methodologies">
      <div class="container mx-auto">
        <h2 class="text-5xl font-thin mb-12 text-center">
          Our Methodologies
        </h2>

        <lottie-player
          src="/animation/our-methodologies.json"
          ref="lottie"
          id="lottie-methodologies"
          loop
          autoplay
          style="width: 100%; max-width: 1024px; height: auto; margin: 0 auto;"
        ></lottie-player>
      </div>
    </div>
    <div class="about-video font-thin">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div class="mb-10">
          <h3 class="text-4xl">
            Big data analysis is done within minutes, thanks to Pensieve’s AI
          </h3>
          <p class="subtitle">
            Pinpoint the exact data that matter most, so you could get back to doing what you do
            best.
          </p>
        </div>
        <video src="~/static/video/VIDEO ABOUT US.mp4" controls id="about-video-player"></video>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  transition() {
    return 'slide-left';
  },
})
export default class Career extends Vue {}
</script>

<style scoped>
.hero {
  width: 100%;
  background-image: url('~static/images/HEADERABOUTUS.png');
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
.methodologies {
  background-color: #ebebeb;
  padding: 192px 0;
}
.subtitle {
  color: #767676;
  font-size: 26px;
  margin-bottom: 40px;
}
.about-video {
  background-color: #dddddd;
  padding: 300px 0 300px 0;
}
#about-video-player {
  max-width: 660px;
  width: 100%;
}
</style>
