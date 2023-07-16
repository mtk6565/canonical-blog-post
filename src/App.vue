<template>
  <div class="row u-equal-height">
    <BlogPost v-for="(item, index) in data" :key="index" :item="item" />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import BlogPost from "./components/BlogPost.vue";
import { getBlogPostsData } from "./utils/getBlogPostsData";

export default {
  components: {
    BlogPost,
  },
  setup() {
    const data = ref(null);

    onMounted(async () => {
      try {
        data.value = await getBlogPostsData();
      } catch (error) {
        console.error("Error while fetching data: ", error);
      }
    });

    return {
      data,
    };
  },
};
</script>
