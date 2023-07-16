<template>
  <div class="col-4 p-card--highlighted">
    <header class="p-card__header">
      <a :href="articleHeaderLink">
        <h4 class="p-muted-heading">{{ articleHeader }}</h4>
      </a>
    </header>

    <div class="p-card__content">
      <a :href="itemLink">
        <img class="p-card__image" :src="itemImageSrc" alt="Article" />
      </a>
      <div class="p-heading-container">
        <h3 class="p-heading--4">
          <a :href="itemLink">{{ itemTitle }}</a>
        </h3>
      </div>
      <p>
        <em
          >By <a :href="authorLink">{{ author }}</a> on {{ postDate }}</em
        >
      </p>
    </div>

    <hr class="is-muted" />
    <p class="p-card__footer">Article</p>
  </div>
</template>

<script>
import { getArticleHeader } from "@/utils/getArticleHeader";
import { getDate } from "@/utils/getDate";

export default {
  name: "BlogPost",
  props: {
    item: Object,
  },
  computed: {
    articleHeader() {
      return getArticleHeader(this.item).articleHeader;
    },
    articleHeaderLink() {
      return getArticleHeader(this.item).articleHeaderLink;
    },
    itemLink() {
      return this.item.link;
    },
    itemImageSrc() {
      return this.item.featured_media;
    },
    itemTitle() {
      return this.item.title.rendered;
    },
    author() {
      return this.item._embedded.author[0].name;
    },
    authorLink() {
      return this.item._embedded.author[0].link;
    },
    postDate() {
      return getDate(this.item.date);
    },
  },
};
</script>
