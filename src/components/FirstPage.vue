<template>
<div>
  <el-container>
    <el-header>
      <el-row :gutter="6">
        <el-col :span="4">
          <!-- <img src="../assets/happy.svg" class="logo_small"> -->
        </el-col>
        <el-col :offset="12" :span="12" class="title">高锰酸钾分析仪
        </el-col>
      </el-row>
    </el-header>
        <el-aside width="200px">
      侧边栏
    </el-aside>
    <el-main>
       <div name="menus">
    <el-row>
      <el-button type="primary" plain>开始任务</el-button>
      <el-button type="primary" plain>新建任务</el-button>
      <el-button type="primary" plain>取消任务</el-button>
      <el-button type="primary" plain>管路清洗</el-button>
      <el-button type="primary" plain>查看结果</el-button>
      <el-button type="primary" plain>数据导出</el-button>
      <el-button type="primary" plain>标准文献</el-button>
      <el-button type="primary" plain>报警复位</el-button>
      <el-button type="primary" plain>水浴设置</el-button>
      <el-button type="primary" plain>标定系数</el-button>
      <el-button type="primary" plain>关闭系统</el-button>
    </el-row>
  </div>
  <br>
<div class="widgets">
    <el-row :gutter="2">
       <el-col :span="60" :offset="1" >
         <div class="ShowWidget">
           <el-row>
             <div class="showwidget_num">1</div>
             <div class="showwidget_data">sss</div>
           </el-row>

           <el-row>显示矩形</el-row>
           <el-row>显示矩形</el-row>
           </div>
         </el-col>

    </el-row>
  </div>
    </el-main>

    <el-footer>
    </el-footer>
  </el-container>
</div>
</template>

<script>
export default {
  name: 'FirstPage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
    .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
    .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
.logo_small {
 height: 60%;
}
.title {
  float: bottom;
  color: #FF0000;
}
.widgets{

  right: 20px;
}
.ShowWidget {
  border-style: solid;
  border-color: #3a9b27;
  border-width: 1px;
  border-radius: 6px;
    margin-left:20;
}
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
