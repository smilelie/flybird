<template>
  <el-container>
    <!-- <el-header>高锰酸钾指数分析仪</el-header> -->
    <app-header></app-header>
    <div name="menus">
      <el-row>
        <el-button type="primary" size="small" @click="StartTask" plain
          >开始任务
        </el-button>
        <el-button type="primary" size="small" @click="NewTask" plain
          >新建任务
        </el-button>
        <el-button type="primary" size="small" @click="CancelTask" plain
          >取消任务
        </el-button>
        <el-button type="primary" size="small" @click="CleanPipeline" plain
          >管路清洗
        </el-button>
        <el-button type="primary" size="small" @click="LookupResult" plain
          >查看结果
        </el-button>
        <el-button type="primary" size="small" @click="ExportData" plain
          >数据导出
        </el-button>
        <el-button type="primary" size="small" @click="StardardDoc" plain
          >标准文献
        </el-button>
        <el-button type="primary" size="small" @click="AlertReset" plain
          >报警复位
        </el-button>
        <el-button type="primary" size="small" @click="BathSetting" plain
          >水浴设置
        </el-button>
        <el-button type="primary" size="small" @click="Calibration" plain
          >标定系数
        </el-button>
        <el-button type="primary" size="small" @click="CloseSystem" plain
          >关闭系统
        </el-button>
      </el-row>
    </div>
    <el-container>
      <el-main>
        <div class="widgets">
          <el-row :gutter="8">
            <div v-for="item in listData" :key="item.id">
              <el-col :span="4">
                <el-card class="box-card" :body-style="{ padding: '4px' }">
                  <el-row :gutter="1">
                    <el-col :span="4"
                      ><div class="item_num">{{ item.id }}</div></el-col
                    >
                    <el-col :span="16"
                      ><el-tag type="info" class="item_dataclass">{{
                        item.data
                      }}</el-tag></el-col
                    >
                    <el-col :span="4"
                      ><el-button
                        type="info"
                        class="item_dataclass"
                        @click="item.dialogVisible = true"
                        >》》</el-button
                      >
                      <div style="position:'relative'" class="item_info_dialog">
                        <el-dialog
                          aria-posinset="0"
                          :modal="true"
                          :modal-append-to-body="false"
                          :show-close="false"
                          :visible.sync="item.dialogVisible"
                          width="300px"
                        >
                          <!-- :before-close="handleClose"> -->
                          <el-row>
                            <el-col :span="4"
                              ><div class="item_num">
                                {{ item_info.id }}
                              </div></el-col
                            >
                            <el-col :span="8"
                              ><div class="item_info_label">编号：</div></el-col
                            >
                            <el-col :span="12"
                              ><el-tag type="info" class="item_info_data">{{
                                item_info.code
                              }}</el-tag></el-col
                            >
                          </el-row>
                          <el-row>
                            <el-col :offset="4" :span="8"
                              ><div class="item_info_label">
                                取样量：
                              </div></el-col
                            >
                            <el-col :span="12"
                              ><el-tag type="info" class="item_info_data">{{
                                item_info.select_num
                              }}</el-tag></el-col
                            >
                          </el-row>
                          <el-row>
                            <el-col :span="8" :offset="4"
                              ><div class="item_info_label">
                                滴定量：
                              </div></el-col
                            >
                            <el-col :span="12"
                              ><el-tag type="info" class="item_info_data">{{
                                item_info.drop_data
                              }}</el-tag></el-col
                            >
                          </el-row>
                          <el-row>
                            <el-col :span="8" :offset="4"
                              ><div class="item_info_label">结果：</div></el-col
                            >
                            <el-col :span="12"
                              ><el-tag type="info" class="item_info_data">{{
                                item_info.result
                              }}</el-tag></el-col
                            >
                          </el-row>
                          <div class="radios">
                            <el-row
                              ><el-radio
                                v-model="item_info.radio_index"
                                label="1"
                                >选择进样</el-radio
                              ></el-row
                            >
                            <el-row
                              ><el-radio
                                v-model="item_info.radio_index"
                                label="2"
                                >不加硫酸</el-radio
                              ></el-row
                            >
                            <el-row
                              ><el-radio
                                v-model="item_info.radio_index"
                                label="3"
                                >空白标定样</el-radio
                              ></el-row
                            >
                            <el-row
                              ><el-radio
                                v-model="item_info.radio_index"
                                label="4"
                                >水样</el-radio
                              ></el-row
                            >
                          </div>
                          <span slot="footer" class="dialog-footer">
                            <el-button
                              type="info"
                              size="mini"
                              @click="item.dialogVisible = false"
                              >退出</el-button
                            >
                          </span>
                        </el-dialog>
                      </div>
                    </el-col>
                  </el-row>
                  <br />
                  <el-row :gutter="1">
                    <el-col :span="12"
                      ><div class="item_dataclass">V1:</div></el-col
                    >
                    <el-col :span="12"
                      ><div class="item_dataclass">
                        {{ item.v1_data }}
                      </div></el-col
                    >
                  </el-row>
                  <br />
                  <el-row :gutter="1">
                    <el-col :span="12"
                      ><div class="item_dataclass">Imn:</div></el-col
                    >
                    <el-col :span="12"
                      ><div class="item_dataclass">
                        {{ item.imn_data }}
                      </div></el-col
                    >
                  </el-row>
                </el-card>
              </el-col>
            </div>
          </el-row>
        </div>
      </el-main>
      <el-aside class="right-panel" width="30%">
        <div class="check-groups">
          <el-row :gutter="0">
            <el-checkbox v-model="autoClean">自动管路清洗</el-checkbox>
            <label>清洗次数: {{ countClean }}</label>
            <el-checkbox v-model="isAddSulphuricAcid">全不加硫酸 </el-checkbox>
            <el-checkbox v-model="isBasicProcess">碱性法</el-checkbox>
            <el-checkbox v-model="isSelectAutoCome">选择自动进样</el-checkbox>
            <label
              ><font color="green" v-if="isConnected"
                >&emsp;&emsp;&emsp;&emsp;已连接</font
              ><font color="red" v-else>
                &emsp;&emsp;&emsp;&emsp;未连接</font
              ></label
            >
          </el-row>
        </div>

        <div class="blank-consume">
          <el-row>
            <label> 空白消耗量V0(ml): </label><label>{{ consume_num }}</label>
          </el-row>
          <el-row>
            <label> 标定消耗体积V2(ml): </label><label>{{ consume_v2 }}</label>
          </el-row>
          <el-row>
            <label>校正系数Ｋ:</label><label>{{ adjust_num }}</label>
          </el-row>
        </div>
        <br />
        <div class="data-charts">
          <ve-histogram
            :data="chartData"
            :extend="chartExtend"
            :legend-visible="false"
            :judge-width="false"
            height="220px"
          ></ve-histogram>
        </div>
        <br />
        <div class="summer">
          <el-row>
            <label> 总数: </label><label>{{ total_num }}</label>
            <label> 预计用时: </label><label>{{ pre_time }}</label>
          </el-row>
          <el-row>
            <label> 已测: </label><label>{{ test_num }}</label>
          </el-row>
          <el-row>
            <label>待测:</label><label>{{ untest_num }}</label>
            <label> 当前用时: </label><label>{{ past_time }}</label>
          </el-row>
        </div>
      </el-aside>
    </el-container>
    <el-footer>盛泰科技</el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'SecondPage',
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    StartTask () {
      console.log('StartTask')
      this.$router.push('/control')
    },
    NewTask () {
      console.log('新建任务')
      // this.$router.push('/control')
    },
    CancelTask () {
      console.log('取消任务')
      // this.$router.push('/control')
    },
    CleanPipeline () {
      console.log('管路清洗')
      this.$router.push('/option')
    },
    LookupResult () {
      console.log('查看结果')
      this.$router.push('/show')
    },
    ExportData () {
      console.log('数据导出')
      // this.$router.push('/option')
    },
    StardardDoc () {
      console.log('标准文献')
      // this.$router.push('/option')
    },
    AlertReset () {
      console.log('报警复位')
      this.$router.push('/timesetting')
    },
    BathSetting () {
      console.log('水浴设置')
      this.$router.push('/option')
    },
    Calibration () {
      console.log('标定系数')
      this.$router.push('/setting')
    },
    CloseSystem () {
      console.log('关闭系统')
    }
  },
  data: function () {
    this.chartExtend = {
      /* 柱状图宽度 */
      series: {
        width: 20
      },
      /* 不显示Y轴 */
      yAxis: {
        show: true
      }
    }

    return {
      listData: [
        {
          id: 1,
          data: '10.03',
          dialogVisible: false,
          v1_data: 1.0,
          imn_data: 1.02
        },
        {
          id: 2,
          data: '3.05',
          dialogVisible: false,
          v1_data: 23.45,
          imn_data: 1.02
        },
        {
          id: 3,
          data: '10.03',
          dialogVisible: false,
          v1_data: 1.0,
          imn_data: 1.02
        },
        {
          id: 4,
          data: '3.05',
          dialogVisible: false,
          v1_data: 23.45,
          imn_data: 1.02
        },
        {
          id: 5,
          data: '10.03',
          dialogVisible: false,
          v1_data: 1.0,
          imn_data: 1.02
        },
        {
          id: 6,
          data: '3.05',
          dialogVisible: false,
          v1_data: 23.45,
          imn_data: 1.02
        },
        {
          id: 7,
          data: '10.03',
          dialogVisible: false,
          v1_data: 1.0,
          imn_data: 1.02
        },
        {
          id: 8,
          data: '3.05',
          dialogVisible: false,
          v1_data: 23.45,
          imn_data: 1.02
        },
        {
          id: 9,
          data: '10.03',
          dialogVisible: false,
          v1_data: 1.0,
          imn_data: 1.02
        },
        {
          id: 10,
          data: '3.05',
          dialogVisible: false,
          v1_data: 23.45,
          imn_data: 1.02
        },
        {
          id: 11,
          data: '10.03',
          dialogVisible: false,
          v1_data: 1.0,
          imn_data: 1.02
        },
        {
          id: 12,
          data: '3.05',
          dialogVisible: false,
          v1_data: 23.45,
          imn_data: 1.02
        },
        {
          id: 13,
          data: '10.03',
          dialogVisible: false,
          v1_data: 1.0,
          imn_data: 1.02
        },
        {
          id: 14,
          data: '3.05',
          dialogVisible: false,
          v1_data: 23.45,
          imn_data: 1.02
        },
        {
          id: 15,
          data: '10.03',
          dialogVisible: false,
          v1_data: 1.0,
          imn_data: 1.02
        },
        {
          id: 16,
          data: '3.05',
          dialogVisible: false,
          v1_data: 23.45,
          imn_data: 1.02
        },
        {
          id: 17,
          data: '10.03',
          dialogVisible: false,
          v1_data: 1.0,
          imn_data: 1.02
        },
        {
          id: 18,
          data: '3.05',
          dialogVisible: false,
          v1_data: 23.45,
          imn_data: 1.02
        },
        {
          id: 19,
          data: '10.03',
          dialogVisible: false,
          v1_data: 1.0,
          imn_data: 1.02
        },
        {
          id: 20,
          data: '3.05',
          dialogVisible: false,
          v1_data: 23.45,
          imn_data: 1.02
        },
        {
          id: 21,
          data: '10.03',
          dialogVisible: false,
          v1_data: 1.0,
          imn_data: 1.02
        },
        {
          id: 22,
          data: '3.05',
          dialogVisible: false,
          v1_data: 23.45,
          imn_data: 1.02
        },
        {
          id: 23,
          data: '10.03',
          dialogVisible: false,
          v1_data: 1.0,
          imn_data: 1.02
        },
        {
          id: 24,
          data: '3.05',
          dialogVisible: false,
          v1_data: 23.45,
          imn_data: 1.02
        }
      ],
      autoClean: true,
      countClean: 3,
      isAddSulphuricAcid: false,
      isBasicProcess: false,
      isSelectAutoCome: false,
      isConnected: false,
      consume_num: 0.0,
      consume_v2: 0.0,
      adjust_num: 1.0,
      total_num: 3469,
      pre_time: ' 6 小时 28 分',
      test_num: 2312,
      untest_num: 1158,
      past_time: ' 5 小时 30 分',
      item_info: {
        id: 1,
        code: 0,
        select_num: 0,
        drop_data: 0.0,
        result: 0.0,
        radio_index: 3
      },

      /* charts */
      chartData: {
        columns: ['Name', '体积'],
        rows: [
          { Name: '高锰酸钾', 体积: 123 },
          { Name: '硫酸', 体积: 123 },
          { Name: '草酸钠', 体积: 223 },
          { Name: '氢氧化钠', 体积: 123 }
        ]
      }
    }
  }
  // watch: {
  //   activeName (v) {
  //     this.$nextTick(_ => {
  //       this.$refs[`chart${v}`].echarts.resize()
  //     })
  //   }
  // }
}
</script>

<style>
.box-card {
  font-size: 8px;
  text-align: center;
}
.el-row {
  margin-bottom: 6px;
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
  color: black;
}
.item_dataclass.el-tag {
  line-height: 18px;
}
.item_dataclass.el-button {
  height: 18px;
  font-size: 8px;
  padding: 0 2px;
}

/* right panel */
.right-panel {
  font-size: 16px;
}

.check-groups {
  padding: 10px;
}
.el-checkbox__label {
  font-size: 16px;
}
.blank-consume {
  padding: 6px;
  width: 90%;
  height: 80px;
  border: 1px solid gray;
  border-radius: 20%;
  text-align: center;
}
.data-charts {
  padding: 0px;
  width: 94%;
  height: 120px;
  border: 1px solid gray;
  border-radius: 20%;
  text-align: center;
}
.ve-histogram {
  padding: 0px;
  width: 180px;
  height: 120px;
  /* top: -45px; */
}
.summer {
  padding: 4px;
  width: 92%;
  height: 60px;
  border: 1px solid gray;
  border-radius: 20%;
  text-align: center;
  font-size: 10px;
}
/** popup dialog */
/* 去掉 head */
.el-dialog__header {
  padding: 0;
}
.item_info_dialog {
  font-size: 8px;
  padding: 0 2px;
  text-align: left;
}
.el-dialog__body {
  padding: 3px 2px;
  color: black;
  font-size: 10px;
  word-break: break-all;
}
.radios {
  padding: 8px;
}
.item_info_data {
  height: 18px;
  width: 100%;
  font-size: 10px;
  text-align: center;
  color: black;
}
.item_info_data.el-tag {
  line-height: 18px;
}
.el-radio__label {
  font-size: 10px;
  padding-left: 2px;
}
.item_info_lable {
  font-size: 10px;
}
.el-dialog__footer {
  padding: 1px 10px 1px 10px;
  text-align: right;
  box-sizing: border-box;
}
</style>
