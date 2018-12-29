<template>
  <div id="app">
    <router-view v-if="isRouterLive"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created() {},
    data() {
      return {
        isRouterLive: true,
      }
    },
    provide() {
      return {
        reload: this.reload
      }
    },
    methods: {
      reload() {
        this.isRouterLive = false;
        this.$nextTick(function () {
          this.isRouterLive = true;
        })
      },
    },
    mounted() {},
  }
</script>

<style lang='less'>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
    // min-height: 100vh;

  }

  .anchorBL {
    display: none;
  }
</style>