<template>
  <div class="ShowWidget">
    <el-row>
  <el-col :span="4"><div class="showwidget_num"></div></el-col>
  <el-col :span="8"><div class="showwidget_data"></div></el-col>
  <el-col :span="2"><div class="showwidget_prev"></div></el-col>
  <el-col :span="2"><div class="showwidget_next"></div></el-col>
</el-row>
    <el-row>
  <el-col :span="4"><div class="showwidget_v1"></div></el-col>
  <el-col :span="8"><div class="showwidget_v1_data"></div></el-col>
</el-row>
    <el-row>
  <el-col :span="4"><div class="showwidget_imn"></div></el-col>
  <el-col :span="8"><div class="showwidget_imn_data"></div></el-col>
</el-row>
  </div>
</template>

<script>
export default {
  name: 'ShowWidget',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
