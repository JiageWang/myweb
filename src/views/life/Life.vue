<template>
  <div id="life">
      <album-view/>
    <new-item :img="require('assets/img/new-album.svg')"/>
  </div>
</template>

<script>
// import ChinaMap from "components/common/map/ChinaMap";
import AlbumView from "./album/AlbumView";
import NewItem from "components/NewItem";





export default {
  name: "Life",
  components:{
    AlbumView,
    NewItem
  }
}
</script>

<style scoped>

</style>
