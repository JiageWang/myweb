<template>
    <nav-menu class="menu"/>
    <router-view class="main"/>
</template>

<script>

  import NavMenu from "components/NavMenu";

  export default {
    name: "App",
    components: {
      NavMenu,
    }
  }
</script>


<style>
.menu{
  /*导航栏始终固定在最上面*/
  top: 0;
  width: 100%;
  position: fixed;
  z-index: 1;
}
.main{
  /*设置整个屏幕显示背景*/
  top:60px;
  right:0;
  left:0;
  position:fixed;
  height: calc(100% - 60px);
}
</style>
