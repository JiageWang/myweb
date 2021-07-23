<template>
  <div id="album-list">
      <album-item class="album-item"/>
      <album-item class="album-item"/>
      <album-item class="album-item"/>
      <album-item class="album-item"/>
    <album-item class="album-item"/>
    <album-item class="album-item"/>
    <album-item class="album-item"/>
    <album-item class="album-item"/>
  </div>
</template>

<script>
import AlbumItem from "components/AlbumItem";

export default {
  name: "AlbumList",
  components: {
    AlbumItem
  }
}
</script>

<style scoped>
#album-list{
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.album-item{
  width: 30%;
  margin: 10px ;
}
</style>
