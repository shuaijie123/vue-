<template>
    <div>
                <div class="head-top">
                    <a href="###" class="left-bar" @click='goback()'></a>
                    <h2  class="title">{{names}}</h2>
                    <div class="left-bar"></div>
                </div>
           
            <div class="navs">
                <ul class="uls">
                    <li v-for="(item,ind) in navs" :class='{active:ind==indexs}' @click="auto(ind)">{{item}}</li>
                </ul>
            </div>
    </div>
</template>
<script>
    export default {
        name: 'xiangqing',
        data(){
            return {
                names:"",
                navs:"",
                indexs:0
            }
        },
        components: {
           
        },
        methods:{
            goback() {
                this.$router.go(-1)
            },
            auto(i){
                this.indexs=i
            }
        },
         mounted(){
             this.names=this.$route.query.id.name
             this.navs=this.$route.query.id.nav
             console.log(this.$route.query.id)
        }
    }
</script>
<style scope lang='less'>
    .head-top{
        height: .4rem;
        margin-bottom: 20px;
    }
    .navs{
      padding-top: .4rem;
        .uls{
            height: .4rem;
             line-height: .4rem;
            display: block;
           display: flex;
           li{
               display: block;
               flex:1;
               text-align: center;
               
           }
        }
    }
    .active{
        color: #ff4500!important;
        border-bottom: 2px solid #ff4500;
    }
</style>