<template>
  <div class="blog-item">
    <img :src="blogPost.image_url" alt="blog image" />
    <div class="flex flex-col p-6">
      <p class="underline mb-6">{{ blogPost.tag }}</p>
      <h1 class="text-2xl">{{ blogPost.title }}</h1>
      <div class="flex gap-4 mb-20">
        <span>{{ blogPost.created_at }} &centerdot; {{ blogPost.read_length }}</span>
      </div>
      <p>{{ blogPost.content }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({})
export default class BlogItem extends Vue {
  @Prop({
    required: true,
    type: Object as () => BlogPost,
  })
  readonly blogPost!: BlogPost;
}
</script>

<style lang="scss">
.blog-item {
  display: flex;
  flex-direction: column;
  border: 1px solid #c4c4c4;
  &:hover {
    border: 1px solid #000000;
    cursor: pointer;
  }
  font-family: 'Archivo';
}
</style>
