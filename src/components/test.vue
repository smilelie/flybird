<template>
  <div>
    <!-- 绘制矩形 -->
    <app-header></app-header>
    <h1>Content</h1>
    <div class="check-groups">
      <el-row :gutter="0">
        <el-checkbox v-model="autoClean">自动管路清洗</el-checkbox>
        <label>清洗次数: {{ countClean }}</label>
        <el-checkbox v-model="isAddSulphuricAcid">全不加硫酸 </el-checkbox>
        <el-checkbox v-model="isBasicProcess">碱性法</el-checkbox>
        <el-checkbox v-model="isSelectAutoCome">选择自动进样</el-checkbox>
        <label><font color="green" v-if="isConnected">已连接</font><font color="red" v-else> 未连接</font></label>
      </el-row>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  name: 'test'
}
</script>
<style scoped>
.rect_arc {
  width: 200px;
  height: 100px;
  border: 1px solid #00ff;
  border-radius: 20% 20% 20% 20%/20% 20% 20% 20%;
}
</style>
