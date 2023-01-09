<template>
  <client-only>
    <div class="get-to-know py-24">
      <div class="flex flex-col container mx-auto px-6 sm:px-0">
        <h2 class="get-to-know-title">Get to know Us</h2>
        <p class="text-gray-pensieve text-2xl mb-5 md:w-1/3">
          From the people who make Pensieve an amazing place to work!
        </p>
        <div class="flex gap-5 items-start">
          <div class="w-1/3 grid grid-cols-1 md:grid-cols-2 gap-2">
            <lottie-player
              src="/animation/button-testimoni-hanna.json"
              ref="gtkLottie"
              id="gtk-0"
              class="mb-5"
              @click="onButtonClick($event, 0)"
            ></lottie-player>
            <lottie-player
              src="/animation/button-testimoni-agung.json"
              ref="gtkLottie"
              id="gtk-1"
              class="mb-5"
              @click="onButtonClick($event, 1)"
            ></lottie-player>
            <lottie-player
              src="/animation/button-testimoni-dzaki.json"
              ref="gtkLottie"
              id="gtk-2"
              class="mb-5"
              @click="onButtonClick($event, 2)"
            ></lottie-player>
            <lottie-player
              src="/animation/button-testimoni-yoana.json"
              ref="gtkLottie"
              id="gtk-3"
              class="mb-5"
              @click="onButtonClick($event, 3)"
            ></lottie-player>
          </div>
          <div class="w-2/3">
            <template v-for="(content, i) in getToKnowContent">
              <div class="lg:pl-24" :key="i" v-if="content.active">
                <p id="contenttext" class="mb-6" v-html="content.text"></p>
                <div class="flex flex-col md:flex-row md:justify-end">
                  <p id="contentauthor">
                    <strong>{{ content.author }}</strong>
                  </p>
                  <p id="contentposition">{{ content.position }}</p>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import settings from '@/content/settings/general.json';

@Component({
  transition() {
    return 'slide-left';
  },
})
export default class GetToKnowSection extends Vue {
  animatedEls: boolean[] = [true, false, false, false];

  lottieInstances: any[] = [];

  getToKnowContent = settings.getToKnowContent;

  async onButtonClick(e: Event, index: number): Promise<void> {
    const target = e.target as HTMLElement & Lottie;
    const lottie = await target.getLottie();
    if (this.animatedEls[index]) {
      lottie.goToAndStop(0, true);
    } else {
      lottie.goToAndStop(32, true);
    }
    this.animatedEls[index] = !this.animatedEls[index];
    this.getToKnowContent[index].active = !this.getToKnowContent[index].active;
    this.animatedEls = this.animatedEls.map((el, i) => {
      if (i !== index) {
        this.getToKnowContent[i].active = false;
        return false;
      }
      return el;
    });
    this.animatedEls.forEach(async (el, i) => {
      if (el) {
        const gtkLottie = document.getElementById(`gtk-${i}`) as HTMLElementLottie;
        if (gtkLottie) {
          const instance = await gtkLottie.getLottie();
          instance.goToAndStop(32, true);
        }
      } else {
        console.log(el, i);
        const gtkLottie = document.getElementById(`gtk-${i}`) as HTMLElementLottie;
        if (gtkLottie) {
          const instance = await gtkLottie.getLottie();
          instance.goToAndStop(0, true);
        }
      }
    });
  }

  mounted(): void {
    if (process.browser) {
      window.addEventListener('load', async () => {
        const getToKnowAnims: HTMLElementLottie[] = [];
        const gtk1 = document.getElementById('gtk-0') as HTMLElementLottie;
        if (gtk1) getToKnowAnims.push(gtk1);
        const gtk2 = document.getElementById('gtk-1') as HTMLElementLottie;
        if (gtk2) getToKnowAnims.push(gtk2);
        const gtk3 = document.getElementById('gtk-2') as HTMLElementLottie;
        if (gtk3) getToKnowAnims.push(gtk3);
        const gtk4 = document.getElementById('gtk-3') as HTMLElementLottie;
        if (gtk4) getToKnowAnims.push(gtk4);

        getToKnowAnims.map(async (animItem, index) => {
          const lottieInstance = await animItem.getLottie();
          this.lottieInstances.push(lottieInstance);
          if (index === 0) lottieInstance.goToAndStop(32, true);
          // animItem.addEventListener('click', (): void => {
          //   lottieInstance.goToAndStop(0, true);
          //   if (!this[`gtk${index + 1}`]) {
          //     lottieInstance.goToAndStop(32, true);
          //   } else {
          //     lottieInstance.goToAndStop(0, true);
          //   }
          //   Vue.set(this, `gtk${index + 1}`, !this[`gtk${index + 1}`]);
          //   // this[`gtk${index + 1}`] = !this[`gtk${index + 1}`];
          // });
          // if (index === 0) Vue.set(this, `gtk${index + 1}`, true);
        });
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.get-to-know {
  background-color: #ebebeb;
}
.get-to-know-title {
  font-size: 30px;
}

@media (min-width: 1280px) {
  .get-to-know-title {
    font-size: 66px;
  }
  #contenttext,
  #contentauthor,
  #contentposition {
    font-size: 26px;
  }
  #contentauthor {
    margin-right: 24px;
  }
  #contenttext {
    margin-bottom: 149px;
  }
}
</style>
