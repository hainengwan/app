<template>
    <div class="hello">
        <van-nav-bar :title="$route.meta.title" :fixed="true" @click-left='goBack'>
            <van-icon name="wap-nav" slot="right" size="2em" color="#fff"/>
            <span slot="left" v-show="$route.meta.show">返回</span>
        </van-nav-bar>
        <div class="view_box">
            <router-view />
        </div>
    </div>
</template>

<script>
    export default {
        name: '',

        created() {},

        data() {
            return {}
        },

        methods: {
            goBack(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang='less'>
    .hello {
        width: 100%;

        .van-nav-bar {
            background-color: #4ba2e2;
            color: #fff;
            height: 45px;

            .van-nav-bar__text {
                color: #fff
            }
            &:after {
                border: 0
            }
        }

        .view_box {
            margin: 45px 0 0 0;
        }
    }
</style>