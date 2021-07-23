<template>
  <div>
    <el-card class="article-item">
      <!--标题-->
      <template #header>
        <h1>{{ blog.title }}</h1>
        <div class="d-flex">
          <span><i class="el-icon-time"></i>：2019-03-24</span>
          <el-tag class="ml-auto" size="mini">swagger2</el-tag>
        </div>
      </template>
      <!--内容-->
      <div class="blog-abstract">
        test abstract
      </div>
      <div class="d-flex">
        <el-button plain class="mr-auto">阅读全文</el-button>
        <div><i class="el-icon-view"></i>12414</div>
      </div>
    </el-card>
  </div>

</template>

<script>
export default {
  name: "ArticleItem",
  props: {
    blog: {}
  },
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>

<style scoped>
h1{
  word-break:break-all;
}
.article-item{
  margin-top: 20px;
  margin-bottom: 20px;
}
.blog-abstract {
  margin-bottom: 10px;
}

h1 {
  margin: 0px;
}
</style>
