<template>
  <div id="album-view">
<!--    <el-scrollbar>-->
        <album-item class="album-item"/>
        <album-item class="album-item"/>
        <album-item class="album-item"/>
        <album-item class="album-item"/>
        <album-item class="album-item"/>
        <album-item class="album-item"/>
        <album-item class="album-item"/>
        <album-item class="album-item"/>
<!--    </el-scrollbar>-->
  </div>
</template>

<script>
import AlbumItem from "./AlbumItem";

export default {
  name: "AlbumView",
  components: {
    AlbumItem
  }
}
</script>

<style scoped>
#album-view {
  height: 100%;
  width: 80%;
  margin: 0 auto;
  /*flex布局，自动换行，子组件居中*/
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}
.album-item{
  height: 30%;
  min-width: 400px;
  margin: 10px;
}
.album-item:hover{
  box-shadow: silver;
  cursor: pointer;
}
#album-view /deep/ .el-scrollbar__view {
  overflow-x: hidden;
}
</style>
