<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
    import './static/lib/reset.css';
    export default {
        name: 'app',
    }
</script>

<style>
    html {
        font-size: 625%;
    }
    
    body {
        font-size: .14rem;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
    }
</style>