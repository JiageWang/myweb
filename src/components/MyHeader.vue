<template>
  <el-header>
    <el-menu :default-active="activeIndex" class="d-flex" mode="horizontal" router="true">
      <el-menu-item class="mr-auto"><img src="~assets/img/navmenu/headimg.jpg"></el-menu-item>
      <el-menu-item index="/home">主页</el-menu-item>
      <el-menu-item index="/blog">博客</el-menu-item>
      <el-menu-item index="/life">生活</el-menu-item>
    </el-menu>
  </el-header>

</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {
      activeIndex: '/home',
    };
  },
  created() {
    this.$router.replace({path: "/home"});
  }
}
</script>

<style scoped>
img {
  height: 50px;
  width: 50px;
}

</style>
