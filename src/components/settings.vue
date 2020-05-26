<template>
  <div>
    <app-header></app-header>
    <div class="system_setting">
      <h2>标 定 系 数</h2>
      <el-row :gutter="2">
        <el-col :span="3"
          ><el-button size="small" type="info">启动</el-button></el-col
        >
        <el-col :span="3"><span>硫酸实际量:</span></el-col>
        <el-col :span="3"
          ><el-tag size="small" type="info">0.000</el-tag></el-col
        >
        <el-col :span="3"
          ><el-button size="small" type="info">确定</el-button></el-col
        >
        <el-col :span="3"
          ><el-button size="small" type="info">系数</el-button></el-col
        >
        <el-col :span="3"
          ><el-tag size="small" type="info">0.000</el-tag></el-col
        >
        <el-col :span="3"><span>硫酸设定量</span></el-col>
        <el-col :span="3"
          ><el-input size="small" type="info">5.0</el-input></el-col
        >
      </el-row>
      <el-row :gutter="2">
        <el-col :span="3"
          ><el-button size="small" type="info">启动</el-button></el-col
        >
        <el-col :span="3"><span>硫酸实际量:</span></el-col>
        <el-col :span="3"
          ><el-tag size="small" type="info">0.000</el-tag></el-col
        >
        <el-col :span="3"
          ><el-button size="small" type="info">确定</el-button></el-col
        >
        <el-col :span="3"
          ><el-button size="small" type="info">系数</el-button></el-col
        >
        <el-col :span="3"
          ><el-tag size="small" type="info">0.000</el-tag></el-col
        >
        <el-col :span="3"><span>硫酸设定量</span></el-col>
        <el-col :span="3"
          ><el-input size="small" type="info">5.0</el-input></el-col
        >
      </el-row>
      <el-row :gutter="2">
        <el-col :span="3"
          ><el-button size="small" type="info">启动</el-button></el-col
        >
        <el-col :span="3"><span>硫酸实际量:</span></el-col>
        <el-col :span="3"
          ><el-tag size="small" type="info">0.000</el-tag></el-col
        >
        <el-col :span="3"
          ><el-button size="small" type="info">确定</el-button></el-col
        >
        <el-col :span="3"
          ><el-button size="small" type="info">系数</el-button></el-col
        >
        <el-col :span="3"
          ><el-tag size="small" type="info">0.000</el-tag></el-col
        >
        <el-col :span="3"><span>硫酸设定量</span></el-col>
        <el-col :span="3"
          ><el-input size="small" type="info">5.0</el-input></el-col
        >
      </el-row>
      <el-row :gutter="2">
        <el-col :span="3"
          ><el-button size="small" type="info">启动</el-button></el-col
        >
        <el-col :span="3"><span>硫酸实际量:</span></el-col>
        <el-col :span="3"
          ><el-tag size="small" type="info">0.000</el-tag></el-col
        >
        <el-col :span="3"
          ><el-button size="small" type="info">确定</el-button></el-col
        >
        <el-col :span="3"
          ><el-button size="small" type="info">系数</el-button></el-col
        >
        <el-col :span="3"
          ><el-tag size="small" type="info">0.000</el-tag></el-col
        >
        <el-col :span="3"><span>硫酸设定量</span></el-col>
        <el-col :span="3"
          ><el-input size="small" type="info">5.0</el-input></el-col
        >
      </el-row>
      <el-row :gutter="2">
        <el-col :span="3"
          ><el-button size="small" type="info">启动</el-button></el-col
        >
        <el-col :span="3"><span>硫酸实际量:</span></el-col>
        <el-col :span="3"
          ><el-tag size="small" type="info">0.000</el-tag></el-col
        >
        <el-col :span="3"
          ><el-button size="small" type="info">确定</el-button></el-col
        >
        <el-col :span="3"
          ><el-button size="small" type="info">系数</el-button></el-col
        >
        <el-col :span="3"
          ><el-tag size="small" type="info">0.000</el-tag></el-col
        >
        <el-col :span="3"><span>硫酸设定量</span></el-col>
        <el-col :span="3"
          ><el-input size="small" type="info">5.0</el-input></el-col
        >
      </el-row>
      <el-row :gutter="2">
        <el-col :span="3"
          ><el-button size="small" type="info">启动</el-button></el-col
        >
        <el-col :span="3"><span>硫酸实际量:</span></el-col>
        <el-col :span="3"
          ><el-tag size="small" type="info">0.000</el-tag></el-col
        >
        <el-col :span="3"
          ><el-button size="small" type="info">确定</el-button></el-col
        >
        <el-col :span="3"
          ><el-button size="small" type="info">系数</el-button></el-col
        >
        <el-col :span="3"
          ><el-tag size="small" type="info">0.000</el-tag></el-col
        >
        <el-col :span="3"><span>硫酸设定量</span></el-col>
        <el-col :span="3"
          ><el-input size="small" type="info">5.0</el-input></el-col
        >
      </el-row>
      <el-button class="back-button" size="small" type="info" @click="HomePage"
        >返回</el-button
      >
    </div>
    <!-- <app-footer></app-footer> -->
  </div>
</template>

<script>
export default {
  name: 'setting',
  methods: {
    HomePage () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.system_setting {
  text-align: center;
  width: 75%;
  height: 360px;
  border: 1px solid gray;
  padding: 16px;
  border-radius: 15%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);
}
.el-row {
  margin-bottom: 12px;
}
.back-button {
  position: absolute;
  right: -10%;
  bottom: -10%;
}
</style>
