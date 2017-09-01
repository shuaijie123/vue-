<template>
    <div>
        <!--<div class="flex-center">
            <div class="title">
                <span class="imgs"><img src="https://yao.jk.cn/images/logo-b1f7fe8c.png" alt=""></span>
               <div class="download-text-small">
                   <h1>平安好医生</h1>
                   77健康节，7.7元无门槛红包抢不停
               </div>
               <div class="download-button">
                   立即下载
               </div>
            </div>
        </div>-->
         <router-link to="/sousuo">
        <header class="header-bar"  v-Affix="0">
         
            <div class="title-layout">
                <div class="topbar-search">
                    <span><img src="../../static/icon/sousuo.png" alt=""></span>
                    <div>
                        8月清凉节
                    </div>
                </div>
            </div>
           
            <div class="topbar-right">
                <span><img src="../../static/icon/dingdan.png" alt=""></span>
                <p>我的订单</p>
            </div>
            
    </header>
    </router-link>
    </div>
</template>
<script>
  
    export default {
        name: 'HeadBar',
        components: {

        }
    }
</script>
<style scoped lang="less">
    .header-bar {
        clear: both;
        height: .48rem;
        width: 100%;
        background-color: #ff6f00;
        display: flex;
        .title-layout {
            flex: 1;
            font-weight: 500;
            -webkit-font-smoothing: antialiased;
            color: #3a3a3a;
            font-size: 17px;
            margin-top: .1rem;
            .topbar-search {
                text-align: left;
                padding-left: 10px;
                margin-left: 15px;
                margin-right: 8px;
                background: #fff;
                border: 1px solid #fff;
                border-radius: 15px;
                height: 28px;
                line-height: 28px;
                font-size: 14px;
                span {
                    float: left;
                    img {
                        padding-top: .03rem;
                        width: .2rem;
                        height: .2rem;
                    }
                }
            }
        }
        .topbar-right {
            color: #fff;
            font-size: 10px;
            line-height: 19px;
            margin-left: 1px;
            font-weight: 400;
            span {
                margin-left: .1rem;
                width: .25rem;
                height: .2rem;
                display: block;
                margin-top: .1rem;
                img {
                    background: #fff;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    
    .flex-center {
        background-color: #333;
        padding: 15PX 15PX 15px 15px;
        color: #fff;
        .title {
            display: flex;
            .imgs {
                width: .4rem;
                height: .4rem;
                display: inline-block;
                float: left;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .download-text-small {
                padding-left: .1rem;
                padding-right: .2rem;
                color: #fff;
                font-size: 12px;
                margin-top: 4px;
                h1 {
                    line-height: .18rem;
                    font-size: .18rem;
                    padding-bottom: .05rem;
                }
            }
            .download-button {
                text-align: center;
                flex: 1;
                background-color: #ff6f00;
                width: 75px;
                height: 30px;
                line-height: 30px;
                margin-top: .1rem;
                border-radius: 4px;
                font-size: 14px;
            }
        }
    }
</style>