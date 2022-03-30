<template>
    <div class="info">
        <p class="title">
            <i></i>
            新闻信息
        </p>
        <div class="content">
            <h2>国内状态:</h2>
            <p>累计确诊数量:{{ covid19Info.confirmedCount }}</p>
            <p>确诊新增数量:{{ covid19Info.confirmedIncr }}</p>
            <p>当前确诊数量:{{ covid19Info.currentConfirmedCount }}</p>
            <p>当前确诊新增数量:{{ covid19Info.currentConfirmedIncr }}</p>
            <h2>全球状态:</h2>
            <p>累计确诊数量:{{ covid19Info.globalStatistics.confirmedCount }}</p>
            <p>确诊新增数量:{{ covid19Info.globalStatistics.confirmedIncr }}</p>
            <p>累计治愈数量:{{ covid19Info.globalStatistics.curedCount }}</p>
            <p>昨日确诊新增数量:{{ covid19Info.globalStatistics.yesterdayConfirmedCountIncr }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'CovidInfo',
    data() {
        return {
           
        }
    },
    props:['covid19Info'],
};
</script>

<style scoped>
.info {
    padding: 0.16rem;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
}
.title {
    font-size: 0.17rem;
}

.title i {
    display: inline-block;
    width: 0.04rem;
    height: 0.16rem;
    margin-right: 0.03rem;
    vertical-align: middle;
    background: #4169e2;
}
.content {
    padding: 0.06rem 0.16rem;
}

.content p {
    font-size: 13px;
    margin: 5px 0;
}
</style>