<template>
  <div class="blog-item">
    <img id="blogimage" :src="blogPost.image_url" alt="blog image" />
    <div class="flex flex-col p-6">
      <p id="blogtag" class="underline font-sinter-bold mb-6">{{ blogPost.tag }}</p>
      <h1 id="blogtitle">{{ blogPost.title }}</h1>
      <div class="flex gap-4 mb-20">
        <span id="blogcreateddate" class="font-sinter">{{ blogPost.created_at }}</span
        >&centerdot;<span id="blogreadlength" class="font-sinter">{{ blogPost.read_length }}</span>
      </div>
      <p id="blogcontent">{{ blogPost.content }}</p>
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
  transition: filter 1s;
  &:hover {
    border: 1px solid #000000;
    cursor: pointer;
    #blogimage {
      filter: grayscale(0);
    }
  }
  #blogimage {
    aspect-ratio: 4 / 3;
    transition: filter 1s;
    filter: grayscale(1);
  }
  #blogtag {
    color: #857bff;
    font-size: 18px;
  }
  #blogtitle {
    font-size: 26px;
  }
  #blogcreateddate,
  #blogreadlength {
    font-size: 18px;
  }
  #blogcreateddate,
  #blogreadlength,
  #blogcontent {
    color: #808080;
  }
  #blogcontent {
    font-size: 24px;
  }
}
</style>
