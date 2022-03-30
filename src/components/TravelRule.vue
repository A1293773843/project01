<template>
  <div class="spring">
    <h3 class="title">出行政策</h3>
    <!--给子组件绑定自定义事件，指定回调函数-->
    <CasItem :options="options" label="出发城市" @onValue="getgoCity"></CasItem>
    <CasItem :options="options" label="目的城市" @onValue="getonCity"></CasItem>
    <van-button type="info" block @click="gotoSpringView">点击查询</van-button>
  </div>
</template>

<script>
import api from "../api";
import CasItem from './CasItem.vue';

export default {
  components: { CasItem },
  name: "TravelRule",
  data() {
    return {
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [],
      citys:[]
    };
  },
  methods:{
        //事件回调
        getgoCity(data){
            this.citys.push(data)
        },
        getonCity(data){
            this.citys.push(data)
        },
        gotoSpringView(){
            //如果都选择了城市
            if(this.citys.length === 2){
                //编程式路由导航，跳转，传递params参数
                this.$router.push({ name:"SpringView",params:{citys:this.citys}})
            }else{
                this.$notify({ type: 'danger', message: '请选择城市' });
            }
        }
    },
  mounted() {
        api.springTravel({
            key: "171e165a7d991c5f6ecd5194c54778ef",
        }).then((res) => {
            console.log('place',res.data)
            //res.data.result
            var currentAll = [];
            if (res.status === 200) {
                for (var i = 0; i < res.data.result.length; i++) {
                    //arr城市对象数组
                    var arr = [];
                    for (var j = 0; j < res.data.result[i].citys.length; j++) {
                        var temp2 = {
                            text: res.data.result[i].citys[j].city,
                            value: res.data.result[i].citys[j].city_id,
                        };
                        arr.push(temp2);
                    }
                    //temp1 省市 children属性为arr对象
                    var temp1 = {
                        text: res.data.result[i].province,
                        value: res.data.result[i].province_id,
                        children: arr,
                    };
                    currentAll.push(temp1);
                }
                this.options = currentAll;
            }
        });
    },
};
</script>

<style scoped>
.spring {
    width: 100%;
    background: #fff;
    padding: 10px;
    box-sizing: border-box;
}

.spring .title {
    font-size: 0.16rem;
    margin: 0 0 0.08rem 0.16rem;
}
</style>