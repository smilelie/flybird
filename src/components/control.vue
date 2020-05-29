<template>
  <el-container>
    <el-header><app-header></app-header></el-header>
    <el-main>
      <el-row :gutter="1" :type="flex">
        <!-- X轴控制 -->
        <el-col :span="4">
          <el-card class="card-data">
            <span class="card-data-title">X轴控制</span>
            <el-row type="flex" class="bg-gray">
              <el-col :span="4" class="switch-border">
                <el-tag
                  type="success"
                  effect="dark"
                  size="mini"
                  @click="switchOn"
                  style="cursor:pointer"
                  >ON</el-tag
                >
              </el-col>
              <el-col :span="12" class="switch-center">
                <div class="switch-rect" v-bind:class="switchStatus"></div>
              </el-col>
              <el-col :span="4" class="switch-border">
                <el-tag
                  type="danger"
                  effect="dark"
                  size="mini"
                  @click="switchOff"
                  style="cursor:pointer"
                  >OFF</el-tag
                >
              </el-col>
            </el-row>

            <el-row type="flex" align="middle">
              <el-col :span="8">
                <label>正限位</label>
                <!-- <div class="light red"></div> -->
              </el-col>
              <el-col :span="4">
                <div class="light red"></div>
              </el-col>
              <el-col :span="8">
                <label>负限位</label>
              </el-col>
              <el-col :span="4">
                <div class="light red"></div>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">左</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">右</el-button>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">回参</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">复位</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>

        <!-- Y轴控制 -->
        <el-col :span="4">
          <el-card class="card-data">
            <span class="card-data-title">Y轴控制</span>
            <el-row type="flex" class="bg-gray">
              <el-col :span="4" class="switch-border">
                <el-tag
                  type="success"
                  effect="dark"
                  size="mini"
                  @click="switchOnY"
                  style="cursor:pointer"
                  >ON</el-tag
                >
              </el-col>
              <el-col :span="12" class="switch-center">
                <div class="switch-rect" v-bind:class="switchStatus"></div>
              </el-col>
              <el-col :span="4" class="switch-border">
                <el-tag
                  type="danger"
                  effect="dark"
                  size="mini"
                  @click="switchOffY"
                  style="cursor:pointer"
                  >OFF</el-tag
                >
              </el-col>
            </el-row>

            <el-row type="flex" align="middle">
              <el-col :span="8">
                <label>正限位</label>
                <!-- <div class="light red"></div> -->
              </el-col>
              <el-col :span="4">
                <div class="light red"></div>
              </el-col>
              <el-col :span="8">
                <label>负限位</label>
              </el-col>
              <el-col :span="4">
                <div class="light red"></div>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">前</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">后</el-button>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">回参</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">复位</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>

        <!-- 圆盘A -->
        <el-col :span="4">
          <el-card class="card-data">
            <span class="card-data-title">圆盘A</span>
            <el-row type="flex" class="bg-gray">
              <el-col :span="4" class="switch-border">
                <el-tag
                  type="success"
                  effect="dark"
                  size="mini"
                  @click="switchOnDiskA"
                  style="cursor:pointer"
                  >ON</el-tag
                >
              </el-col>
              <el-col :span="12" class="switch-center">
                <div class="switch-rect" v-bind:class="switchStatus"></div>
              </el-col>
              <el-col :span="4" class="switch-border">
                <el-tag
                  type="danger"
                  effect="dark"
                  size="mini"
                  @click="switchOffDiskA"
                  style="cursor:pointer"
                  >OFF</el-tag
                >
              </el-col>
            </el-row>

            <el-row type="flex" align="middle">
              <el-col :span="16">
                <label>参考点</label>
              </el-col>
              <el-col :span="8" :pull="4">
                <div class="light green"></div>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">正</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">反</el-button>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">回参</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">复位</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>

        <!-- 机械手 -->
        <el-col :span="4">
          <el-card class="card-data">
            <span class="card-data-title">机械手</span>
            <el-row type="flex" class="bg-gray">
              <el-col :span="4" class="switch-border">
                <el-tag
                  type="success"
                  effect="dark"
                  size="mini"
                  @click="switchOnDiskA"
                  style="cursor:pointer"
                  >ON</el-tag
                >
              </el-col>
              <el-col :span="12" class="switch-center">
                <div class="switch-rect" v-bind:class="switchStatus"></div>
              </el-col>
              <el-col :span="4" class="switch-border">
                <el-tag
                  type="danger"
                  effect="dark"
                  size="mini"
                  @click="switchOffDiskA"
                  style="cursor:pointer"
                  >OFF</el-tag
                >
              </el-col>
            </el-row>

            <!-- <div class="distance_one_line"></div> -->
            <!-- 空白间距 -->
            <div style="height: 24px;"></div>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">抓</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">放</el-button>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">回参</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">复位</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>

        <!-- 草酸钠泵 -->
        <el-col :span="4">
          <el-card class="card-data">
            <span class="card-data-title">草酸钠泵</span>
            <el-row type="flex" class="bg-gray">
              <el-col :span="4" class="switch-border">
                <el-tag
                  type="success"
                  effect="dark"
                  size="mini"
                  @click="switchOnDiskA"
                  style="cursor:pointer"
                  >ON</el-tag
                >
              </el-col>
              <el-col :span="12" class="switch-center">
                <div class="switch-rect" v-bind:class="switchStatus"></div>
              </el-col>
              <el-col :span="4" class="switch-border">
                <el-tag
                  type="danger"
                  effect="dark"
                  size="mini"
                  @click="switchOffDiskA"
                  style="cursor:pointer"
                  >OFF</el-tag
                >
              </el-col>
            </el-row>

            <el-row type="flex" align="middle">
              <el-col :span="16">
                <label>参考点</label>
              </el-col>
              <el-col :span="8" :pull="4">
                <div class="light green"></div>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">下</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">上</el-button>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">回参</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">复位</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>

        <!-- 高锰酸钾泵 -->
        <el-col :span="4">
          <el-card class="card-data">
            <span class="card-data-title">高锰酸钾泵</span>
            <el-row type="flex" class="bg-gray">
              <el-col :span="4" class="switch-border">
                <el-tag
                  type="success"
                  effect="dark"
                  size="mini"
                  @click="switchOnDiskA"
                  style="cursor:pointer"
                  >ON</el-tag
                >
              </el-col>
              <el-col :span="12" class="switch-center">
                <div class="switch-rect" v-bind:class="switchStatus"></div>
              </el-col>
              <el-col :span="4" class="switch-border">
                <el-tag
                  type="danger"
                  effect="dark"
                  size="mini"
                  @click="switchOffDiskA"
                  style="cursor:pointer"
                  >OFF</el-tag
                >
              </el-col>
            </el-row>

            <el-row type="flex" align="middle">
              <el-col :span="16">
                <label>参考点</label>
              </el-col>
              <el-col :span="8" :pull="4">
                <div class="light red"></div>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">下</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">上</el-button>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">回参</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">复位</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="0" :type="flex" :justify="space - between">
        <!-- 进样器Z轴 -->
        <el-col :span="3.1">
          <el-card class="card-data2">
            <span class="card-data-title">进样器Z轴</span>
            <el-row type="flex" class="bg-gray">
              <el-col :span="4" class="switch-border">
                <el-tag
                  type="success"
                  effect="dark"
                  size="mini"
                  @click="switchOn"
                  style="cursor:pointer"
                  >ON</el-tag
                >
              </el-col>
              <el-col :span="12" class="switch-center">
                <div class="switch-rect" v-bind:class="switchStatus"></div>
              </el-col>
              <el-col :span="4" class="switch-border">
                <el-tag
                  type="danger"
                  effect="dark"
                  size="mini"
                  @click="switchOff"
                  style="cursor:pointer"
                  >OFF</el-tag
                >
              </el-col>
            </el-row>

            <el-row type="flex" align="middle">
              <el-col :span="8">
                <label>正限位</label>
                <!-- <div class="light red"></div> -->
              </el-col>
              <el-col :span="4">
                <div class="light red"></div>
              </el-col>
              <el-col :span="8">
                <label>负限位</label>
              </el-col>
              <el-col :span="4">
                <div class="light red"></div>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">下</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">上</el-button>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">回参</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">复位</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>

        <!-- 进样器Y轴 -->
        <el-col :span="3.1">
          <el-card class="card-data2">
            <span class="card-data-title">进样器Y轴</span>
            <el-row type="flex" class="bg-gray">
              <el-col :span="4" class="switch-border">
                <el-tag
                  type="success"
                  effect="dark"
                  size="mini"
                  @click="switchOnY"
                  style="cursor:pointer"
                  >ON</el-tag
                >
              </el-col>
              <el-col :span="12" class="switch-center">
                <div class="switch-rect" v-bind:class="switchStatus"></div>
              </el-col>
              <el-col :span="4" class="switch-border">
                <el-tag
                  type="danger"
                  effect="dark"
                  size="mini"
                  @click="switchOffY"
                  style="cursor:pointer"
                  >OFF</el-tag
                >
              </el-col>
            </el-row>

            <el-row type="flex" align="middle">
              <el-col :span="8">
                <label>正限位</label>
                <!-- <div class="light red"></div> -->
              </el-col>
              <el-col :span="4">
                <div class="light red"></div>
              </el-col>
              <el-col :span="8">
                <label>负限位</label>
              </el-col>
              <el-col :span="4">
                <div class="light red"></div>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">正</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">反</el-button>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">回参</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">复位</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>

        <!-- 进样器圆盘 -->
        <el-col :span="3.1">
          <el-card class="card-data2">
            <span class="card-data-title">进样器圆盘</span>
            <el-row type="flex" class="bg-gray">
              <el-col :span="4" class="switch-border">
                <el-tag
                  type="success"
                  effect="dark"
                  size="mini"
                  @click="switchOnDiskA"
                  style="cursor:pointer"
                  >ON</el-tag
                >
              </el-col>
              <el-col :span="12" class="switch-center">
                <div class="switch-rect" v-bind:class="switchStatus"></div>
              </el-col>
              <el-col :span="4" class="switch-border">
                <el-tag
                  type="danger"
                  effect="dark"
                  size="mini"
                  @click="switchOffDiskA"
                  style="cursor:pointer"
                  >OFF</el-tag
                >
              </el-col>
            </el-row>

            <el-row type="flex" align="middle">
              <el-col :span="16">
                <label>参考点</label>
              </el-col>
              <el-col :span="8" :pull="4">
                <div class="light red"></div>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">正</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">反</el-button>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">回参</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">复位</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>

        <!-- Z轴控制 -->
        <el-col :span="3.1">
          <el-card class="card-data2">
            <span class="card-data-title">Z轴控制</span>
            <el-row type="flex" class="bg-gray">
              <el-col :span="4" class="switch-border">
                <el-tag
                  type="success"
                  effect="dark"
                  size="mini"
                  @click="switchOnDiskA"
                  style="cursor:pointer"
                  >ON</el-tag
                >
              </el-col>
              <el-col :span="12" class="switch-center">
                <div class="switch-rect" v-bind:class="switchStatus"></div>
              </el-col>
              <el-col :span="4" class="switch-border">
                <el-tag
                  type="danger"
                  effect="dark"
                  size="mini"
                  @click="switchOffDiskA"
                  style="cursor:pointer"
                  >OFF</el-tag
                >
              </el-col>
            </el-row>

            <el-row :type="flex" justify="center">
              <el-col :span="16">
                <lable>参考点</lable>
              </el-col>
              <el-col :span="8" :pull="4">
                <div class="light red"></div>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">下</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">上</el-button>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">回参</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">复位</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>

        <!-- 加样轴 -->
        <el-col :span="3.1">
          <el-card class="card-data2">
            <span class="card-data-title">加样轴</span>
            <el-row type="flex" class="bg-gray">
              <el-col :span="4" class="switch-border">
                <el-tag
                  type="success"
                  effect="dark"
                  size="mini"
                  @click="switchOnDiskA"
                  style="cursor:pointer"
                  >ON</el-tag
                >
              </el-col>
              <el-col :span="12" class="switch-center">
                <div class="switch-rect" v-bind:class="switchStatus"></div>
              </el-col>
              <el-col :span="4" class="switch-border">
                <el-tag
                  type="danger"
                  effect="dark"
                  size="mini"
                  @click="switchOffDiskA"
                  style="cursor:pointer"
                  >OFF</el-tag
                >
              </el-col>
            </el-row>

            <el-row type="flex" align="middle">
              <el-col :span="16">
                <label>参考点</label>
              </el-col>
              <el-col :span="8" :pull="4">
                <div class="light green"></div>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">正</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">反</el-button>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">回参</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">复位</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>

        <!-- 滴定轴 -->
        <el-col :span="3.1">
          <el-card class="card-data2">
            <span class="card-data-title">滴定轴</span>
            <el-row type="flex" class="bg-gray">
              <el-col :span="4" class="switch-border">
                <el-tag
                  type="success"
                  effect="dark"
                  size="mini"
                  @click="switchOnDiskA"
                  style="cursor:pointer"
                  >ON</el-tag
                >
              </el-col>
              <el-col :span="12" class="switch-center">
                <div class="switch-rect" v-bind:class="switchStatus"></div>
              </el-col>
              <el-col :span="4" class="switch-border">
                <el-tag
                  type="danger"
                  effect="dark"
                  size="mini"
                  @click="switchOffDiskA"
                  style="cursor:pointer"
                  >OFF</el-tag
                >
              </el-col>
            </el-row>

            <el-row type="flex" align="middle">
              <el-col :span="16">
                <label>参考点</label>
              </el-col>
              <el-col :span="8" :pull="4">
                <div class="light red"></div>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">正</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">反</el-button>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">回参</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">复位</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>

        <!-- 纯水泵 -->
        <el-col :span="3.1">
          <el-card class="card-data2">
            <span class="card-data-title">纯水泵</span>
            <el-row type="flex" class="bg-gray">
              <el-col :span="4" class="switch-border">
                <el-tag
                  type="success"
                  effect="dark"
                  size="mini"
                  @click="switchOnDiskA"
                  style="cursor:pointer"
                  >ON</el-tag
                >
              </el-col>
              <el-col :span="12" class="switch-center">
                <div class="switch-rect" v-bind:class="switchStatus"></div>
              </el-col>
              <el-col :span="4" class="switch-border">
                <el-tag
                  type="danger"
                  effect="dark"
                  size="mini"
                  @click="switchOffDiskA"
                  style="cursor:pointer"
                  >OFF</el-tag
                >
              </el-col>
            </el-row>

            <el-row type="flex" align="middle">
              <el-col :span="16">
                <label>参考点</label>
              </el-col>
              <el-col :span="8" :pull="4">
                <div class="light red"></div>
              </el-col>
            </el-row>

            <div class="distance_one_line"></div>
            <!-- <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">正</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">反</el-button>
              </el-col>
            </el-row> -->

            <el-row>
              <el-col :span="12">
                <el-button type="info" size="mini">回参</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="info" size="mini">复位</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>

      <div style="height:90px;"></div>

      <el-row :gutter="2">
        <el-col :span="12">
          <el-row :type="flex" :justify="start" class="menu_buttons">
            <el-button type="info" size="small">轴使能回原点</el-button>
            <el-button type="info" size="small">轴复位</el-button>
          </el-row>
        </el-col>
        <el-col :span="12">
          <!-- <div class="bottom-right-buttons"> -->
          <el-row type="flex" justify="end" class="menu_buttons">
            <el-button type="info" size="small">参数设置</el-button>
            <el-button type="info" size="small">标定设置</el-button>
            <el-button type="info" size="small">轴设置</el-button>
            <el-button type="info" size="small"> 轴调试</el-button>
            <el-button type="info" size="small" @click="HomePage"
              >操作界面</el-button
            >
          </el-row>
        </el-col>
      </el-row>
      <!-- </div> -->
    </el-main>
    <div><app-footer></app-footer></div>
  </el-container>
</template>

<script>
export default {
  name: 'control',
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
      drop_axis_left: '20.0',
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

      sample_zaxis_down_pos: '44',

      switchStatus: 'switch-rect-off'
    }
  },
  methods: {
    switchOn () {
      console.log('开')
      this.switchStatus = 'switch-rect-on'
    },
    switchOff () {
      console.log('off')
      this.switchStatus = 'switch-rect-off'
    },
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
  font-size: 10px;
  /* float: left; */
  margin-left: 20px;
  margin-top: 20px;
  /* margin: 4px; */
}

/* 第二行宽度不同 */
.card-data2 {
  width: 146px;
  height: 160px;
  text-align: center;
  border: 1px solid gray;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 10px;
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

.full-row {
  height: 100%;
  padding: 10px;
}

.el-button--mini {
  padding: 4px 6px;
  font-size: 12px;
  width: 45px;
  border-radius: 1px;
  /* background: -webkit-linear-gradient(
    top,
    rgb(197, 191, 191),
    gray,
    rgb(197, 190, 190)
  );*/
}

.el-button--info {
  background: linear-gradient(top, white, gray, white);
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
  margin-right: 20px;
  margin-left: 20px;
}

.switch-border {
  width: 72px;
  height: 48px;
  /* background-color: #c0c0c0; */
  box-sizing: border-box;
  /* text-align: center; */
  margin: auto;
}

.bg-gray {
  background-color: #c0c0c0;
}

.switch-center {
  width: 30px;
  height: 30px;
  /* box-sizing: border-box; */

  /* background-color: #c0c0c0; */
  border: solid 1px gray;
  border-radius: 50%;
  box-shadow: 1px -1px 3px gray;
  /* border: outset; */
  margin-top: 10px;
}

.switch-rect {
  top: 11px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 26px;
  height: 2px;

  position: relative;
  border: outset;
  margin: auto;
  /* transform: rotate(-40deg); */
}
.switch-rect-off {
  transform: rotate(-40deg);
}
.switch-rect-on {
  transform: rotate(-130deg);
}
.switch-button {
  width: 10px;
  height: 8px;
  font-size: 6px;
  /* border: solid 1px white; */
}
/* 开关按钮 */
.el-tag {
  font-size: 6px;
  border-radius: 1px;
  color: black;
  /* box-sizing: border-box; */
}
.el-tag--mini {
  height: 10px;
  padding: 0 2px;
  line-height: 8px;
}

/* 红绿灯 */
.light {
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: solid 1px black;
  border-radius: 50%;
  margin: auto;
}

.red {
  background-color: red;
}
.green {
  background-color: rgb(21, 223, 21);
}
</style>
