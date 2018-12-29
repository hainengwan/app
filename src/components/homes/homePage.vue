<template>
    <div class="home_page">
        <div class="home_page_header"></div>
        <div class="home_menu">
            <van-row type="flex" justify="center" v-for="(item,index) in datas" :key="index">
                <van-col span="6" v-for="(item1,index1) in item.menu" :key="index1" >
                    <div class="img_box"><img :src="item1.bgc" alt="" @click="handeClick(item1)"></div>
                    <span>{{item1.name}}</span>
                </van-col>
            </van-row>
        </div>
        <div class="homepage_bottom">
            <div class="homepage_bottom_header">统计分析</div>
            <div class="homepage_bottom_title">
                <van-row type="flex" justify="center">
                    <van-col span="6">排名</van-col>
                    <van-col span="6">区域</van-col>
                    <van-col span="6">TSD</van-col>
                    <van-col span="6">超标数</van-col>
                    <van-col span="6">离线数</van-col>
                </van-row>
            </div>
            <div class="homepage_bottom_contant">
                <van-row type="flex" justify="center" v-for="(item,index) in rankList" :key="index">
                    <van-col span="6">{{item.ranking}}</van-col>
                    <van-col span="6">{{item.regionName}}</van-col>
                    <van-col span="6">{{item.tsd}}</van-col>
                    <van-col span="6">{{item.overproof}}</van-col>
                    <van-col span="6">{{item.offLines}}</van-col>
                </van-row>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        handlePost
    } from '../../views/base.js'
    export default {
        name: '',

        created() {
            this.getRankList()
        },

        data() {
            return {
                baseUrl: process.env.BASE_URL,
                datas: [{
                        menu: [{
                                name: '实时数据',
                                bgc: 'static/no1.png',
                                url:'#'
                            },
                            {
                                name: '报警提示',
                                bgc: 'static/no2.png',
                                url:'#'
                            },
                            {
                                name: '实时地图',
                                bgc: 'static/no3.png',
                                url:'/Hello/AirMap'
                            },
                            {
                                name: '实时视频',
                                bgc: 'static/no4.png',
                                url:'/Hello/PlayVideo'
                            }
                        ]
                    },
                    {
                        menu: [{
                                name: '督查巡检',
                                bgc: 'static/no5.png',
                                url:'#'
                            },
                            {
                                name: '工地管理',
                                bgc: 'static/no6.png',
                                url:'#'
                            },
                            {
                                name: '历史数据',
                                bgc: 'static/no7.png',
                                url:'#'
                            },
                            {
                                name: '扬尘统计',
                                bgc: 'static/no8.png',
                                url:'#'
                            }
                        ]


                    }
                ],
                rankList: null

            }
        },

        methods: {
            getRankList() {
                const toast = this.$toast.loading({
                    duration: 0, // 持续展示 toast
                    forbidClick: true, // 禁用背景点击
                    loadingType: 'spinner',
                    mask: true,
                    message: '获取数据中...'
                })
                this.$http.post('/api/seller').then(res => {
                    this.$toast.clear()
                    if (res.data.success) {
                        this.rankList = res.data.data.rankList
                    }
                    this.$toast('获取成功')
                }).catch(err => {
                    this.$toast('获取失败')
                })
            },
            handeClick(item) {
                console.log(item)
                this.$router.push({
                    path: item.url,
                    query: {
                        // title: title
                    },
                    // meta:{
                    //     title:item.name,
                    //     isShow:true
                    // }
                })
            }
        }
    }
</script>

<style lang='less'>
    .home_page_header {
        width: 100%;
        height: 191px;
        // background-color: red;
        background: url(../../assets/homebgc.jpg) no-repeat center center;
        background-size: cover;
    }

    .home_menu {
        height: 183px;
        width: 100%;
        padding: 13px 0;

        .van-row {
            height: 80px;
            font-size: 15px;
            text-align: center;
            font-weight: 600;
            line-height: 30px;
            padding: 7px 0;

            .img_box {
                height: 52px;

                img {
                    width: 52px;
                    height: 52px;
                    margin: 0 auto;
                    display: block;
                    border-radius: 50%;
                    // background-color: red
                }
            }
        }
    }

    .homepage_bottom {
        padding: 0 4px;
        font-size: 16px;

        .homepage_bottom_header {
            height: 16px;
            padding: 11px;
            line-height: 16px;
            font-weight: 600;
        }

        .homepage_bottom_title,
            {
            text-align: center;
            height: 40px;
            background-color: #4aa2e2;
            line-height: 40px;
            border-radius: 5px;
            color: #fff;
            // font-weight: 600;
        }

        .homepage_bottom_contant {
            text-align: center;
            line-height: 40px;
        }
    }
</style>