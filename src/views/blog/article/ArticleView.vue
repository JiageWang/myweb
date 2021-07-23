<template>
  <div id="article-view">
    <el-scrollbar>
      <el-row class="my-blog-view" type="flex" gutter="20" justify="center">
        <el-col :span="12">
          <article-item :blog="blog"></article-item>
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
    </el-scrollbar>
  </div>

</template>

<script>
import ArticleItem from "./ArticleItem";
import TagBlock from "components/TagBlock";

export default {
  name: "ArticleView",
  components: {
    ArticleItem,
    TagBlock
  }
}
</script>

<style scoped>
#article-view{
  /*父组件必须设置高度才能使滚动条生效*/
  height: 100%;
}
#article-view /deep/ .el-scrollbar__view {
  overflow-x: hidden;
}

</style>
