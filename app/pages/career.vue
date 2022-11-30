<template>
  <section class="career">
    <div class="hero">
      <h1 class="hero__text container mx-auto text-white">
        We invite the best talents to solve the most critical problems in organizations with AI
      </h1>
    </div>

    <div class="content pt-24 pb-64 flex flex-col">
      <div class="container mx-auto flex flex-col sm:flex-row justify-between mb-8">
        <div class="w-full flex flex-col" style="max-width: 780px;">
          <h2 class="text-6xl leading-none mb-10 font-thin">
            We are looking for people who care deeply about their work and the people they work
            with.
          </h2>
          <p class="text-2xl text-gray-pensieve font-thin">
            You will be working in the field of deep tech and AI. We are also exploring the
            intersection of AI and Web3 in the government, and enterprise space. If this sounds
            exciting for you,
          </p>
        </div>
        <div class="w-1/3 flex justify-end items-start">
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

      <div class="container mx-auto mb-32">
        <div class="flex">
          <button class="font-mono px-16 py-4 border-2 border-black">
            JOIN PENSIEVE
          </button>
        </div>
      </div>

      <img
        class="mb-48"
        src="https://ik.imagekit.io/vin64b9qvp9/pensieveassets/uploads/photo-1_7DB0eMIDK.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669439818161"
        alt="decoration"
      />

      <div class="container mx-auto mb-64 flex flex-col sm:flex-row justify-between">
        <div class="flex flex-col">
          <h2 class="text-5xl mb-8">Hiring Process</h2>
          <p class="text-2xl text-gray-pensieve hiring-text-l">
            Hiring is a process that is crucial to the success of our company. At Pensieve, we care
            deeply about each team and the people who make them up. We’re working to build an A-team
            and that begins with hiring!
          </p>
        </div>
        <div class="p-6 border-2 border-black">
          <p class="text-2xl font-mono hiring-text-r">
            We believe in hiring people that are the right fit for our culture and our team, which
            is why we’ve designed our hiring process to be as simple, clear, and transparent as
            possible.
          </p>
        </div>
      </div>

      <div class="container mx-auto mb-56">
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
            <div class="border border-black border-t-0 text-center py-4 mb-16">
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
                src="/animation/career-1.json"
                ref="lottie"
                id="lottieBtn"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div class="border border-black border-t-0 text-center py-4 mb-16">
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
                src="/animation/career-1.json"
                ref="lottie"
                id="lottieBtn"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div class="border border-black border-t-0 text-center py-4 mb-16">
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
        class="mb-56"
      />

      <div class="container mx-auto flex flex-col sm:flex-row justify-between items-start">
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
              <h3 class="text-4xl mb-4">Radical responsibility</h3>
              <p class="text-gray-pensieve text-2xl">
                We commit to taking full responsibility for the circumstances of our lives, our
                work, and our wellbeing.
              </p>
            </div>
          </div>
          <div class="flex items-start mb-12">
            <div
              class="border border-black rounded-full w-36 h-36 flex items-center justify-center flex-grow mr-8 mb-10"
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
              <h3 class="text-4xl mb-4">Spirit of learning</h3>
              <p class="text-gray-pensieve text-2xl">
                We see every interaction as an opportunity to learn and grow. We commit to being
                self-aware, open,
              </p>
            </div>
          </div>
          <div class="flex items-start mb-12">
            <div
              class="border border-black rounded-full w-36 h-36 flex items-center justify-center flex-grow mr-8 mb-10"
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
              <h3 class="text-4xl mb-4">Customer obsession</h3>
              <p class="text-gray-pensieve text-2xl">
                We exist to build products that solve our customer’s toughest problems. We aim to
                ship .
              </p>
            </div>
          </div>
          <div class="flex items-start mb-12">
            <div
              class="border border-black rounded-full w-36 h-36 flex items-center justify-center flex-grow mr-8 mb-10"
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
              <h3 class="text-4xl mb-4">Courage to speak the truth</h3>
              <p class="text-gray-pensieve text-2xl">
                We say what is true for us and we empower others to express themselves with candor.
                We build trust by voicing out what
              </p>
            </div>
          </div>
          <div class="flex items-start mb-12">
            <div
              class="border border-black rounded-full w-36 h-36 flex items-center justify-center flex-grow mr-8 mb-10"
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
              <h3 class="text-4xl mb-4">Win for all</h3>
              <p class="text-gray-pensieve text-2xl">
                A win for me, is a win for you, is a win for Pensieve, is a win for the whole. We
                are open to the possibility that a win-for-all
              </p>
            </div>
          </div>
        </div>
        <div class="border border-black core-values-r p-8">
          <p class="font-mono text-2xl">
            Pensieve is all about creating an environment where you can thrive and grow. Our company
            values work as guiding principles that keep us in sync with one another and our clients
            for the most excellent results.
          </p>
        </div>
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
  background-image: url('~static/images/HEADERCAREER.png');
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
</style>
