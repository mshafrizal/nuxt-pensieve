<template>
  <div class="get-to-know flex flex-col">
    <h2 class="get-to-know-title">Get to know Us</h2>
    <p class="text-gray-pensieve text-2xl mb-5">
      From the people who make Pensieve an amazing place to work!
    </p>
    <div class="flex gap-5 items-start">
      <div class="w-1/3 grid grid-cols-1 md:grid-cols-2 gap-2">
        <lottie-player
          src="/animation/button-testimoni-hanna.json"
          ref="gtkRef1"
          id="gtk-1"
          class="mb-5"
        ></lottie-player>
        <lottie-player
          src="/animation/button-testimoni-agung.json"
          ref="gtkRef2"
          id="gtk-2"
          class="mb-5"
        ></lottie-player>
        <lottie-player
          src="/animation/button-testimoni-yoana.json"
          ref="gtkRef3"
          id="gtk-3"
          class="mb-5"
        ></lottie-player>
        <lottie-player
          src="/animation/button-testimoni-dzaki.json"
          ref="gtkRef4"
          id="gtk-4"
          class="mb-5"
        ></lottie-player>
      </div>
      <div class="w-2/3">
        <p class="mb-6">
          Pensieve is a place for me to learn about the startup and entrepreneurship world and grow
          in my career and who I am as a person.
          <br />
          <br />
          An expensive experience working closely with the CEO, Farina. she is a nice person and
          provided me with an opportunity to learn more about technology, marketing, and business
          development.
        </p>
        <div class="flex flex-col md:flex-row">
          <p><strong>Hanna Annisa</strong></p>
          <p>CEO Office Analyst</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  transition() {
    return 'slide-left';
  },
})
export default class GetToKnowSection extends Vue {
  gtk1 = false;

  gtk2 = false;

  gtk3 = false;

  gtk4 = false;

  mounted(): void {
    if (process.browser) {
      window.addEventListener('load', async () => {
        const getToKnowAnims: HTMLElementLottie[] = [];
        const gtk1 = document.getElementById('gtk-1') as HTMLElementLottie;
        if (gtk1) getToKnowAnims.push(gtk1);
        const gtk2 = document.getElementById('gtk-2') as HTMLElementLottie;
        if (gtk2) getToKnowAnims.push(gtk2);
        const gtk3 = document.getElementById('gtk-3') as HTMLElementLottie;
        if (gtk3) getToKnowAnims.push(gtk3);
        const gtk4 = document.getElementById('gtk-4') as HTMLElementLottie;
        if (gtk4) getToKnowAnims.push(gtk4);

        getToKnowAnims.map(async (animItem, index) => {
          const lottieInstance = await animItem.getLottie();
          animItem.addEventListener('mouseenter', (): void => {
            lottieInstance.playSegments([0, 14], true);
          });
          animItem.addEventListener('mouseout', (): void => {
            lottieInstance.playSegments([16, 30], true);
          });
          animItem.addEventListener('click', (): void => {
            lottieInstance.goToAndStop(32, true);
          });
          if (index === 0) Vue.set(this, `gtk${index + 1}`, true);
        });
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.get-to-know-title {
  font-size: 30px;
}

@media (min-width: 1280px) {
  .get-to-know-title {
    font-size: 66px;
  }
}
</style>
