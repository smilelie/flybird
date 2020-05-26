<template>
  <el-container>
    <el-header>
      <app-header></app-header>
    </el-header>
    <br />
    <el-main>
      <el-row :gutter="10">
        <el-col :span="18">
          <el-row>
            <!-- 硫酸泵 -->
            <el-col :span="7" :offset="1">
              <el-card class="card-data">
                <span class="card-title">硫酸泵</span>
                <el-row :gutter="0" class="full-row">
                  <el-col :span="8" :pull="1">
                    <el-row>
                      <el-button type="info" size="mini">启动</el-button>
                    </el-row>
                    <el-row align="middle">
                      <el-button type="info" size="mini">停止</el-button>
                    </el-row>
                  </el-col>
                  <el-col :span="16">
                    <el-row :type="flex" justify="start">
                      <el-col :span="18">酸性法量</el-col>
                      <el-col :span="6">{{ ls_acid_count }}</el-col>
                    </el-row>
                    <el-row :type="flex" justify="start">
                      <el-col :span="18">碱性法量</el-col>
                      <el-col :span="6">{{ ls_jian_count }}</el-col>
                    </el-row>
                    <el-row :type="flex" justify="start">
                      <el-col :span="18">系数</el-col>
                      <el-col :span="6">{{ ls_mul_count }}</el-col>
                    </el-row>
                    <el-row :type="flex" justify="start">
                      <el-col :span="18">清洗量</el-col>
                      <el-col :span="6">{{ ls_clean_count }}</el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
            <!-- 氢氧化钠泵 -->
            <el-col :span="7" :offset="0">
              <el-card class="card-data">
                <span class="card-title">氢氧化钠泵</span>
                <el-row :gutter="0" class="full-row">
                  <el-col :span="8" :pull="1">
                    <el-row>
                      <el-button type="info" size="mini">启动</el-button>
                    </el-row>
                    <el-row align="middle">
                      <el-button type="info" size="mini">停止</el-button>
                    </el-row>
                  </el-col>
                  <el-col :span="16">
                    <el-row :type="flex" justify="start">
                      <el-col :span="18">设定量</el-col>
                      <el-col :span="6">{{ qyhn_set_count }}</el-col>
                    </el-row>
                    <el-row :type="flex" justify="start">
                      <el-col :span="18">系数</el-col>
                      <el-col :span="6">{{ qyhn_mul_count }}</el-col>
                    </el-row>
                    <el-row :type="flex" justify="start">
                      <el-col :span="18">清洗量</el-col>
                      <el-col :span="6">{{ qyhn_clean_count }}</el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
            <el-col :span="7" :offset="0">
              <el-card class="card-data">
                <span class="card-title">高锰酸钾泵</span>
                <el-row :gutter="0" class="full-row">
                  <el-col :span="10" :pull="1">
                    <el-row>
                      <el-button type="info" size="mini">滴定启动</el-button>
                    </el-row>
                    <el-row>
                      <el-button type="info" size="mini">加样启动</el-button>
                    </el-row>
                    <!-- 此处保留flex为了左对齐 -->
                    <el-row type="flex" align="middle">
                      <el-button type="info" size="mini">停止</el-button>
                    </el-row>
                  </el-col>
                  <el-col :span="14">
                    <el-row :type="flex" justify="start">
                      <el-col :span="18">加样量</el-col>
                      <el-col :span="6">{{ gmsj_add_count }}</el-col>
                    </el-row>
                    <el-row :type="flex" justify="start">
                      <el-col :span="18">系数</el-col>
                      <el-col :span="6">{{ gmsj_mul_count }}</el-col>
                    </el-row>
                    <el-row :type="flex" justify="start">
                      <el-col :span="18">慢滴量</el-col>
                      <el-col :span="6">{{ gmsj_slow_drop_count }}</el-col>
                    </el-row>
                    <el-row :type="flex" justify="start">
                      <el-col :span="18">快滴量</el-col>
                      <el-col :span="6">{{ gmsj_quick_drop_count }}</el-col>
                    </el-row>
                    <el-row :type="flex" justify="start">
                      <el-col :span="18">输出量</el-col>
                      <el-col :span="6">{{ gmsj_output_count }}</el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
          </el-row>

          <!-- 行间距 -->
          <br />

          <el-row>
            <!-- 草酸钠泵 -->
            <el-col :span="7" :offset="1">
              <el-card class="card-data">
                <span class="card-title">草酸钠泵</span>
                <el-row :gutter="0" class="full-row">
                  <el-col :span="10" :pull="2">
                    <el-row>
                      <el-button type="info" size="mini">启动</el-button>
                    </el-row>
                    <el-row align="middle">
                      <el-button type="info" size="mini">停止</el-button>
                    </el-row>
                  </el-col>
                  <el-col :span="14">
                    <el-row :type="flex" justify="start">
                      <el-col :span="18">设定量</el-col>
                      <el-col :span="6">{{ csn_set_count }}</el-col>
                    </el-row>
                    <el-row :type="flex" justify="start">
                      <el-col :span="18">系数</el-col>
                      <el-col :span="6">{{ csn_mul_count }}</el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
            <!-- 纯水泵 -->
            <el-col :span="7" :offset="0">
              <el-card class="card-data">
                <span class="card-title">纯水泵</span>
                <el-row :type="flex" justify="start">
                  <el-col :span="12">系数</el-col>
                  <el-col :span="12">{{ cs_mul_count }}</el-col>
                </el-row>
                <el-row :type="flex" justify="start">
                  <el-col :span="12">速度</el-col>
                  <el-col :span="12">{{ cs_speed }}</el-col>
                </el-row>
                <el-row :type="flex" justify="start">
                  <el-col :span="12">清洗量</el-col>
                  <el-col :span="12">{{ cs_clean_count }}</el-col>
                </el-row>
              </el-card>
            </el-col>
            <!-- 进样参数设置 -->
            <el-col :span="7" :offset="0">
              <el-card class="card-data">
                <span class="card-title">进样参数设置</span>

                <el-row :type="flex" justify="start">
                  <el-col :span="12">取样系数</el-col>
                  <el-col :span="12">{{ jycs_select_mul_count }}</el-col>
                </el-row>
                <el-row :type="flex" justify="start">
                  <el-col :span="12">取样时间系数</el-col>
                  <el-col :span="12">{{ jycs_select_time_mul_count }}</el-col>
                </el-row>
                <el-row :type="flex" justify="start">
                  <el-col :span="12">清洗量</el-col>
                  <el-col :span="12">{{ jycs_clean_count }}</el-col>
                </el-row>
                <el-row :type="flex" justify="start">
                  <el-col :span="12">外部清洗量</el-col>
                  <el-col :span="12">{{ jycs_out_clean_count }}</el-col>
                </el-row>
              </el-card>
            </el-col>
          </el-row>
        </el-col>

        <!-- 参数设置 -->
        <el-col :span="6">
          <el-card class="card-data card-data-height2">
            <span class="card-title">参数设置</span>

            <el-row :type="flex" justify="start">
              <el-col :span="16">加热等待时间</el-col>
              <el-col :span="8">{{ cssz_heat_wait_time }}</el-col>
            </el-row>
            <el-row :type="flex" justify="start">
              <el-col :span="16">滴定等待时间</el-col>
              <el-col :span="8">{{ cssz_drop_wait_time }}</el-col>
            </el-row>
            <el-row :type="flex" justify="start">
              <el-col :span="16">快滴后等待时间</el-col>
              <el-col :span="8">{{ cssz_quick_drop_wait_time }}</el-col>
            </el-row>
            <el-row :type="flex" justify="start">
              <el-col :span="16">滴定速度</el-col>
              <el-col :span="8">{{ cssz_drop_speed }}</el-col>
            </el-row>
            <el-row :type="flex" justify="start">
              <el-col :span="16">滴定终点速度</el-col>
              <el-col :span="8">{{ cssz_drop_end_speed }}</el-col>
            </el-row>
            <el-row :type="flex" justify="start">
              <el-col :span="16">颜色判定时间</el-col>
              <el-col :span="8">{{ cssz_color_judge_time }}</el-col>
            </el-row>
            <el-row :type="flex" justify="start">
              <el-col :span="16">清洗次数</el-col>
              <el-col :span="8">{{ cssz_clean_times }}</el-col>
            </el-row>
            <el-row :type="flex" justify="start">
              <el-col :span="16">水浴温度补偿</el-col>
              <el-col :span="8">{{ cssz_bath_temperature_compensate }}</el-col>
            </el-row>
          </el-card>
          <!-- 开始 结束 实时 -->
          <br />
          <el-row>
            <span class="label-text">开始</span>
            <el-tag type="info" hit="true"> {{ start_time }}</el-tag>
          </el-row>
          <el-row>
            <span class="label-text">结束</span>
            <el-tag type="info" hit="true"> {{ end_time }}</el-tag>
          </el-row>
          <el-row>
            <span class="label-text">实时</span>
            <el-tag type="info" hit="true"> {{ now_time }}</el-tag>
          </el-row>
        </el-col>
      </el-row>
      <br />
      <el-row type="flex" justify="end" class="menu_buttons">
        <el-button type="info" size="small">参数设置</el-button>
        <el-button type="info" size="small">标定设置</el-button>
        <el-button type="info" size="small">轴设置</el-button>
        <el-button type="info" size="small"> 轴调试</el-button>
        <el-button type="info" size="small" @click="HomePage"
          >操作界面</el-button
        >
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
      ls_acid_count: 5.1,
      ls_jian_count: 1.2,
      ls_mul_count: 17.1,
      ls_clean_count: 3.03,

      qyhn_set_count: 1.03,
      qyhn_mul_count: 11.23,
      qyhn_clean_count: 5.17,

      gmsj_add_count: 1.1,
      gmsj_mul_count: 2.13,
      gmsj_slow_drop_count: 14.15,
      gmsj_quick_drop_count: 2.3,
      gmsj_output_count: 1.54,

      csn_set_count: 2.2,
      csn_mul_count: 2.23,

      cs_mul_count: 1.1,
      cs_speed: 2.2,
      cs_clean_count: 33.34,

      jycs_select_mul_count: 3,
      jycs_select_time_mul_count: 1,
      jycs_clean_count: 22,
      jycs_out_clean_count: 33,

      cssz_heat_wait_time: 1,
      cssz_drop_wait_time: 1,
      cssz_quick_drop_wait_time: 1,
      cssz_drop_speed: 1,
      cssz_drop_end_speed: 1,
      cssz_color_judge_time: 1,
      cssz_clean_times: 1,
      cssz_bath_temperature_compensate: 1,

      start_time: '2020.5.10 11:51:23',
      end_time: '2020.5.13 07:48:19',
      now_time: '2020.5.11 16:43:23'
    }
  },
  methods: {
    HomePage () {
      this.$router.back()
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
  /* padding: 4px; */
  height: 180px;
}

.card-data-height1 {
  height: 180px;
}

.card-data-height2 {
  height: 280px;
}

.el-card /deep/ .el-card__body {
  padding: 8px;
}
/* .el-card__body {
  padding-top: 10px;
  padding-right: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
} */

.card-title {
  width: 80px;
  position: absolute;
  top: -8px;
  font-size: 10px;
  color: #0031ff;
  background: #00ffff;
  text-align: center;
  transform: translateX(-50%);
}
.full-row {
  height: 100%;
  padding: 10px;
}
.el-button--mini {
  padding: 4px 8px;
  font-size: 12px;
}
.label-text {
  width: 30px;
  font-size: 12px;
}
</style>
