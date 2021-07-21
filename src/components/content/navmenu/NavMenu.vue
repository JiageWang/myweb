<template>

  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item></el-menu-item>
    <el-menu-item></el-menu-item>
    <el-menu-item></el-menu-item>
    <el-menu-item></el-menu-item>
    <el-menu-item></el-menu-item>
    <el-menu-item></el-menu-item>
    <el-menu-item><img src="~assets/img/navmenu/headimg.jpg" alt=""></el-menu-item>
    <el-menu-item index="1">主页</el-menu-item>
    <el-menu-item index="2">博客</el-menu-item>
    <el-menu-item index="3">生活</el-menu-item>
  </el-menu>

</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      switch (key) {
        case '1':
          this.$router.replace({path: "/home"});
          break;
        case '2':
          this.$router.replace({path: "/blog"});
          break;
        case '3':
          this.$router.replace({path: "/life"});
          break;
      }
    }
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
.no-padding{
  padding-bottom: 0px;
}
.el-menu-item{
  font-size: 20px;
  font-weight:bold;
}
</style>
