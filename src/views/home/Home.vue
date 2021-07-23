<template>
  <div id="home">
    <img class="img-full-screen" src="~assets/img/home.jpg" alt="">
    <div class="home-main d-flex">
      <div class="mr-auto">
        <i class="el-icon-user-solid"></i><span>Jiage</span>
      </div>
      <div>
        <i class="el-icon-user-solid"></i><span>Jiage</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style>
.home-main {
  /*定位*/
  position: absolute;
  top: 30%;
  left: 20%;
  width: 60%;
  height: 30%;
  /*颜色与阴影*/
  background-color: rgba(213, 213, 213, 0.3);
  box-shadow: 10px 10px 5px rgba(136, 136, 136, 0.3);
}
</style>
