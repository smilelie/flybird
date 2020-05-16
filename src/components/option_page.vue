<template>
  <el-container>
    <el-header>
    <app-header></app-header>
    </el-header>
    <br/>
    <el-main>
      <el-row :gutter="10">
        <el-col :span="18" type="flex">
  <el-col :span="7" :offset="1">
    <el-card class="card-data card-dataheight1">
      <span class="card-title">硫酸泵</span>
      <el-row :gutter="0" class="full-row">
        <el-col :span="10" :pull="2">
          <el-row :type="flex" :align="middle">
          <el-button type="info" size="mini">启动</el-button>
          </el-row>
          <el-row type="flex" align="middle">
          <el-button type="info" size="mini">停止</el-button>
          </el-row>
        </el-col>
        <el-col :span="14">
          <el-row><label>酸性法量    </label><span>{{acid_count}}</span></el-row>
          <el-row><label>碱性法量    </label><span>{{jian_count}}</span></el-row>
          <el-row><label>系数         </label><span>{{mul_count}}</span></el-row>
          <el-row><label>清洗量 </label><span>{{clean_count}}</span></el-row>
        </el-col>
      </el-row>
    </el-card>
  </el-col>
    <el-col :span="7" :offset="0">
    <el-card class="card-data card-dataheight1">
      <span class="card-title">氢氧化钠泵</span>
      <el-row :gutter="0" class="full-row">
        <el-col :span="10" :pull="2">
          <el-row :type="flex" :align="middle">
          <el-button type="info" size="mini">启动</el-button>
          </el-row>
          <el-row type="flex" align="middle">
          <el-button type="info" size="mini">停止</el-button>
          </el-row>
        </el-col>
        <el-col :span="14">
          <el-row><label>酸性法量    </label><span>{{acid_count}}</span></el-row>
          <el-row><label>碱性法量    </label><span>{{jian_count}}</span></el-row>
          <el-row><label>系数         </label><span>{{mul_count}}</span></el-row>
          <el-row><label>清洗量 </label><span>{{clean_count}}</span></el-row>
        </el-col>
      </el-row>
    </el-card>
  </el-col>
    <el-col :span="7" :offset="0">
    <el-card class="card-data card-dataheight1">
      <span class="card-title">高锰酸钾泵</span>
      <el-row :gutter="0" class="full-row">
        <el-col :span="10" :pull="2">
          <el-row :type="flex" :align="middle">
          <el-button type="info" size="mini">启动</el-button>
          </el-row>
          <el-row type="flex" align="middle">
          <el-button type="info" size="mini">停止</el-button>
          </el-row>
        </el-col>
        <el-col :span="14">
          <el-row><label>酸性法量    </label><span>{{acid_count}}</span></el-row>
          <el-row><label>碱性法量    </label><span>{{jian_count}}</span></el-row>
          <el-row><label>系数         </label><span>{{mul_count}}</span></el-row>
          <el-row><label>清洗量 </label><span>{{clean_count}}</span></el-row>
        </el-col>
      </el-row>
    </el-card>
  </el-col>
        </el-col>

        <el-col :span="6" type="flex">
          <el-card class="card-data card-data-height2">
      <span class="card-title">高锰酸钾泵</span>
      <el-row :gutter="0" class="full-row">
        <el-col :span="10" :pull="2">
          <el-row :type="flex" :align="middle">
          <el-button type="info" size="mini">启动</el-button>
          </el-row>
          <el-row type="flex" align="middle">
          <el-button type="info" size="mini">停止</el-button>
          </el-row>
        </el-col>
        <el-col :span="14">
          <el-row><label>酸性法量    </label><span>{{acid_count}}</span></el-row>
          <el-row><label>碱性法量    </label><span>{{jian_count}}</span></el-row>
          <el-row><label>系数         </label><span>{{mul_count}}</span></el-row>
          <el-row><label>清洗量 </label><span>{{clean_count}}</span></el-row>
        </el-col>
      </el-row>
    </el-card>
        </el-col>
      </el-row>
    </el-main>
  <el-footer>
    <app-footer></app-footer>
  </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'options',
  data () {
    return {
      acid_count: 5.0,
      jian_count: 10.0,
      mul_count: 1770.1,
      clean_count: 3.0
    }
  }
}
</script>

<style scoped>

.card-data {
  width: 180px;
  text-align: center;
  border: 1px solid gray;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 12px;
}

.card-data-height1 {
  height: 180px;
}

.card-data-height2 {
  height: 280px;
}

.card-title {
  width: 80px;
  position: absolute;
  top: -10px;
  font-size: 14px;
  color: greenyellow;
  background: rgb(34, 172, 182);
  text-align: center;
  transform: translateX(-50%);
}
.full-row {
  height: 100%;
  padding: 10px;
}
</style>
