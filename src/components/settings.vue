<template>
<div>
    <Header></Header>
    <div class="system_setting">
        <h2>标 定 系 数</h2>
        <el-row :gutter="2">
            <el-col :span="3"><el-button size="small" type="info">启动</el-button></el-col>
            <el-col :span="3"><span>硫酸实际量:</span></el-col>
            <el-col :span="3"><el-tag size="small" type="info">0.000</el-tag></el-col>
            <el-col :span="3"><el-button size="small" type="info">确定</el-button></el-col>
            <el-col :span="3"><el-button size="small" type="info">系数</el-button></el-col>
            <el-col :span="3"><el-tag size="small" type="info">0.000</el-tag></el-col>
            <el-col :span="3"><span>硫酸设定量</span></el-col>
            <el-col :span="3"><el-input size="small" type="info">5.0</el-input></el-col>
        </el-row>
        <el-row :gutter="2">
            <el-col :span="3"><el-button size="small" type="info">启动</el-button></el-col>
            <el-col :span="3"><span>硫酸实际量:</span></el-col>
            <el-col :span="3"><el-tag size="small" type="info">0.000</el-tag></el-col>
            <el-col :span="3"><el-button size="small" type="info">确定</el-button></el-col>
            <el-col :span="3"><el-button size="small" type="info">系数</el-button></el-col>
            <el-col :span="3"><el-tag size="small" type="info">0.000</el-tag></el-col>
            <el-col :span="3"><span>硫酸设定量</span></el-col>
            <el-col :span="3"><el-input size="small" type="info">5.0</el-input></el-col>
        </el-row>
        <el-row :gutter="2">
            <el-col :span="3"><el-button size="small" type="info">启动</el-button></el-col>
            <el-col :span="3"><span>硫酸实际量:</span></el-col>
            <el-col :span="3"><el-tag size="small" type="info">0.000</el-tag></el-col>
            <el-col :span="3"><el-button size="small" type="info">确定</el-button></el-col>
            <el-col :span="3"><el-button size="small" type="info">系数</el-button></el-col>
            <el-col :span="3"><el-tag size="small" type="info">0.000</el-tag></el-col>
            <el-col :span="3"><span>硫酸设定量</span></el-col>
            <el-col :span="3"><el-input size="small" type="info">5.0</el-input></el-col>
        </el-row>
        <el-row :gutter="2">
            <el-col :span="3"><el-button size="small" type="info">启动</el-button></el-col>
            <el-col :span="3"><span>硫酸实际量:</span></el-col>
            <el-col :span="3"><el-tag size="small" type="info">0.000</el-tag></el-col>
            <el-col :span="3"><el-button size="small" type="info">确定</el-button></el-col>
            <el-col :span="3"><el-button size="small" type="info">系数</el-button></el-col>
            <el-col :span="3"><el-tag size="small" type="info">0.000</el-tag></el-col>
            <el-col :span="3"><span>硫酸设定量</span></el-col>
            <el-col :span="3"><el-input size="small" type="info">5.0</el-input></el-col>
        </el-row>
        <el-row :gutter="2">
            <el-col :span="3"><el-button size="small" type="info">启动</el-button></el-col>
            <el-col :span="3"><span>硫酸实际量:</span></el-col>
            <el-col :span="3"><el-tag size="small" type="info">0.000</el-tag></el-col>
            <el-col :span="3"><el-button size="small" type="info">确定</el-button></el-col>
            <el-col :span="3"><el-button size="small" type="info">系数</el-button></el-col>
            <el-col :span="3"><el-tag size="small" type="info">0.000</el-tag></el-col>
            <el-col :span="3"><span>硫酸设定量</span></el-col>
            <el-col :span="3"><el-input size="small" type="info">5.0</el-input></el-col>
        </el-row>
        <el-row :gutter="2">
            <el-col :span="3"><el-button size="small" type="info">启动</el-button></el-col>
            <el-col :span="3"><span>硫酸实际量:</span></el-col>
            <el-col :span="3"><el-tag size="small" type="info">0.000</el-tag></el-col>
            <el-col :span="3"><el-button size="small" type="info">确定</el-button></el-col>
            <el-col :span="3"><el-button size="small" type="info">系数</el-button></el-col>
            <el-col :span="3"><el-tag size="small" type="info">0.000</el-tag></el-col>
            <el-col :span="3"><span>硫酸设定量</span></el-col>
            <el-col :span="3"><el-input size="small" type="info">5.0</el-input></el-col>
        </el-row>
    </div>
    <Footer></Footer>
</div>
</template>

<script>
// import Head from '../Head'
// import Foot from '../Foot'
export default {
//   components: {
//     Header: Head,
//     Footer: Foot
//   },
  name: 'setting'
}
</script>

<style scoped>
.system_setting {
  text-align: center;
  width: 80%;
  height: 400px;
  border: 1px solid #00ff;
  padding: 20px;
  border-radius: 25% 25% 25% 25%/20% 20% 20% 20%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.el-row {
    margin-bottom: 12px;

  }

</style>
