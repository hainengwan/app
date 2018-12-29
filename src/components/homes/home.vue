<template>
    <div class="home">
        <!-- 头部 -->
        <!-- <van-nav-bar :title="$route.meta.title" :fixed="true" @click-left='goBack'>
            <van-icon name="search" slot="right" />
            <span slot="left" v-show="$route.meta.show">返回</span>
        </van-nav-bar> -->

        <!-- 内容容器 -->
        <div class="view_box">
            <router-view />
        </div>
        
        <!-- 底部 -->
        <bottom></bottom>
    </div>
</template>

<script>
    import bottom from '@/views/bottom'
    export default {
        components: {
            bottom
        },
        name: 'home',

        created() {},

        data() {
            return {}
        },

        methods: {
            
        }
    }
</script>

<style lang='less'>
    .home {
        width: 100%;
        // height: 100vh;
        .van-nav-bar {
            background-color: #4ba2e2;
            color:#fff;
            height: 45px;
            .van-nav-bar__text {
                color:#fff
            }
        }
        #bottom {
            background-origin: 0;
            left: 0;
        }
        .view_box {
            margin: 0 0 45px 0;
        }
    }
</style>