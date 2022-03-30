<template>
    <div>
        <ul>
            <li v-for="(item,index) in msg" :key="index">{{item}}</li><br>
        </ul>
    </div>
</template>

<script>
export default {
    name:'MidArea',
    mounted() {
        console.log(this.$route)
    },
    data(){
        return{
            msg:this.$route.query.MidMsg
        }
    }
}
</script>

<style scoped>
    li{
        display: block;
        margin: 2px;
        text-align: center;
        border: 1px orange solid;
    }
</style>