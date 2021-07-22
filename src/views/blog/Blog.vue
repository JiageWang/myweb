<template>

    <el-row class="my-blog-view" type="flex" gutter="20" justify="center">
      <el-col :span="12">
        <my-blog :blog="blog"></my-blog>
      </el-col>
      <el-col :span="4">
        <my-tag></my-tag>
      </el-col>
    </el-row>



</template>

<script>
import MyTag from "components/content/MyTag";
import MyBlog from "components/content/MyBlog";

export default {
  name: "Blog",
  data() {
    return {
      blog: {
        title: 'test',
        date: new Date(),
        img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
      }
    }
  },
  components: {
    MyTag,
    MyBlog
  },
}
</script>

<style scoped>
.el-main {
  height: 100%;
}

.el-row {
  height: 100%
}

.outer {
  background-color: #DCDFE6;
  height: 100%;
  width: 100%;
}
.my-blog-view{
  background-color: #eaeaea;
}
</style>
