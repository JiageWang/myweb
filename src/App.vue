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
  top: 0;
  width: 100%;
  position: fixed;
  z-index: 1;
}
.main{
  padding-top: 60px;
  /*设置整个屏幕显示背景*/
  top:0;
  right:0;
  left:0;
  position:absolute;

}
</style>
