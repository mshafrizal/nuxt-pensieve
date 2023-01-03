<template>
  <section class="blog">
    <div class="hero">
      <div class="hero__text container mx-auto flex flex-col">
        <h1 class="text-6xl text-white mb-4">
          Pensieve Blog: From Tech Insights to Thought Leadership
        </h1>
        <p class="text-2xl text-white mb-20">Get newest article about latest technology</p>
        <div class="w-64">
          <lottie-player
            src="/animation/button-blog.json"
            ref="lottie"
            id="lottieBtn"
          ></lottie-player>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="container mx-auto flex flex-col py-24">
        <div class="flex mb-16 w-1/3">
          <form class="flex-grow">
            <label for="search">
              <input
                class="h-15 bg-transparent border border-black px-6 py-3 w-full"
                type="text"
                name="search"
                id="search"
                placeholder="search article / topic / month"
              />
            </label>
          </form>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-10" v-if="blogSample">
          <blog-item v-for="n in 9" :key="n" :blog-post="blogSample"> </blog-item>
        </div>
      </div>
    </div>

    <!-- <div class="flex flex-wrap md:-mx-4 pb-20">
      <div v-for="(post, index) in posts" :key="index" class="w-full md:w-1/2 my-4 md:px-4">
        <div class="post">
          <nuxt-link :to="`/blog/${post.slug}`">
            <img
              :alt="post.title"
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
    </div> -->
    <!-- <Pagination v-if="totalPages > 1" :current-page="currentPage" :total-pages="totalPages" /> -->
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta';

const Pagination = () => import('@/components/commons/pagination.vue');
const BlogItem = () => import('@/components/partials/blogItem.vue');

@Component({
  components: {
    Pagination,
    BlogItem,
  },

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
  currentPage!: number;

  totalPages!: number;

  posts: Post[] = [];

  blogSample: BlogPost | null = null;

  async asyncData({
    params,
    store,
  }: {
    params: any;
    store: any;
  }): Promise<Record<string, unknown>> {
    const page: number = params.page ? parseInt(params.page, 10) : 1;
    const { perPage }: { perPage: number } = store.state;
    const range = page * perPage;

    const posts = store.state.posts.filter((post, index) => {
      const indexPage = index + 1;
      return range - perPage < indexPage && indexPage <= range;
    });

    const blog = require('@/content/blog/dummyblog.json');

    return {
      currentPage: page,
      totalPages: Math.ceil(store.state.posts.length / perPage),
      posts: posts || [],
      blogSample: blog,
    };
  }

  mounted(): void {
    if (process.browser) {
      window.addEventListener('load', async () => {
        const lottie = document.getElementById('lottieBtn') as HTMLElementLottie;
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
.hero {
  width: 100%;
  background-image: url('~static/images/HEADERBLOG.png');
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
  max-width: 1280px;
  font-size: 80px;
  font-weight: 200;
  line-height: 1;
}
.content {
  background-color: #dddddd;
}
</style>
