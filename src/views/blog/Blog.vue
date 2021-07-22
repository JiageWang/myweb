<template>
  <div>
    <el-row class="my-blog-view" type="flex" gutter="20" justify="center">
      <el-col :span="12">
        <article-item :blog="blog"></article-item>
                <article-item :blog="blog"></article-item>
                <article-item :blog="blog"></article-item>
                <article-item :blog="blog"></article-item>
                <article-item :blog="blog"></article-item>
      </el-col>
      <el-col :span="4">
        <tag-block></tag-block>
      </el-col>
    </el-row>
  </div>




</template>

<script>
import TagBlock from "components/TagBlock";
import ArticleItem from "components/ArticleItem";

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
    ArticleItem,
  },
}
</script>

<style scoped>

</style>
