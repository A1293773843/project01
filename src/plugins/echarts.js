import * as echarts from 'echarts';
import nameMap from "./name"
const install = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    $charts: {
      get() {
        return {
          chinaMap: function(id){
            this.chart = echarts.init(document.getElementById(id));
            var option = {
              tooltip:{
                /*formatter(data) {
                  return "<div><p>" + data.name + "</p><p>现存确诊:" + data.value + "</p></div>"
                }*/
              },
              visualMap: [{  // 映射-颜色值
                orient: "vertical", // 分段方向:horizontal水平
                type: "piecewise", // 分段
                pieces: [  // 配置颜色区间
                    { min: 0, max: 0, color: "#FFFFFF" },
                    { min: 1, max: 10, color: "#FDFDCF" },
                    { min: 11, max: 100, color: "#FE9E83" },
                    { min: 101, max: 500, color: "#E55A4E" },
                    { min: 501, max: 10000, color: "#4F070D" }
                    ]
                }],
              series: [{
                name: '省',
                type: 'map',
                map: 'china',
                roam: false,//是否允许缩放
                zoom: 1.2,//地图缩放比例
                aspectScale: 0.75,
                //字体
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 8,
                            
                        }
                    }
                },
                //样式
                itemStyle: {
                    normal: {
                        areaColor: 'rgba(0,255,236,0)',
                        borderColor: 'rgba(0,0,0,0.2)',
                    },
                    //阴影效果
                    emphasis: {
                        areaColor: 'rgba(225,10,0,0.8)',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 20,
                        borderWidth: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                /*data: data*/
              }]
            };
            this.chart.setOption(option);
          },
          worldMap: function(id,data){
            this.chart = echarts.init(document.getElementById(id));
            var option = {
              tooltip:{
                formatter(data) {
                  return "<div><p>" + data.name + "</p><p>现存确诊:" + data.value + "</p></div>"
                }
              },
              visualMap: [{  // 映射-颜色值
                orient: "vertical", // 分段方向:horizontal水平
                type: "piecewise", // 分段
                pieces: [  // 配置颜色区间
                    { min: 0, max: 0, color: "#FFFFFF" },
                    { min: 1, max: 1000, color: "#FDFDCF" },
                    { min: 1000, max: 10000, color: "#FE9E83" },
                    { min: 10000, max: 500000, color: "#E55A4E" },
                    { min: 500000, max: 10000000000, color: "#4F070D" }
                    ]
                }],
              series: [{
                name: '世界地图',
                type: 'map',
                map: 'world',
                roam: true,//是否允许缩放
                zoom: 1.8,//地图缩放比例
                aspectScale: 0.75,
                //字体
                label: {
                    normal: {
                        show: false,//显示名字
                        textStyle: {
                            fontSize: 8,
                            
                        }
                    }
                },
                nameMap:nameMap,
                //样式
                itemStyle: {
                    normal: {
                        areaColor: 'rgba(0,255,236,0)',
                        borderColor: 'rgba(0,0,0,0.2)',
                    },
                    //阴影效果
                    emphasis: {
                        areaColor: 'rgba(225,100,10,100.8)',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 20,
                        borderWidth: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                data:data
              }]
            };
            this.chart.setOption(option);
          }
        }
      }
    }
  })
}
export default install;