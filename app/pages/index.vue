<template>
  <section class="home">
    <div class="py-4 md:py-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <div class="flex flex-col w-full xl:w-3/5 justify-center lg:items-start overflow-y-hidden">
        <h1 class="text-5xl">Transforming Government Agencies Into World-Class Organizations</h1>
        <p class="text-2xl mb-6">
          Pensieve transforms emerging market governments into world-class organizations with
          AI-Driven Ops
        </p>
        <div class="mb-12 xl:mb-0">
          <lottie-player
            src="/animation/home-button.json"
            ref="lottie"
            id="lottieBtn"
          ></lottie-player>
        </div>
      </div>
      <div class="flex flex-col w-full xl:w-2/5">
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

  encode(data): string {
    return Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  }

  validEmail(email): boolean {
    // eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  async handleSubmit(): Promise<void> {
    if (!this.validEmail(this.form.email)) {
      this.$refs.emailInput.focus();
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
      window.addEventListener('load', async function () {
        const lottie = document.getElementById('lottieBtn') as HTMLElementLottie;
        // const { lottie } = this.$refs;
        if (lottie) {
          const lottieInstance = await lottie.getLottie();
          lottie.addEventListener('mouseenter', function (): void {
            lottieInstance.playSegments([0, 15], true);
          });

          lottie.addEventListener('mouseout', function (): void {
            lottieInstance.playSegments([15, 30], true);
          });
          // create({
          //   mode: 'cursor',
          //   player: '#lottieBtn',
          //   actions: [
          //     {
          //       type: 'hold',
          //       frames: [0, 15],
          //     },
          //     // {
          //     //   position: { x: 1, y: 1 },
          //     //   type: 'seek',
          //     //   frames: [0, 15],
          //     // },
          //     // {
          //     //   position: { x: -1, y: -1 },
          //     //   type: 'seek',
          //     //   frames: [15, 30],
          //     // },
          //   ],
          // });
        }
      });
    }
  }
}
</script>
