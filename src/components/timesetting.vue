<template>
  <el-container>
    <el-header><app-header></app-header></el-header>
    <el-main>
      <div class="time-show-group">
        <div>
          <label>开始 </label>
          <el-tag type="info" hit="true">{{ start_time }}</el-tag>
        </div>
        <div>
          <label>结束 </label>
          <el-tag type="info" hit="true">{{ end_time }}</el-tag>
        </div>
        <div>
          <label>实时 </label>
          <el-tag type="info" hit="true">{{ now_time }}</el-tag>
        </div>
      </div>

      <el-row>
        <div class="time-setting">
          <el-card class="card-data card-height">
            <span class="card-data-title">时间设置</span>

            <el-row :gutter="0">
              <el-col :span="8" :pull="0">
                <el-row>
                  <label>写入时间</label>
                </el-row>
                <el-row>
                  <el-col :span="16">
                    <el-input v-model="write_year" placeholder="请输入年份">
                    </el-input>
                  </el-col>
                  <el-col :span="8" class="demonstration">年</el-col>
                </el-row>

                <el-row>
                  <el-col :span="16">
                    <el-input v-model="write_month" placeholder="请输入月份">
                    </el-input>
                  </el-col>
                  <el-col :span="8" class="demonstration">月</el-col>
                </el-row>

                <el-row>
                  <el-col :span="16">
                    <el-input v-model="write_date" placeholder="请输入日期">
                    </el-input>
                  </el-col>
                  <el-col :span="8" class="demonstration">日</el-col>
                </el-row>

                <el-row>
                  <el-col :span="16">
                    <el-input v-model="write_hour" placeholder="请输入小时">
                    </el-input>
                  </el-col>
                  <el-col :span="8" class="demonstration">时</el-col>
                </el-row>

                <el-row>
                  <el-col :span="16">
                    <el-input v-model="write_miniter" placeholder="请输入分钟">
                    </el-input>
                  </el-col>
                  <el-col :span="8" class="demonstration">分</el-col>
                </el-row>

                <el-row>
                  <el-col :span="16">
                    <el-input v-model="write_second" placeholder="请输入秒">
                    </el-input>
                  </el-col>
                  <el-col :span="8" class="demonstration">秒</el-col>
                </el-row>
              </el-col>

              <el-col :span="8">
                <div style="height:120px;"></div>
                <el-row>
                  <el-button type="info" size="small">确定</el-button>
                </el-row>
              </el-col>

              <el-col :span="8" :pull="0">
                <el-row>
                  <label>读取时间</label>
                </el-row>
                <el-row>
                  <el-col :span="16">
                    <el-input v-model="read_year" placeholder="请输入年份">
                    </el-input>
                  </el-col>
                  <el-col :span="8" class="demonstration">年</el-col>
                </el-row>

                <el-row>
                  <el-col :span="16">
                    <el-input v-model="read_month" placeholder="请输入月份">
                    </el-input>
                  </el-col>
                  <el-col :span="8" class="demonstration">月</el-col>
                </el-row>

                <el-row>
                  <el-col :span="16">
                    <el-input v-model="read_date" placeholder="请输入日期">
                    </el-input>
                  </el-col>
                  <el-col :span="8" class="demonstration">日</el-col>
                </el-row>

                <el-row>
                  <el-col :span="16">
                    <el-input v-model="read_hour" placeholder="请输入小时">
                    </el-input>
                  </el-col>
                  <el-col :span="8" class="demonstration">时</el-col>
                </el-row>

                <el-row>
                  <el-col :span="16">
                    <el-input v-model="read_miniter" placeholder="请输入分钟">
                    </el-input>
                  </el-col>
                  <el-col :span="8" class="demonstration">分</el-col>
                </el-row>

                <el-row>
                  <el-col :span="16">
                    <el-input v-model="read_second" placeholder="请输入秒">
                    </el-input>
                  </el-col>
                  <el-col :span="8" class="demonstration">秒</el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </el-row>

      <el-row>
        <div class="try-limit">
          <el-card class="card-data card-height2">
            <span class="card-data-title">试用期限</span>
            <el-row :gutter="2" type="flex" justify="center">
              <el-col :span="6">
                <el-input v-model="limit_year"></el-input>
              </el-col>
              <el-col :span="2">
                <label> 年 </label>
              </el-col>
              <el-col :span="6">
                <el-input v-model="limit_month" size="mini"></el-input>
              </el-col>
              <el-col :span="2">
                <label> 月 </label>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </el-row>

      <div style="height:24px;"></div>
      <el-row type="flex" justify="end" class="menu_buttons">
        <!-- <div style="height:24px;"></div> -->
        <el-button type="info" size="mini">操作界面</el-button>
      </el-row>
    </el-main>
    <el-footer><app-footer></app-footer></el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'timesetting',
  data () {
    return {
      write_year: '1999',
      write_month: '1',
      write_date: '12',
      write_hour: '11',
      write_miniter: '11',
      write_second: '11',

      read_year: '1999',
      read_month: '1',
      read_date: '12',
      read_hour: '11',
      read_miniter: '11',
      read_second: '11',

      limit_year: 2021,
      limit_month: '12',

      start_time: '2020.5.10 11:51:23',
      end_time: '2020.5.13 07:48:19',
      now_time: '2020.5.11 16:43:23'
    }
  }
}
</script>

<style scoped>
.card-data {
  width: 600px;
  /* height: 300px; */
  text-align: center;
  border: 1px solid gray;
  border-radius: 20px;
  box-sizing: border-box;
  font-size: 16px;
  /* float: left; */
  margin-left: 20px;
  margin-top: 20px;
  /* margin: 4px; */
}

.card-height {
  height: 300px;
}

.card-height2 {
  height: 80px;
  border-radius: 20%;
}

.el-card__body {
  padding: 8px 8px 8px 0px;
}

.card-data-title {
  width: 100px;
  position: absolute;
  top: 14px;
  font-size: 10px;
  color: #0031ff;
  background: #00ffff;
  transform: translate(-50%);
}

.el-input__inner {
  height: 30px;
}

.menu_buttons {
  box-sizing: border-box;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
}

.time-show-group {
  float: right;
  line-height: 20px;

  font-size: 14px;

  /* position: absolute; */
  margin-top: 20px;
  margin-right: 20px;
  box-sizing: border-box;
}
</style>
