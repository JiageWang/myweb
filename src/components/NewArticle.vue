<template>
  <div class="new-article">
    <el-button>
      <img src="~assets/img/write.svg" alt="">
    </el-button>
  </div>
</template>

<script>
export default {
  name: "NewArticle.vue"
}
</script>

<style scoped>
.new-article{
  position: fixed;
  left: 0;
  top: 40%;
}
.new-article img{
  height: 60px;
  width: 60px;
}
</style>
