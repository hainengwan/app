<template>
    <div class="login">
        <div class="login_bgc">北京石景山扬尘检测平台</div>
        <van-cell-group>
            <van-field v-model="username" label="用户名：" placeholder="请输入用户名" />
            <van-field v-model="password" label="密码：" placeholder="请输入手机号" />
        </van-cell-group>
        <van-button type="primary" @click="goMap">登录</van-button>
    </div>
</template>

<script>
    // console.log(this)

    export default {
        name: '',

        created() {},

        data() {
            return {
                username: '',
                password: ''
            }
        },

        methods: {

            goMap() {
                const toast = this.$toast.loading({
                    duration: 0, // 持续展示 toast
                    forbidClick: true, // 禁用背景点击
                    loadingType: 'spinner',
                    mask:true,
                    message: '正在登陆中...'
                })
                let _this = this
                let qs = require('qs')
                this.$http.post('/user!login', qs.stringify({
                    userName: _this.username,
                    userPwd: _this.password
                })).then(res => {
                    console.log(res)
                    if (res.data.success) {
                        this.$http.get('/user!getUser').then(res => {
                            console.log(res)
                            res.data.loginDate = new Date().getTime()
                            localStorage.setItem('userInfo', JSON.stringify(res.data));
                            this.$store.state.regionId = res.data.osRegionalId
                            this.$store.state.regionName = res.data.os.name
                            this.$store.state.userInfo = res.data
                            this.$router.push('/')
                            this.$toast.clear()
                            this.$toast(res.data.msg)
                        }).catch(err => {
                            this.$toast.clear()
                            this.$toast(res.data.msg)
                        })
                    } else {
                        this.$toast.clear()
                        this.$toast(res.data.msg)
                    }
                }).catch(err => {
                    this.$toast('获取失败')
                })

            },
        }
    }
</script>

<style lang='less'>
    .login {
        .login_bgc {
            height: 300px;
            background: url('../../assets/loginbgc.png') center center no-repeat;
            background-size: cover;
            text-align: center;
            line-height: 300px;
            color: #fff;
            font-size: 16px;
        
        }
        .van-cell-group {
            // margin-top: 300px;
            .van-cell {
                height: 75px;
                line-height: 55px;

                .van-cell__title {
                    background-color: #f2f2fc;
                }

                .van-cell__value {
                    background-color: #f2f2fc;
                }

            }
        }

        .van-button {
            width: 350px;
            background-color: #54b8da;
            margin-left: 12.5px;
        }

        .van-button--primary {
            border-color: #54b8da

        }
    }
</style>