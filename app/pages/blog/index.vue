<template>
  <section class="blog">
    <div class="py-8 md:py-16 text-center">
      <h1 class="text-lg md:text-xl lg:text-4xl xl:text-6xl">Blog</h1>
      <h2 class="text-base md:text-lg lg:text-xl xl:text-2xl">
        Slow-carb messenger bag mlkshk fingerstache four dollar toast.
      </h2>
    </div>

    <div class="flex flex-wrap md:-mx-4 pb-20">
      <div v-for="(post, index) in posts" :key="index" class="w-full md:w-1/2 my-4 md:px-4">
        <div class="post">
          <nuxt-link :to="`/blog/${post.slug}`">
            <img
              class="w-full"
              :src="post.featuredImage || 'https://source.unsplash.com/random/640x340'"
            />
            <div class="p-6 bg-white">
              <h2 class="text-2xl mb-2">{{ post.title }}</h2>

              <p class="text-base font-light">
                {{ post.excerpt }}
              </p>

              <h6 class="text-blue-600 mt-4 font-medium">Read more</h6>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MetaInfo } from 'vue-meta';

@Component({
  head(): MetaInfo {
    return {
      title: 'Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Blog index',
        },
      ],
    };
  },
})
export default class BlogIndex extends Vue {
  get posts(): Post[] {
    return [...this.$store.state.posts];
  }
}
</script>

<style lang="scss">
.blog {
  .post {
    @apply shadow-md;
    transition: all 0.2s cubic-bezier(0.64, 0, 0.35, 1);
    &:hover {
      @apply shadow-xl;
    }
  }
}
</style>