<template>

    <el-container class="outer" id="app">
      <el-main>
        <el-row type="flex" justify="center" align="middle">
          <div style="background-color: blue;width: 100px;height: 100px;color: #fff;">A</div>
          <div style="background-color: red;width: 100px;height: 100px;color: #fff">B</div>
        </el-row>
      </el-main>
    </el-container>

</template>

<script>
export default {
  name: "Blog"
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
</style>
