<template>
  <div class="explore-pensieve relative">
    <div
      class="explore-pensieve-text container mx-auto flex flex-col px-6 justify-center pt-24 md:pt-0"
    >
      <h2 class="explore-pensieve-title">Explore #LifeAtPensieve</h2>
      <p class="explore-pensieve-desc">
        Our team has stories to tell. Access more of them on
        <a class="ext-link" :href="instagramURL" target="_blank">Instagram</a> and
        <a class="ext-link" :href="linkedinURL" target="_blank">LinkedIn</a> through
        #LifeAtPensieve!
      </p>
    </div>
    <img
      class="explore-pensieve-img"
      src="https://ik.imagekit.io/vin64b9qvp9/pensieveassets/uploads/photo-3_YWspuDiMd.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669439742227"
      alt="life at pensieve"
    />
  </div>
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
  instagramURL = settings.instagramUrl;

  linkedinURL = settings.linkedinUrl;
}
</script>

<style lang="scss" scoped>
.explore-pensieve {
  background-color: #dddddd;
  display: grid;
  grid-template-columns: 1fr;
}
.explore-pensieve-title {
  font-size: 30px;
}
.explore-pensieve-desc {
  color: #868686;
  font-size: 16px;
  margin-bottom: 64px;
}

.ext-link {
  background-color: $pgreen;
  color: #000;
  text-decoration: underline;
}

@media only screen and (min-width: 601px) {
  .explore-pensieve {
    grid-template-columns: 70% 30%;
  }
  .explore-pensieve-text {
    padding-left: 82px;
  }
}

@media (min-width: 1280px) {
  .explore-pensieve-text {
    padding-left: 80px;
  }
  .explore-pensieve-title {
    font-size: 50px;
  }
  .explore-pensieve-desc {
    font-size: 26px;
    margin-bottom: 0px;
  }
  .explore-pensieve-img {
    width: 100%;
    object-fit: cover;
  }
}
</style>
