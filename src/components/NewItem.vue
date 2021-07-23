<template>
  <div class="new-item">
    <el-button>
      <img :src="img" alt="">
    </el-button>
  </div>
</template>

<script>
export default {
  name: "NewArticle.vue",
  props: {
    img: {}
  }
}
</script>

<style scoped>
.new-item{
  position: fixed;
  left: 0;
  top: 40%;
}
.new-item img{
  height: 40px;
  width: 40px;
}
.new-item button{
  padding: 10px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
</style>
