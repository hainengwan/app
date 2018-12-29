<template>
    <div class="work_order">
        <van-tabs v-model="active" sticky :line-height="Height" color='#4ba2e2'>
            <van-tab title="日报表">
                <finished></finished>
            </van-tab>
            <van-tab title="月报表">
                <unfinished></unfinished>
            </van-tab>
            <van-tab title="年报表">
                <unfinished></unfinished>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import finished from './finished'
import unfinished from './unfinished'
    export default {
        name: '',
        components:{
            finished,
            unfinished
        },

        created() {},

        data() {
            return {
                active:0,
                Height:0,
            }
        },

        methods: {
        }
    }
</script>

<style lang='less'>
.work_order {
    .van-tabs__wrap {
        border-bottom: 18px solid #f1eff6;
    }
    .van-tabs__content{
        margin-top: 18px;
    }
    .van-tab--active {
        color:#4ba2e2;
    }
}
    
</style>