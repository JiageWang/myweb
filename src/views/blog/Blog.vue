<template>
  <div id="blog">
    <article-view/>
    <new-item :img="require('../../assets/img/new-article.svg')"/>
  </div>
</template>

<script>
import ArticleView from "./article/ArticleView";
import TagBlock from "components/TagBlock";
import NewItem from "components/NewItem";

export default {
  name: "Blog",
  data() {
    return {
      blog: {
        title: '1testasetasetadfasdfasdfasdf',
        date: new Date(),
        img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
      }
    }
  },
  components: {
    TagBlock,
    ArticleView,
    NewItem
  },
}
</script>

<style scoped>

</style>
