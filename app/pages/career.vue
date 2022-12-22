<template>
  <section class="career">
    <div class="hero">
      <h1 class="hero__text container mx-auto text-white">
        Your journey to making an impact with AI-powered thinking starts here
      </h1>
    </div>

    <div class="content pt-24 pb-64 flex flex-col">
      <div
        id="first-section"
        class="container mx-auto flex flex-col sm:flex-row justify-between mb-8"
      >
        <div class="w-full flex flex-col px-6">
          <h2 class="leading-none mb-10 font-thin">
            We are on our quest to find the most passionate people in AI and Web3
          </h2>
          <p class="md:text-2xl text-gray-pensieve font-thin">
            If you’re seeking for a playground to experiment with deep tech, AI and Web3 solutions
            for government and companies, you’ve come to the perfect spot!
          </p>
          <lottie-player
            class="mb-10"
            src="/animation/home-button.json"
            ref="lottie"
            id="firstCta"
          ></lottie-player>
        </div>
        <div class="hidden w-1/3 md:flex justify-end items-start">
          <div class="relative mission">
            <div class="box box-top"></div>
            <div class="text-2xl p-6">
              Our mission is a big mission, and a big mission requires a great team.
              <br />
              <br />
              So, whatever that bar is for a great team in your head, let’s raise that.
            </div>
            <div class="box box-bot"></div>
          </div>
        </div>
      </div>

      <div class="container px-6 mx-auto mb-24 md:mb-64 flex flex-col sm:flex-row justify-between">
        <div class="flex flex-col">
          <h2 class="md:text-5xl mb-8">Our Hiring Process</h2>
          <p class="md:text-2xl text-gray-pensieve hiring-text-l">
            Selecting the right candidate is the heart of our hiring process. At Pensieve, we care
            deeply about each team & the people who make them up. We’re here to build an A+ team
            from the ground up.
          </p>
        </div>
        <!-- <div class="p-6 border-2 border-black">
          <p class="text-2xl font-mono hiring-text-r">
            We believe in hiring people that are the right fit for our culture and our team, which
            is why we’ve designed our hiring process to be as simple, clear, and transparent as
            possible.
          </p>
        </div> -->
      </div>

      <div class="px-6 md:hidden mb-24">
        <div class="relative mission">
          <div class="box box-top"></div>
          <div class="text-2xl p-6">
            Our mission is a big mission, and a big mission requires a great team.
            <br />
            <br />
            So, whatever that bar is for a great team in your head, let’s raise that.
          </div>
          <div class="box box-bot"></div>
        </div>
      </div>

      <img
        class="mb-24 md:mb-48"
        src="https://ik.imagekit.io/vin64b9qvp9/pensieveassets/uploads/photo-1_7DB0eMIDK.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669439818161"
        alt="decoration"
      />

      <div class="container mx-auto px-6 mb-24 md:mb-56">
        <h2 class="text-5xl mb-10 w-full sm:w-/12 font-thin">So, what happens once you apply?</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 font-thin">
          <div class="flex flex-col">
            <div class="border border-black">
              <lottie-player
                src="/animation/career-1.json"
                ref="lottie"
                id="lottieBtn"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div class="border border-black border-t-0 text-center py-4 mb-5 md:mb-16">
              <h3 class="text-4xl">Interview</h3>
            </div>
            <p class="text-gray-pensieve text-2xl">
              We must first get to know you. We'll do an initial call with you, where we can ask
              questions about your background and interests—and then, if all goes well, we'll move
              on to a coding test (only applicable to certain positions).
            </p>
          </div>
          <div class="flex flex-col">
            <div class="border border-black">
              <lottie-player
                src="/animation/career-2.json"
                ref="lottie"
                id="lottieBtn"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div class="border border-black border-t-0 text-center py-4 mb-5 md:mb-16">
              <h3 class="text-4xl">1-Day Trial</h3>
            </div>
            <p class="text-gray-pensieve text-2xl">
              After that, if you pass the interviews, we'll invite you to join us on a 1-day trial
              at our office! (only applicable to certain positions).
            </p>
          </div>
          <div class="flex flex-col">
            <div class="border border-black">
              <lottie-player
                src="/animation/career-3.json"
                ref="lottie"
                id="lottieBtn"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div class="border border-black border-t-0 text-center py-4 mb-5 md:mb-16">
              <h3 class="text-4xl">Decisions and Offer</h3>
            </div>
            <p class="text-gray-pensieve text-2xl">
              After all the dust has settled from the interviews and tests, we'll review your
              application along with feedback from the Team Lead and CEO before making a final
              decision and offering you the job! If the answer is yes, then congratulations! Welcome
              to the team!
            </p>
          </div>
        </div>
      </div>

      <img
        src="https://ik.imagekit.io/vin64b9qvp9/pensieveassets/uploads/photo-2_K-b4Z8Iss.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669439813713"
        alt="decoration 2"
        class="mb-24 md:mb-56"
      />

      <div class="container mx-auto flex flex-col sm:flex-row justify-between items-start px-6">
        <div class="flex flex-col core-values-l mb-8 font-thin">
          <h2 class="text-5xl mb-8">Core Values</h2>
          <div class="flex items-start mb-12">
            <div
              class="border border-black rounded-full w-36 h-36 flex items-center justify-center flex-grow mr-8 mb-10 timeline-dot"
            >
              <lottie-player
                src="/animation/value-1.json"
                ref="lottie"
                id="lottieBtn"
                loop
                autoplay
                class="w-24 h-24"
              ></lottie-player>
            </div>
            <div class="flex flex-col flex-grow-0">
              <h3 class="text-4xl mb-4">Integrity</h3>
              <p class="text-gray-pensieve text-2xl">
                We believe in honesty and in the ethical code.
              </p>
            </div>
          </div>
          <div class="flex items-start mb-12">
            <div
              class="border border-black rounded-full w-36 h-36 flex items-center justify-center flex-grow mr-8 mb-10"
            >
              <lottie-player
                src="/animation/value-2.json"
                ref="lottie"
                id="lottieBtn"
                loop
                autoplay
                class="w-24 h-24"
              ></lottie-player>
            </div>
            <div class="flex flex-col flex-grow-0">
              <h3 class="text-4xl mb-4">Ownership</h3>
              <p class="text-gray-pensieve text-2xl">
                We take ownership without being asked and act on behalf of the company as if it were
                our own.
              </p>
            </div>
          </div>
          <div class="flex items-start mb-12">
            <div
              class="border border-black rounded-full w-36 h-36 flex items-center justify-center flex-grow mr-8 mb-10"
            >
              <lottie-player
                src="/animation/value-3.json"
                ref="lottie"
                id="lottieBtn"
                loop
                autoplay
                class="w-24 h-24"
              ></lottie-player>
            </div>
            <div class="flex flex-col flex-grow-0">
              <h3 class="text-4xl mb-4">Empowerment & Trust</h3>
              <p class="text-gray-pensieve text-2xl">
                We believe in those closest to the issue and trust them to solve it. Everyone is
                empowered and encouraged to make decisions.
              </p>
            </div>
          </div>
          <div class="flex items-start mb-12">
            <div
              class="border border-black rounded-full w-36 h-36 flex items-center justify-center flex-grow mr-8 mb-10"
            >
              <lottie-player
                src="/animation/value-4.json"
                ref="lottie"
                id="lottieBtn"
                loop
                autoplay
                class="w-24 h-24"
              ></lottie-player>
            </div>
            <div class="flex flex-col flex-grow-0">
              <h3 class="text-4xl mb-4">Accountability</h3>
              <p class="text-gray-pensieve text-2xl">
                We believe in people taking accountability and responsibility for results.
              </p>
            </div>
          </div>
          <div class="flex items-start mb-12">
            <div
              class="border border-black rounded-full w-36 h-36 flex items-center justify-center flex-grow mr-8 mb-10"
            >
              <lottie-player
                src="/animation/value-5.json"
                ref="lottie"
                id="lottieBtn"
                loop
                autoplay
                class="w-24 h-24"
              ></lottie-player>
            </div>
            <div class="flex flex-col flex-grow-0">
              <h3 class="text-4xl mb-4">Result-Driven</h3>
              <p class="text-gray-pensieve text-2xl">
                We say what we do, and we do what we say. We focus on the results in a binary way -
                either we achieve or don’t, nothing in between!
              </p>
            </div>
          </div>
        </div>
        <!-- <div class="border border-black core-values-r p-8">
          <p class="font-mono text-2xl">
            Pensieve is all about creating an environment where you can thrive and grow. Our company
            values work as guiding principles that keep us in sync with one another and our clients
            for the most excellent results.
          </p>
        </div> -->
      </div>
    </div>
  </section>
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
  mounted(): void {
    if (process.browser) {
      window.addEventListener('load', async () => {
        const lottie = document.getElementById('firstCta') as HTMLElementLottie;
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

<style lang="scss" scoped>
.hero {
  width: 100%;
  background-image: url('~static/images/HEADERCAREER.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #dddddd;
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
.text-purple-pensieve {
  color: #7777ff;
}
.box {
  border-width: 3px;
  border-color: #7777ff;
  border-style: solid;
  width: 30px;
  height: 30px;
  &.box-top {
    position: absolute;
    top: -15px;
    left: -15px;
    border-right-style: none;
    border-bottom-style: none;
  }
  &.box-bot {
    position: absolute;
    bottom: -15px;
    right: -15px;
    border-top-style: none;
    border-left-style: none;
  }
}
.mission {
  max-width: 287px;
  width: 100%;
}
.hiring-text-l {
  width: 100%;
  max-width: 660px;
}
.hiring-text-r {
  width: 100%;
  max-width: 400px;
}
.core-values-l {
  max-width: 720px;
  width: 100%;
}
.core-values-r {
  max-width: 400px;
  width: 100%;
}
@media only screen and (max-width: 600px) {
  .hero {
    height: 576px;
    background-position: right;
  }
  .hero__text {
    font-size: 40px;
    max-width: calc(100% - 48px);
    left: 24px;
    top: 25%;
    transform: translateY(-25%);
  }
  .content {
    padding: 96px 0px;
  }
  h2 {
    font-size: 30px;
  }
  h3 {
    font-size: 17px;
  }
  p {
    font-size: 16px;
  }
  #firstCta {
    margin-top: 40px;
  }
  .mission {
    max-width: none;
    width: calc(100% - 48px);
    margin: 0 auto;
  }
}
</style>
