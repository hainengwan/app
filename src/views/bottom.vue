<template>
  <div id="bottom">
    <van-tabbar v-model="active">
        <van-tabbar-item icon="wap-home" to="/hello/home/homePage">首页</van-tabbar-item>
        <van-tabbar-item icon="records" to="/hello/home/workOrder">转运单</van-tabbar-item>
        <!-- <van-tabbar-item icon="wap-nav" to="/airHome/realRanking?active=2">排名</van-tabbar-item>
        <van-tabbar-item icon="records" to="/airHome/homeBox/home?active=3">环保业务</van-tabbar-item> -->
        <van-tabbar-item icon="contact" to="/hello/home/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
    name:'bottom',
    created(){
        
    },
    data(){
        return {
            active:0
        }
    },
    methods:{
        toggleActive(val){
            this.active = val
        }
    },

     watch: {
      $route(to, from) {
          if(to.query.active){
              this.active =Number(to.query.active)
          }
      }
    },
}
</script>


<style lang="less">
#bottom{
  width:100%;
  bottom: 0;
 .van-tabbar--fixed{
     height: 45px;
    background-color:#e6f6fa!important;
    color: #a5a7a7;
  &:after{
      width: 0;
  }
 }
}
</style>
