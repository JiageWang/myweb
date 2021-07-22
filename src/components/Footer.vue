<template>
  <el-footer class="no-padding">
      <el-row class="my-footer-row">
        <el-col :span="8" class="my-fonter-col">
          <div class="item">
            <i class="el-icon-caret-right"></i>
            本站已稳定运行123天4时36分22秒
          </div>
          <div class="item">
            <i class="el-icon-caret-right"></i>
            fengziy@aliyun.com
          </div>
          <div class="item">
            <i class="el-icon-caret-right"></i>
            © fengziy.cn | <a class="out-link" href="http://www.beian.miit.gov.cn">渝ICP备17015355号-1</a>
          </div>
        </el-col>
      </el-row>
  </el-footer>

</template>

<script>
export default {
  name: 'MyFooter'
}
</script>

<style scoped>

.my-fonter-col{
  text-align: left;
}
</style>
