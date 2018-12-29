<template>
    <div class="mine">
        <div class="mine_header">

        </div>
        <van-cell-group>
            <van-cell title="我的消息" is-link to="/" />
            <van-cell title="个人信息" is-link to="/" />
            <van-cell title="修改密码" is-link to="/" />
            <van-cell title="检查更新" is-link to="/" />
            <van-cell title="关于我们" is-link to="/" />
        </van-cell-group>
        <div class="mine_buttom">
            <van-button type="default">退出登录</van-button>
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

        methods: {}
    }
</script>

<style lang='less'>
    .mine {
        background-color: #f1eff6;

        .van-cell-group {
            background-color: #f1eff6;

            .van-cell {
                &:nth-last-child(2),
                &:last-child{
                    margin-top: 9px;
                }
                
            }
        }
        .mine_buttom {
            background-color: #fff;
            margin-top: 9px;
            text-align: center;
            // margin-bottom: 1px;bor
            border-bottom: 1px solid #f1eff6;
            .van-button {
                border: none
            }

        }
    }
</style>