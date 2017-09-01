<template>
    <div class="signin-content" v-show='counts'>
        <div class="close-container"><span @click="auto()">X</span></div>
        <div class="s-title">平安好医生手机快速登录</div>
        <div class="s-content">
            <div class="s-phone">
                <input type="tel" placeholder="请输入手机号">
            </div>
            <div class="s-number">
                <input type="tel" placeholder="输入验证码">
                <div class="clickable">获取验证码</div>
            </div>
            <div class="clickables">
                登录
            </div>
            <div class="s-desc">
                商品由平安集团旗下平安好医生提供
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:"tanchu",
        data(){
            return {
                counts:this.$store.state.count
            }
        },
        methods:{
            auto(){
                this.counts=false
               console.log(this.$store.state.count)
            }
          
           
        }
    }
    
</script>
<style scope lang='less'>
    .signin-content{
        position: fixed;
        width: 90%;
        background-color: #fff;
        border-radius: 4px;
        left: 50%;
        top: 50%;
        margin-left: -45%;
        margin-top: -45%;
        .close-container{
            position: relative;
            height: 30px;
            line-height: 30px;
            span{
                width: 15px;
                height: 15px;
                line-height: 15px;
                position: absolute;
                right: 15px;
                top: 15px;
             }
        }
        .s-title{
            font-size: 18px;
            text-align: center;
            color: #333;
            margin: 10px 0;
        }
        .s-content{
            width: 80%;
            text-align: center;
            padding: 15px 20px 20px;
            margin: auto;
            font-size: .9rem;
            .s-phone{
                border: 1px solid #e0e0e0;
                border-radius: 4px;
                padding: 5px 15px;
                margin-bottom: 15px;
                width: 100%;
                height: 45px;
                line-height: 45px;
                box-sizing: border-box;
                input{
                    width: 100%;
                    display: block;
                    color: #333;
                    box-sizing: border-box;
                    height: 104%;
                    border:none;
                    outline:none;
                }
            }
            .s-number{
                width: 100%;
                height: 45px;
                line-height: 45px;
                box-sizing: border-box;
                border: 1px solid #e0e0e0;
                border-radius: 4px;
                padding: 0 15px;
                input{
                    width: 50%;
                    display: block;
                    color: #333;
                    box-sizing: border-box;
                    margin-right: 15px;
                    border: 0;
                    border-radius: 0;
                    border-right: 1px solid #e0e0e0;
                    float:left;
                    border:none;
                   height: 100%;
                   outline:none;
                }
                .clickable{
                    font-size:.16rem;
                    float:right;
                    color: rgb(153, 153, 153);
                }
            }
            .clickables{
                display: inline-block;
                width: 100%;
                height: 45px;
                font-size:.16rem;
                line-height: 45px;
                background-color: #ff4500;
                margin: 15px auto 12px;
                border-radius: 4px;
                color: rgb(241, 187, 170);
            }
            .s-desc{
                font-size:.12rem;
            }
        }
    }
</style>