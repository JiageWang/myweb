<template>
  <el-footer class="my-footer">
    <div class="my-footer-main">
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
    </div>

  </el-footer>

</template>

<script>
export default {
  name: 'MyFooter'
}
</script>

<style scoped>
.f-footer{
  padding: 20px;
  text-align: center;
  color: #fff;
  background-color: #555;
}
.my-footer-main{
  width: 70%;
  margin: 0 auto;
  color: #ccc;
}
.my-fonter-col{
  text-align: left;
}
</style>
