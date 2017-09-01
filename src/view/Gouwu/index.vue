<template>
    <div>
        <div>
            <div class="head-top">
                <a href="###" class="left-bar" @click='goback()'></a>
                <h2  class="title">购物车</h2>
                <div class="left-bar"></div>
            </div>
        </div>

    </div>
    
</template>
<script>
   
    export default {
        name: 'gouwu',
        components: {
           
        },
         methods:{
            goback() {
                this.$router.go(-1)
            }
        }
    }
</script>
<style scope lang='less'>
    .head-top {
        width: 100%;
        height: 0.4rem;
        padding: 0 5%;
        box-sizing: border-box;
        background: #f8f9fb;
        display: flex;
        position: fixed;
        .left-bar {
            flex: 1;
            text-align: center;
            line-height: 0.4rem;
        }
        .title {
            flex: 6;
            text-align: center;
            line-height: 0.4rem;
            font-size: 0.14rem;
        }
        a:after {
            content: " ";
            display: inline-block;
            -webkit-transform: rotate(-45deg);
            transform: rotate(-135deg);
            height: 10px;
            width: 10px;
            border-width: 2px 2px 0 0;
            border-color: #999;
            border-style: solid;
            position: relative;
            top: 0;
            right: 0;
        }
    }
</style>