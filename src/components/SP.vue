<template>
<el-container>
  <el-header>高锰酸钾指数分析仪</el-header>
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
  <el-container>
    <el-main>
        <div class="widgets">
            <el-row :gutter="8">
            <div v-for="item in listData" :key="item.id">
                <el-col :span="4">
                <el-card class="box-card" :body-style="{padding: '4px'}">
                        <el-row :gutter="1">
                        <el-col :span="4"><div class="item_num">{{item.id}}</div></el-col>
                        <el-col :span="16"><el-tag type="info" class="item_dataclass">{{item.data}}</el-tag></el-col>
                        <el-col :span="4"><el-button type="info" class="item_dataclass">》》</el-button></el-col>
                        </el-row>
                        <br/>
                        <el-row :gutter="1">
                        <el-col :span="12"><div class="item_dataclass">V1:</div></el-col>
                        <el-col :span="12"><div class="item_dataclass">{{item.data}}</div></el-col>
                        </el-row>
                        <br/>
                        <el-row :gutter="1">
                        <el-col :span="12"><div class="item_dataclass">Imn:</div></el-col>
                        <el-col :span="12"><div class="item_dataclass">{{item.data}}</div></el-col>
                        </el-row>
                </el-card>
                </el-col>
            </div>
            </el-row>
        </div>
    </el-main>
    <el-aside width="30%">Aside</el-aside>
  </el-container>
  <el-footer>盛泰科技</el-footer>
</el-container>
</template>

<script>
export default {
  name: 'SecondPage',
  data: function () {
    return {
      listData: [
        { id: 1, data: '0.0' },
        { id: 2, data: '0.0' },
        { id: 3, data: '0.0' },
        { id: 4, data: '0.0' },
        { id: 5, data: '0.0' },
        { id: 6, data: '0.0' },
        { id: 7, data: '0.0' },
        { id: 8, data: '0.0' },
        { id: 9, data: '0.0' },
        { id: 10, data: '0.0' },
        { id: 11, data: '0.0' },
        { id: 12, data: '0.0' },
        { id: 13, data: '0.0' },
        { id: 14, data: '0.0' },
        { id: 15, data: '0.0' },
        { id: 16, data: '0.0' },
        { id: 17, data: '0.0' },
        { id: 18, data: '0.0' },
        { id: 19, data: '0.0' },
        { id: 20, data: '0.0' },
        { id: 21, data: '0.0' },
        { id: 22, data: '0.0' },
        { id: 23, data: '0.0' },
        { id: 24, data: '0.0' }
      ]
    }
  }
}
</script>

<style>
html, body, #app
{
    height: 100%;
    margin: 1px;
}
.el-container {
    margin-bottom: 1px;
    height: 100%;
  }
  .el-header, .el-footer {
    background-color: rgb(133, 144, 206);
    color: #FFFFFF;
    text-align: center;
    font-size: 24px;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: top;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    padding: 10px;
  }
.box-card {
    font-size: 8px;
    text-align: center;
}
/* 数据显示格式 */
.item_num {
    width: 12px;
    height: 12px;
    border: 1px solid #000000;
    border-radius: 50%;
    text-align: center;
}
.item_dataclass {
    height: 18px;
    width: 100%;
    font-size: 8px;
    text-align: center;
    color:black;
}
.item_dataclass.el-tag {
    line-height: 18px;
}
.item_dataclass.el-button {
    height: 18px;
    font-size: 8px;
    padding: 0 2px;
}
</style>
