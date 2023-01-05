<template>
  <client-only>
    <lottie-player
      class="mb-10"
      src="/animation/button-career.json"
      ref="lottie"
      id="careerCta"
    ></lottie-player>
  </client-only>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

type HTMLElementLottie = HTMLElement & {
  setDirection(direction: number): void;
  play(): void;
  playSegments(segments: number[] | number[][], forceFlag?: boolean): void;
  getLottie(): Promise<{
    playSegments(segments: number[] | number[][], forceFlag?: boolean): void;
  }>;
};
@Component({
  transition() {
    return 'slide-left';
  },
})
export default class Career extends Vue {
  async mounted(): Promise<void> {
    try {
      const lottie = document.getElementById('careerCta') as HTMLElementLottie;
      console.log('mounted called', lottie);
      if (lottie) {
        const lottieInstance = await lottie.getLottie();
        lottie.addEventListener('mouseenter', (): void => {
          console.log('mouseenter');
          lottieInstance.playSegments([0, 15], true);
        });

        lottie.addEventListener('mouseout', (): void => {
          lottieInstance.playSegments([15, 30], true);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  #careerCta {
    margin-top: 40px;
  }
}
@media (min-width: 1280px) {
  #careerCta {
    margin-top: 60px;
    max-width: 300px;
  }
}
</style>
