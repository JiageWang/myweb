<template>
  <div>
    <el-card class="tag-block">
      <div class="d-flex tl-center">
        <span>标签</span>
      </div>
      <div>
        <el-tag size="mini" class="tag-item" type="success" @click="tag('SpringBoot')">SpringBoot[8]</el-tag>
        <el-tag size="mini" class="tag-item" type="info" @click="tag('HTML')">HTML[8]</el-tag>
        <el-tag size="mini" class="tag-item" type="warning" @click="tag('Mysql')">Mysql[5]</el-tag>
        <el-tag size="mini" class="tag-item"  type="danger" @click="tag('Vue')">Vue[3]</el-tag>
        <el-tag size="mini" class="tag-item"  type="info" @click="tag('jQuery')">jQuery[6]</el-tag>
        <el-tag size="mini" class="tag-item"  type="success" @click="tag('SpringCloud')">SpringCloud[9]</el-tag>
      </div>
    </el-card>
  </div>

</template>

<script>
export default {
  name: "MyTag",
  methods:{
    tag(name){
      console.log(name)
    }
  }
}
</script>

<style scoped>
.tag-block{
  margin-top: 20px;
}

.tag-item{
  margin-right: 5px;
}
</style>
