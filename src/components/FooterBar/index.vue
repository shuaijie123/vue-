<template>
   

    <footer class="footer-bar">
    <nav>
    	<router-link to="/shangcheng" active-class="active" class="home"><p><img src="../../static/icon/shangyu.png" alt=""></p>健康商城</router-link>
    	<router-link to="/fenlei" active-class="active" class="classType"><p><img src="../../static/icon/fenlei.png" alt=""></p>分类</router-link>
    	<router-link to="/gouwu" active-class="active" class="shopCar" @click="increments(item)"><p><img src="../../static/icon/gouwu.png" alt=""></p>购物车</router-link>
    	<router-link to="/wode" active-class="active" class="zoom"><p><img src="../../static/icon/wode.png" alt=""></p>我的</router-link>
    </nav>
       
  </footer>

</template>
<script>
   
    export default {
        name: 'FooterBar',
        methods:{
            increments(item) {
                this.$store.dispatch('increments', item)
                console.log(item)
            }
        }
    }
</script>
<style scoped lang="less">
    .footer-bar {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: .5rem;
        background: #fff;
        nav {
            padding: 0.05rem 0;
            display: -webkit-box;
            -webkit-box-pack: center;
            -webkit-box-align: center;
            border: 1px solid #ccc;
            a {
                display: block;
                -webkit-box-flex: 1;
                width: 0px;
                text-align: center;
                color: #999;
                img {
                    width: .25rem;
                    height: .25rem;
                }
            }
        }
    }
</style>