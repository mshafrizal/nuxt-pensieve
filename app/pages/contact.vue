<template>
  <section class="career">
    <div class="hero">
      <h1 class="hero__text container mx-auto text-5xl text-white">
        You’re one step away <br />
        from making a difference
      </h1>
    </div>
    <div class="content pt-24 pb-64 flex flex-col">
      <div class="container mx-auto">
        <h1 class="text-5xl w-5/6">
          Ready to transform your organization with Pensieve’s AI-driven operation software?
        </h1>
        <p class="text-2xl mb-56 w-5/6">
          Email us at sales@pensieve.id or submit your interest below.
        </p>

        <form class="w-5/6">
          <div class="flex flex-col mb-12">
            <label for="name"> Name<span style="color: #7777ff;">*</span> </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              required
              class="text-field"
            />
          </div>
          <div class="flex flex-col mb-12">
            <label for="companyName"> Company Name<span style="color: #7777ff;">*</span> </label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              placeholder="The Startup"
              required
              class="text-field"
            />
          </div>
          <div class="flex flex-col mb-12">
            <label for="email"> Email<span style="color: #7777ff;">*</span> </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@pensieve.id"
              required
              class="text-field"
            />
          </div>
          <div class="flex flex-col mb-12">
            <label for="message"> Email<span style="color: #7777ff;">*</span> </label>
            <textarea name="message" id="message" class="text-field"></textarea>
          </div>
          <p class="text-purple-pensieve mb-32">*must be filled</p>
          <button class="uppercase" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import settings from '@/content/settings/general.json';

@Component({
  // Called to know which transition to apply
  transition() {
    return 'slide-left';
  },
})
export default class Home extends Vue {
  welcomeText = settings.welcomeText;

  get posts(): Post[] {
    return this.$store.state.posts;
  }

  isSignedUp = false;

  form = {
    email: '',
    companyName: '',
    name: '',
    message: '',
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
}
</script>

<style scoped>
.hero {
  width: 100%;
  background-image: url('~static/images/HEADERCONTACTUS.png');
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
}
.content {
  background-color: #dddddd;
}
.text-purple-pensieve {
  color: #7777ff;
}
</style>
