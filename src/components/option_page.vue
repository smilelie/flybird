<template>
  <el-container>
    <el-header>
    <app-header></app-header>
    </el-header>
    <br/>
    <el-main>
      <el-row :gutter="10">
        <el-col :span="18">
          <el-row>
            <!-- 硫酸泵 -->
  <el-col :span="7" :offset="1">
    <el-card class="card-data card-dataheight1">
      <span class="card-title">硫酸泵</span>
      <el-row :gutter="0" class="full-row">
        <el-col :span="10" :pull="2">
          <el-row :align="middle">
          <el-button type="info" size="mini">启动</el-button>
          </el-row>
          <el-row align="middle">
          <el-button type="info" size="mini">停止</el-button>
          </el-row>
        </el-col>
        <el-col :span="14">
          <el-row><label>酸性法量    </label><span>{{ls_acid_count}}</span></el-row>
          <el-row><label>碱性法量    </label><span>{{ls_jian_count}}</span></el-row>
          <el-row><label>系数         </label><span>{{ls_mul_count}}</span></el-row>
          <el-row><label>清洗量 </label><span>{{ls_clean_count}}</span></el-row>
        </el-col>
      </el-row>
    </el-card>
  </el-col>
  <!-- 氢氧化钠泵 -->
  <el-col :span="7" :offset="0">
    <el-card class="card-data card-dataheight1">
      <span class="card-title">氢氧化钠泵</span>
      <el-row :gutter="0" class="full-row">
        <el-col :span="10" :pull="2">
          <el-row :align="center">
          <el-button type="info" size="mini">启动</el-button>
          </el-row>
          <el-row align="middle">
          <el-button type="info" size="mini">停止</el-button>
          </el-row>
        </el-col>
        <el-col :span="14">
          <el-row><label>设定量    </label><span>{{qyhn_set_count}}</span></el-row>
          <el-row><label>系数         </label><span>{{qyhn_mul_count}}</span></el-row>
          <el-row><label>清洗量 </label><span>{{qyhn_clean_count}}</span></el-row>
        </el-col>
      </el-row>
    </el-card>
  </el-col>
    <el-col :span="7" :offset="0">
    <el-card class="card-data card-dataheight1">
      <span class="card-title">高锰酸钾泵</span>
      <el-row :gutter="0" class="full-row">
        <el-col :span="10" :pull="2">
          <el-row :align="middle">
            <el-button type="info" size="mini">滴定启动</el-button>
          </el-row>
          <el-row :align="middle">
            <el-button type="info" size="mini">加样启动</el-button>
          </el-row>
          <!-- 此处保留flex为了左对齐 -->
          <el-row type="flex" align="middle">
          <el-button type="info" size="mini">停止</el-button>
          </el-row>
        </el-col>
        <el-col :span="14">
          <el-row><label>加样量    </label><span>{{gmsj_add_count}}</span></el-row>
          <el-row><label>系数         </label><span>{{gmsj_mul_count}}</span></el-row>
          <el-row><label>慢滴量 </label><span>{{gmsj_slow_drop_count}}</span></el-row>
          <el-row><label>快滴量 </label><span>{{gmsj_quick_drop_count}}</span></el-row>
          <el-row><label>输出量 </label><span>{{gmsj_output_count}}</span></el-row>
        </el-col>
      </el-row>
    </el-card>
  </el-col>
          </el-row>

<!-- 行间距 -->
          <br/>

  <el-row>
    <!-- 草酸钠泵 -->
  <el-col :span="7" :offset="1">
    <el-card class="card-data card-dataheight1">
      <span class="card-title">草酸钠泵</span>
      <el-row :gutter="0" class="full-row">
        <el-col :span="10" :pull="2">
          <el-row :align="middle">
          <el-button type="info" size="mini">启动</el-button>
          </el-row>
          <el-row align="middle">
          <el-button type="info" size="mini">停止</el-button>
          </el-row>
        </el-col>
        <el-col :span="14">
          <el-row><label>设定量    </label><span>{{csn_set_count}}</span></el-row>
          <el-row><label>系数         </label><span>{{csn_mul_count}}</span></el-row>
        </el-col>
      </el-row>
    </el-card>
  </el-col>
  <!-- 纯水泵 -->
    <el-col :span="7" :offset="0">
    <el-card class="card-data card-dataheight1">
      <span class="card-title">纯水泵</span>
          <el-row><label>系数         </label><span>{{cs_mul_count}}</span></el-row>
          <el-row><label>速度         </label><span>{{cs_speed}}</span></el-row>
          <el-row><label>清洗量 </label><span>{{cs_clean_count}}</span></el-row>
    </el-card>
  </el-col>
<!-- 进样参数设置 -->
    <el-col :span="7" :offset="0">
    <el-card class="card-data card-dataheight1">
      <span class="card-title">进样参数设置</span>
          <el-row><label>取样系数             </label><span>{{jycs_select_mul_count}}</span></el-row>
          <el-row><label>取样时间系数    </label><span>{{jycs_select_time_mul_count}}</span></el-row>
          <el-row><label>清洗量                 </label><span>{{jycs_clean_count}}</span></el-row>
          <el-row><label>外部清洗量         </label><span>{{jycs_out_clean_count}}</span></el-row>
    </el-card>
  </el-col>
          </el-row>
        </el-col>

<!-- 参数设置 -->
      <el-col :span="6">
      <el-card class="card-data card-data-height2">
      <span class="card-title">参数设置</span>
          <el-row><label>加热等待时间    </label><span>{{cssz_heat_wait_time}}</span></el-row>
          <el-row><label>滴定等待时间    </label><span>{{cssz_drop_wait_time}}</span></el-row>
          <el-row><label>快滴后等待时间</label><span>{{cssz_quick_drop_wait_time}}</span></el-row>
          <el-row><label>滴定速度             </label><span>{{cssz_drop_speed}}</span></el-row>
          <el-row><label>滴定终点速度    </label><span>{{cssz_drop_end_speed}}</span></el-row>
          <el-row><label>颜色判定时间    </label><span>{{cssz_color_judge_time}}</span></el-row>
          <el-row><label>清洗次数             </label><span>{{cssz_clean_times}}</span></el-row>
          <el-row><label>水浴温度补偿     </label><span>{{cssz_bath_temperature_compensate}}</span></el-row>

    </el-card>
    <!-- 开始 结束 实时 -->
    <br/>
          <el-row :align="center">
            <span class="label-text">开始</span><el-tag type="info"> 2:36</el-tag>
          </el-row>
          <el-row :align="center">
            <span class="label-text">结束</span><el-tag type="info"> 22:36</el-tag>
          </el-row>
          <el-row :align="center">
            <span class="label-text">实时</span><el-tag type="info"> 21:36</el-tag>
          </el-row>
        </el-col>
      </el-row>
      <br/>
      <el-row type="flex" justify="end" class="menu_buttons">
        <el-button type="info" size="mini">参数设置</el-button>
        <el-button type="info" size="mini">标定设置</el-button>
        <el-button type="info" size="mini">轴设置</el-button>
        <el-button type="info" size="mini"> 轴调试</el-button>
        <el-button type="info" size="mini">操作界面</el-button>
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
      ls_acid_count: 5.0,
      ls_jian_count: 10.0,
      ls_mul_count: 1770.1,
      ls_clean_count: 3.0
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
  font-size: 12px;
  color: greenyellow;
  background: rgb(34, 172, 182);
  text-align: center;
  transform: translateX(-50%);
}
.full-row {
  height: 100%;
  padding: 10px;
}
.el-button--mini {
  padding: 8px;
  font-size: 12px;
}
.label-text {
  width: 30px;
  font-size: 12px;
}
</style>
