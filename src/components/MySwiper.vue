<template>
  <div class="chart">
    <h3 class="title">全国疫情状态</h3>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for='(item,index) in swiperData' :key="index">
          <img :src="item.image" alt="">
      </swiper-slide>
    </swiper>
    <ul class="navigator">
        <li v-for='(item,index) in swiperData' :key='index'
            class="navigatorItem"
            :class="{active:index === currentIndex}"
            @click="clickHandle(index)"
            >
            {{item.title}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MySwiper",
  data() {
        let that = this;
        return {
            currentIndex: 0,
            swiperData: [
                {
                    image:
                        "https://img1.dxycdn.com/2020/0220/014/3397684583507458039-135.png",
                    title: "新增疑似/新增确诊",
                },
                {
                    image:
                        "https://img1.dxycdn.com/2020/0220/697/3397684611424536901-135.png",
                    title: "现存确诊/现存疑似",
                },
                {
                    image:
                        "https://img1.dxycdn.com/2020/0220/861/3397684624309439853-135.png",
                    title: "死亡/治愈",
                },
                {
                    image:
                        "https://img1.dxycdn.com/2020/0220/168/3397686703073768694-135.png",
                    title: "病死率",
                },
                {
                    image:
                        "https://img1.dxycdn.com/2020/0220/709/3397686724548816431-135.png",
                    title: "治愈率",
                },
            ],
            swiperOptions: {
                autoplay:true,
                on: {
                    //回调函数，swiper从一个slide过渡到另一个slide结束时执行。
                    slideChangeTransitionEnd: function () {
                        //this swiper对象
                        //this.activeIndex; 切换结束时，告诉我现在是第几个slide   
                        that.currentIndex = this.activeIndex;//把swiper上面的当前索引赋值给vc
                    },
                },
            },
        };
    },
  //计算swiper，获取dom
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    clickHandle(index) {
      //手动改变currentIndex
      this.currentIndex = index;
      //跳转到哪一页，速度，回调
      this.swiper.slideTo(index, 1000, false);
      //this.swiper.slideTo(index, 1000, true);
    },
  },
};
</script>

<style scoped>
.line {
  padding: 0 10px;
  width: 100%;
  height: 300px;
}
.chart {
  position: relative;
  background: #fff;
  padding: 0.16rem 0;
}
.chart .title {
  font-size: 0.16rem;
  margin: 0 0 0.08rem 0.16rem;
}
.chart .swiper-pagination {
  position: absolute;
  text-align: center;
  -webkit-transition: 300ms opacity;
  -o-transition: 300ms opacity;
  transition: 300ms opacity;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  z-index: 10;
}
.chart .swiper-pagination-bullet {
  width: calc(20% - 0.02rem);
  text-align: center;
  background: #f7f7f7;
  padding: 0.045rem;
  box-sizing: border-box;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.02rem;
}
.navigator {
  font-size: 0.12rem;
  list-style: none;
  display: flex;
  padding: 0 0.16rem;
  justify-content: center;
  margin: 0.06rem 0 0;
}
.navigatorItem {
  color: #4169e2;
  background: #f1f5ff;
  position: relative;
  width: calc(20% - 0.02rem);
  text-align: center;
  background: #f7f7f7;
  padding: 0.045rem;
  box-sizing: border-box;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.02rem;
  margin-left: 0.025rem;
}
.active {
  color: #4169e2;
  background: #f1f5ff;
  position: relative;
}
</style>