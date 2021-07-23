<template>
  <div>
    <el-card class="album-item">
      <h1 class="mr-auto">相册1</h1>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="img in imgs" :key="img">
          <img :src="img" alt="">
        </el-carousel-item>
      </el-carousel>
      <div class="d-flex">
        <i class="el-icon-time"></i>：2019-03-24
        <el-tag class="mr-auto" size="small">浙江</el-tag>
        <el-button>查看全部</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {

  name: "AlbumItem",
  data() {
    return {
      imgs: [
        'https://tse1-mm.cn.bing.net/th?id=OIP-C.UJn6UIedh0fIZk5V4f_5zgHaE8&w=141&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
        'https://tse1-mm.cn.bing.net/th?id=OIP-C.PTZJ51e7xutqxF_1nXpdawHaEK&w=168&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
        'https://tse1-mm.cn.bing.net/th?id=OIP-C.xsA-3qUw6cqmd8nRfxk6TQHaEK&w=168&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
      ]
    }

  }
}
</script>

<style scoped>
.album-item{
  /*width: 30%;*/
  height: 30%;
}
</style>
