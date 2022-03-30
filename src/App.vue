<template>
  <div id="app">
    <header-item></header-item>
    <covid-info :covid19Info="covid19Info"></covid-info>
    <cause-num :caseNumData="caseNumData"></cause-num>
    <map-item></map-item>
    <my-swiper></my-swiper>
    <h1>风险区域查询</h1>
    <div class="row">
      <!--router-link实现路由的切换-->
      <router-link :to="{
        path:'/MidArea',
        query:{
          MidMsg:riskArea.mid
        }
      }">查看当前中风险区域</router-link>
      <router-link :to="{
        path:'/HighArea',
        query:{
          HighMsg:riskArea.high
        }
        }">查看当前高风险区域</router-link>
    </div>
    <div class="panel">
      <h1>风险区域查询结果显示</h1>
      <h3>1</h3>
      <router-view class="view one"></router-view>
      <h3>2</h3>
      <router-view class="view two" name="a"></router-view>
    </div>
    <travel-rule></travel-rule>
    <div class="panel">
      <h1>出行政策查询结果显示</h1>
      <!--指定组件的呈现位置-->
      <h3>3</h3>
      <router-view class="view three" name="b"></router-view>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeaderItem from "./components/HeaderItem.vue";
import CovidInfo from "./components/CovidInfo.vue";
import CauseNum from "./components/CauseNum.vue";
import MapItem from "./components/MapItem.vue";
import MySwiper from "./components/MySwiper.vue";
import TravelRule from './components/TravelRule.vue';
export default {
  name: "App",
  components: {
    HeaderItem,
    CovidInfo,
    CauseNum,
    MapItem,
    MySwiper,
    TravelRule,
  },
  mounted() {
    axios
      .get(
        "http://api.tianapi.com/ncov/index?key=05902365abae9d4a5b785095c92956bf"
      )
      .then(
        (resolve) => {
          console.log(resolve.data);
          if (resolve.status === 200) {
            let descInfo = resolve.data.newslist[0].desc;
            let coNeedInfo = this.covid19Info;
            let coglNeedInfo = coNeedInfo.globalStatistics;
            let desc = resolve.data.newslist[0].desc;
            //CovidInfo
            coNeedInfo.confirmedCount = descInfo.confirmedCount;
            coNeedInfo.confirmedIncr = descInfo.confirmedIncr;
            coNeedInfo.currentConfirmedCount = descInfo.currentConfirmedCount;
            coNeedInfo.currentConfirmedIncr = descInfo.currentConfirmedIncr;
            coglNeedInfo.confirmedCount =
              descInfo.globalStatistics.confirmedCount;
            coglNeedInfo.confirmedIncr =
              descInfo.globalStatistics.confirmedIncr;
            coglNeedInfo.curedCount = descInfo.globalStatistics.curedCount;
            coglNeedInfo.yesterdayConfirmedCountIncr =
              descInfo.globalStatistics.yesterdayConfirmedCountIncr;
            //CauseInfo
            // 疫情病例
            this.caseNumData.modifyTime = desc.modifyTime;
            this.caseNumData.currentConfirmedCount = desc.currentConfirmedCount;
            this.caseNumData.confirmedCount = desc.confirmedCount;
            this.caseNumData.suspectedCount = desc.suspectedCount;
            this.caseNumData.curedCount = desc.curedCount;
            this.caseNumData.deadCount = desc.deadCount;
            this.caseNumData.seriousCount = desc.seriousCount;
            this.caseNumData.suspectedIncr = desc.suspectedIncr;
            this.caseNumData.currentConfirmedIncr = desc.currentConfirmedIncr;
            this.caseNumData.confirmedIncr = desc.confirmedIncr;
            this.caseNumData.curedIncr = desc.curedIncr;
            this.caseNumData.deadIncr = desc.deadIncr;
            this.caseNumData.seriousIncr = desc.seriousIncr;
            //风险区域
            for(let i = 0;i <= 50;i ++){
              this.riskArea.mid[i] = resolve.data.newslist[0].riskarea.mid[i];
            }

            for(let i = 0;i <= 50; i ++){
              this.riskArea.high[i] = resolve.data.newslist[0].riskarea.high[i];
            }
            console.log(this.riskArea.high)
          }
        },
        (error) => {
          console.log("出现错误");
          console.log(error);
        }
      );
  },
  data() {
    return {
      covid19Info: {
        //确诊数量
        confirmedCount: "",
        //确认新增数量
        confirmedIncr: "",
        //当前确认数量
        currentConfirmedCount: "",
        //当前确认新增数量
        currentConfirmedIncr: "",
        //全球状态
        globalStatistics: {
          confirmedCount: "",
          confirmedIncr: "",
          curedCount: "",
          yesterdayConfirmedCountIncr: "",
        },
      },
      caseNumData: {
        modifyTime: "", // 更新时间
        currentConfirmedCount: "", // 现存确诊人数
        confirmedCount: "", // 累计确诊人数
        suspectedCount: "", // 累计境外输入人数
        curedCount: "", // 累计治愈人数
        deadCount: "", // 	累计死亡人数
        seriousCount: "", // 现存无症状人数
        suspectedIncr: "", // 新增境外输入人数
        currentConfirmedIncr: "", // 相比昨天现存确诊人数
        confirmedIncr: "", // 相比昨天累计确诊人数
        curedIncr: "", // 相比昨天新增治愈人数
        deadIncr: "", // 相比昨天新增死亡人数
        seriousIncr: "", //相比昨天现存无症状人数
      },
      riskArea:{
        mid:[],
        high:[]
      }
    };
  },
};
</script>
  
<style scoped>
.row {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content:center;
  margin-bottom: 3px;
}
.router-link-active {
  background-color: blue;
  font-size: larger;
  color: aliceblue;
}
a {
  width: 50%;
  display: block;
  text-align: center;
  height: 40px;
  padding-top: 15px;
}
h1{
  margin: 20px;
  font-size: 15px;
}
</style>
