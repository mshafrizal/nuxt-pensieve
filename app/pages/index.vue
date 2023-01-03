<template>
  <section class="home container mx-auto px-4 sm:px-0">
    <div class="md:py-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <div class="flex flex-col w-full lg:w-3/5 justify-center lg:items-start overflow-y-hidden">
        <h1 class="text-2xl lg:text-5xl md:px-10 md:mb-10">
          Unlock Your 100% Data Potential with AI-Driven Solutions for Your Organization
        </h1>
        <img
          class="flex lg:hidden mx-auto md:mb-10"
          alt="Planet"
          src="https://ik.imagekit.io/vin64b9qvp9/pensieveassets/animation/home-sphere_xJtsf4nOh.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1669442264204"
          style="max-height: 335px; max-width: 335px;"
        />
        <p class="md:text-2xl mb-2 md:mb-6 md:px-10" style="color: #656565;">
          Enable faster insight generation with Pensieve’s AI solutions for emerging-market
          government and enterprise
        </p>
        <div class="mb-12 xl:mb-0 md:px-10">
          <lottie-player
            src="/animation/home-button.json"
            ref="lottie"
            id="lottieBtn"
          ></lottie-player>
        </div>
      </div>
      <div class="hidden lg:flex flex-col w-full sm:w-1/2 lg:w-2/5">
        <img
          alt="Planet"
          src="https://ik.imagekit.io/vin64b9qvp9/pensieveassets/animation/home-sphere_xJtsf4nOh.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1669442264204"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
// import { create } from '@lottiefiles/lottie-interactivity';
import { Component, Vue } from 'nuxt-property-decorator';
import settings from '@/content/settings/general.json';

type HTMLElementLottie = HTMLElement & {
  setDirection(direction: number): void;
  play(): void;
  playSegments(segments: number[] | number[][], forceFlag?: boolean): void;
  getLottie(): Promise<{
    playSegments(segments: number[] | number[][], forceFlag?: boolean): void;
  }>;
};
@Component({
  // Called to know which transition to apply
  transition() {
    return 'slide-left';
  },
  layout: 'home',
})
export default class Home extends Vue {
  welcomeText = settings.welcomeText;

  get posts(): Post[] {
    return this.$store.state.posts;
  }

  isSignedUp = false;

  form = {
    email: '',
  };

  encode(data: Record<string, string | number | boolean>): string {
    return Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  }

  validEmail(email: string): boolean {
    // eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  async handleSubmit(): Promise<void> {
    if (!this.validEmail(this.form.email)) {
      return;
    }

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({ 'form-name': 'signups', ...this.form }),
      });

      this.isSignedUp = true;
    } catch (error) {
      console.error(error);
    }
  }

  mounted(): void {
    if (process.browser) {
      window.addEventListener('load', async () => {
        const lottie = document.getElementById('lottieBtn') as HTMLElementLottie;
        // const { lottie } = this.$refs;
        if (lottie) {
          const lottieInstance = await lottie.getLottie();
          lottie.addEventListener('mouseenter', (): void => {
            lottieInstance.playSegments([0, 15], true);
          });

          lottie.addEventListener('mouseout', (): void => {
            lottieInstance.playSegments([15, 30], true);
          });
        }
      });
    }
  }
}
</script>
