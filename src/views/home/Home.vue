<template>
  <div id="home">
    <img src="~assets/img/home.jpg" alt="">
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
img {
  /*设置图片自动裁剪*/
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter:blur(3px)
}

.home-main {
  width: 60%;
  height: 30%;
  margin: 0 auto;
  background-color: antiquewhite;
  float: top;
  /*定位*/
  position: absolute;
  top: 30%;
  left: 20%;
}

</style>
