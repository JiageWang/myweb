<template>
  <div>
    <el-scrollbar>
      <album-list/>
    </el-scrollbar>
  </div>
</template>

<script>
import ChinaMap from "components/common/map/ChinaMap";
import AlbumItem from "components/AlbumItem";
import AlbumList from "./AlbumList";
export default {
  name: "Life",
  components:{
    ChinaMap,
    AlbumItem,
    AlbumList
  }
}
</script>

<style scoped>

</style>
