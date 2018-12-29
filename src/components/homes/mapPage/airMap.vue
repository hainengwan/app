<template>
    <div class="map" id="map"></div>
</template>

<script>
    export default {
        name: 'airMap',

        created() {},

        data() {
            return {
                map:null
            }
        },

        methods: {
            drawmap() {
                const map = new BMap.Map("map");
                map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
                map.addControl(new BMap.MapTypeControl())
                map.enableScrollWheelZoom(); //启用滚轮放大缩小，默认禁用
                map.enableContinuousZoom(); //启用地图惯性拖拽，默认禁用
                map.disableDoubleClickZoom() //禁止双击放大
                this.map = map
            }
        },
        mounted() {
            this.drawmap()
        },
    }
</script>

<style lang='less'>
    .map {
        width: 100%;
        height:677px ;
    }
</style>