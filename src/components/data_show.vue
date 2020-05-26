<template>
  <el-container>
    <el-header><app-header></app-header></el-header>
    <el-main>
      <el-row :gutter="1" :type="flex">
        <el-col :span="4">
          <el-card class="card-data">
            <span class="card-data-title">圆盘1号位置</span>
            <el-row>
              <el-col :span="12">
                <label>X轴</label>
              </el-col>
              <el-col :span="12">
                <v-text>{{ disk_xaxis }}</v-text>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <label>Y轴</label>
              </el-col>
              <el-col :span="12">
                <v-text>{{ disk_yaxis }}</v-text>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <label>Z轴</label>
              </el-col>
              <el-col :span="12">
                <v-text>{{ disk_zaxis }}</v-text>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <label>圆盘A</label>
              </el-col>
              <el-col :span="12">
                <v-text>{{ disk_A }}</v-text>
              </el-col>
            </el-row>

            <el-row :gutter="12">
              <el-col :span="12">
                <el-button type="info" size="mini">启动</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">Z启动</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>

        <!-- 加样位置 -->
        <el-col :span="4">
          <el-card class="card-data">
            <span class="card-data-title">加样位置</span>
            <el-row>
              <el-col :span="12">
                <label>X轴</label>
              </el-col>
              <el-col :span="12">
                <v-text>{{ add_sample_xaxis }}</v-text>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <label>Y轴</label>
              </el-col>
              <el-col :span="12">
                <v-text>{{ add_sample_yaxis }}</v-text>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <label>Z轴</label>
              </el-col>
              <el-col :span="12">
                <v-text>{{ add_sample_zaxis }}</v-text>
              </el-col>
            </el-row>
            <!-- 空白间距 -->
            <div class="distance_one_line" />
            <el-row :gutter="12" class="bottom-margin10">
              <el-col :span="12">
                <el-button type="info" size="mini">启动</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">Z启动</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <!-- 滴定位置 -->
        <el-col :span="4">
          <el-card class="card-data">
            <span class="card-data-title">滴定位置</span>
            <el-row>
              <el-col :span="12">
                <label>X轴</label>
              </el-col>
              <el-col :span="12">
                <v-text>{{ drop_xaxis }}</v-text>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <label>Y轴</label>
              </el-col>
              <el-col :span="12">
                <v-text>{{ drop_yaxis }}</v-text>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <label>Z轴</label>
              </el-col>
              <el-col :span="12">
                <v-text>{{ drop_zaxis }}</v-text>
              </el-col>
            </el-row>
            <!-- 空白间距 -->
            <div class="distance_one_line" />
            <el-row :gutter="12">
              <el-col :span="12">
                <el-button type="info" size="mini">启动</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">Z启动</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <!-- 加热1号位置 -->
        <el-col :span="4">
          <el-card class="card-data">
            <span class="card-data-title">加热1号位置</span>
            <el-row>
              <el-col :span="12">
                <label>X轴</label>
              </el-col>
              <el-col :span="12">
                <v-text>{{ hot_xaxis }}</v-text>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <label>Y轴</label>
              </el-col>
              <el-col :span="12">
                <v-text>{{ hot_yaxis }}</v-text>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <label>Z轴</label>
              </el-col>
              <el-col :span="12">
                <v-text>{{ hot_zaxis }}</v-text>
              </el-col>
            </el-row>
            <!-- 空白间距 -->
            <div class="distance_one_line" />
            <el-row :gutter="12">
              <el-col :span="12">
                <el-button type="info" size="mini">启动</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">Z启动</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <!-- 停留位置 -->
        <el-col :span="4">
          <el-card class="card-data">
            <span class="card-data-title">停留位置</span>
            <el-row>
              <el-col :span="12">
                <label>X轴</label>
              </el-col>
              <el-col :span="12">
                <v-text>{{ stay_xaxis }}</v-text>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <label>Y轴</label>
              </el-col>
              <el-col :span="12">
                <v-text>{{ stay_yaxis }}</v-text>
              </el-col>
            </el-row>
            <!-- 空白间距 -->
            <div class="distance_two_line" />
            <el-row :gutter="12">
              <el-col :span="12">
                <el-button type="info" size="mini">启动</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">Z启动</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <!-- Z轴 -->
        <el-col :span="4">
          <el-card class="card-data">
            <span class="card-data-title">Z轴</span>
            <el-row>
              <el-col :span="12">
                <label>速度</label>
              </el-col>
              <el-col :span="12">
                <v-text>{{ zaxis_speed }}</v-text>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <label>抓取位置</label>
              </el-col>
              <el-col :span="12">
                <v-text>{{ zaxis_position }}</v-text>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="1">
        <!-- 滴定轴 -->
        <el-col :span="4">
          <el-card class="card-data">
            <span class="card-data-title">滴定轴</span>
            <el-row>
              <el-col :span="12">
                <label>速度</label>
              </el-col>
              <el-col :span="12">
                <v-text>{{ drop_axis_speed }}</v-text>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">左</el-button>
              </el-col>
              <el-col :span="12">
                <v-text>{{ drop_axis_left }}</v-text>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">右</el-button>
              </el-col>
              <el-col :span="12">
                <v-text>{{ drop_axis_right }}</v-text>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">中</el-button>
              </el-col>
              <el-col :span="12">
                <!-- <v-text>{{ drop_axis_middle }}</v-text> -->
              </el-col>
            </el-row>
          </el-card>
        </el-col>

        <!-- 加样轴 -->
        <el-col :span="4">
          <el-card class="card-data">
            <span class="card-data-title">加样轴</span>
            <el-row>
              <el-col :span="12">
                <label>速度</label>
              </el-col>
              <el-col :span="12">
                <v-text>{{ add_sample_axis_speed }}</v-text>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">1号位</el-button>
              </el-col>
              <el-col :span="12">
                <v-text>{{ add_sample_axis_one }}</v-text>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">2号位</el-button>
              </el-col>
              <el-col :span="12">
                <v-text>{{ add_sample_axis_two }}</v-text>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">3号位</el-button>
              </el-col>
              <el-col :span="12">
                <v-text>{{ add_sample_axis_three }}</v-text>
              </el-col>
            </el-row>
            <el-row>
              <el-button type="info" size="mini">回零</el-button>
            </el-row>
          </el-card>
        </el-col>

        <!-- 模拟流程 -->
        <el-col :span="4">
          <el-card class="card-data">
            <span class="card-data-title">模拟流程</span>
            <el-row>
              <el-col :span="12">
                <label>圆盘号</label>
              </el-col>
              <el-col :span="12">
                <v-text>{{ drop_axis_speed }}</v-text>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">加热号</el-button>
              </el-col>
              <el-col :span="12">
                <v-text>{{ drop_axis_left }}</v-text>
              </el-col>
            </el-row>
            <div class="distance_one_line"></div>
            <el-row>
              <el-button type="info" size="mini">启动</el-button>
            </el-row>
            <el-row>
              <el-button type="info" size="mini">停止</el-button>
            </el-row>
          </el-card>
        </el-col>

        <!-- 进样器位置显示 -->
        <el-col :span="4">
          <el-card class="card-data">
            <span class="card-data-title">进样器位置显示</span>
            <el-row>
              <el-col :span="12">
                <label>圆盘B</label>
              </el-col>
              <el-col :span="12">
                <v-text>{{ drop_axis_speed }}</v-text>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <label>Z轴</label>
              </el-col>
              <el-col :span="12">
                <v-text>{{ drop_axis_speed }}</v-text>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <label>Y轴</label>
              </el-col>
              <el-col :span="12">
                <v-text>{{ drop_axis_speed }}</v-text>
              </el-col>
            </el-row>
            <div class="distance_one_line"></div>
            <el-row>
              <el-button type="info" size="mini">回参</el-button>
            </el-row>
          </el-card>
        </el-col>
        <!-- 进样器位置显示 -->
        <el-col :span="4">
          <el-card class="card-data">
            <span class="card-data-title">进样器圆盘1号位置</span>
            <el-row>
              <el-col :span="12">
                <label>圆盘B</label>
              </el-col>
              <el-col :span="12">
                <v-text>{{ drop_axis_speed }}</v-text>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <label>Y轴</label>
              </el-col>
              <el-col :span="12">
                <v-text>{{ drop_axis_speed }}</v-text>
              </el-col>
            </el-row>
            <div class="distance_two_line"></div>
            <el-row>
              <el-button type="info" size="mini">启动</el-button>
            </el-row>
          </el-card>
        </el-col>
        <!-- 进样器Z轴 -->
        <el-col :span="4">
          <el-card class="card-data">
            <span class="card-data-title">进样器Z轴</span>
            <el-row>
              <el-col :span="12">
                <label>下降位置</label>
              </el-col>
              <el-col :span="12">
                <v-text>{{ drop_axis_speed }}</v-text>
              </el-col>
            </el-row>
            <div class="distance_two_line"></div>
            <el-row>
              <el-button type="info" size="mini">启动</el-button>
            </el-row>
          </el-card>
        </el-col>
      </el-row>

      <div class="distance_two_line"></div>
      <div class="distance_two_line"></div>
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
    <div><app-footer></app-footer></div>
  </el-container>
</template>

<script>
export default {
  name: 'DataShow',
  data () {
    return {
      disk_xaxis: '5.00',
      disk_yaxis: '10.0',
      disk_zaxis: '1770.1',
      disk_A: '3.0',

      add_sample_xaxis: '+200.0',
      add_sample_yaxis: '22.0',
      add_sample_zaxis: '120.5',

      drop_xaxis: '+200.0',
      drop_yaxis: '22.0',
      drop_zaxis: '120.5',

      hot_xaxis: '+200.0',
      hot_yaxis: '22.0',
      hot_zaxis: '120.5',

      stay_xaxis: '+200.0',
      stay_yaxis: '22.0',

      zaxis_speed: '40.0',
      zaxis_position: '121.0',

      drop_axis_speed: '150.0',
      drop_axis_left: '30.0',
      drop_axis_right: '-200.0',
      drop_axis_middle: '',

      add_sample_axis_speed: '150.0',
      add_sample_axis_one: '36.70',
      add_sample_axis_two: '110.0',
      add_sample_axis_three: '50.0',

      mock_flow_disk_num: '10',
      mock_flow_heat_num: '1',

      sample_pos_diskB: '0.0',
      sample_pos_zaxis: '0.0',
      sample_pos_yaxis: '0.0',

      sample_disk_pos_diskB: '-42.00',
      sample_disk_pos_yaxis: '23.0',

      sample_zaxis_down_pos: '44'
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
  width: 160px;
  height: 160px;
  text-align: center;
  border: 1px solid gray;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 12px;
  /* float: left; */
  margin-left: 20px;
  margin-top: 20px;
  /* margin: 4px; */
}

.el-card__body {
  padding: 8px 8px 8px 0px;
}

.card-data-title {
  width: 100px;
  position: absolute;
  top: 12px;
  font-size: 10px;
  color: #0031ff;
  background: #00ffff;
  transform: translate(-50%);
}

.el-button--mini {
  padding: 4px 6px;
  font-size: 12px;
  width: 45px;
  border-radius: 1px;
  background: linear-gradient(
    to bottom,
    rgb(197, 191, 191),
    gray,
    rgb(197, 191, 191)
  );
  /* background: -webkit-linear-gradient(
    top,
    rgb(197, 191, 191),
    gray,
    rgb(197, 190, 190)
  );*/
}

.el-button--info {
  /* background: linear-gradient(to bottom, rgb(197, 191, 191),, gray, rgb(197, 191, 191)); */
}

.distance_one_line {
  box-sizing: border-box;
  height: 24px;
}
.distance_two_line {
  box-sizing: border-box;
  height: 48px;
}
.menu_buttons {
  box-sizing: border-box;
  /* margin-right: ; */
  margin-right: 20px;
}
</style>
