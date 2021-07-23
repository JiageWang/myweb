<template>
  <div id="article-item">
    <el-card class="article-item-card">
      <!--标题-->
      <template #header class="card-header">
        <h1>test1111111111111111111111111111111</h1>
        <div class="d-flex">
          <span class="ml-auto"><i class="el-icon-time"></i>：2019-03-24</span>
        </div>
      </template>

      <!--内容-->
      <div class="article-item-abstract">
        test abstract
      </div>
      <div class="d-flex">
        <span class="mr-auto"><el-tag size="small">swagger2</el-tag></span>
        <span><i class="el-icon-view"></i>12414</span>
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
.article-item-card{
  margin-top: 20px;
  margin-bottom: 20px;
}
.article-item-abstract {
  height: 40px;
  margin-bottom: 10px;
}
#article-item /deep/ .el-card__header{
  padding-bottom: 0;
}

h1 {
  margin: 0px;
}
</style>
