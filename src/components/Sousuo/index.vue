<template>
   <div>
       <div class="head-top">
        <a href="###" class="left-bar" @click='goback()'></a>
         <div class="header-search" @click="gentent(11)">
            <div class='search-frame'>
                <span>8月清凉节</span>
            </div> 
        </div>
        </div>


        <div class="Navs" v-show="shows">
            <h1>热门搜索</h1>
            <ul class="uls">
                <li v-for="(item,ind) in listNav" @click="autent(ind)" :class="{active:ind==indeColor}"><span>{{item.hotword}}</span></li>
            </ul>
        </div>
        
       <div class="btent">
            <Blent :btuent="btuent"></Blent>
       </div>

   </div>
</template>
<script>

  import Blent from "@/components/Blent"

    export default {
        name:"Sousuo",
        data(){
            return {
                listNav:"",
                indeColor:0,
                btuent:"",
                shows:false
            }
        },
        created() {
            let that = this;
            this.$axios.get('/dataent').then((res) => {
                that.listNav = res.data.content[0].value
            })
        },
        methods:{
            gentent(i){     
                this.shows=true
            },
            autent(i){
                this.indeColor=i
                this.shows=false
                var that=this
                this.$axios.get("/crent").then((res)=>{
                    that.btuent=res.data.content[0].items
                    console.log(that.btuent)
                })
            },
            goback() {
                this.$router.go(-1)
            }
        },
        components:{
            Blent
        }
    }
</script>
<style scoped lang='less'>
     .head-top {
         z-index: 100;
         overflow: hidden;
        width: 100%;
        height: 0.4rem;
        padding: 0 5%;
        box-sizing: border-box;
        background: #f8f9fb;
        display: flex;
        position: fixed;
        .left-bar {
            
            line-height: 0.4rem;
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
            left:0;
        }
    }
    .header-search {
       width: 80%;
        height: 0.36rem;
        background: #f8f9fb;
         flex:1;
         margin-top: .1rem;
        .search-frame {
            width: 80%;
            height: 0.22rem;
            line-height: 0.22rem;
            border: 1px solid #ccc;
            font-size: 0.13rem;
            text-indent: 0.2rem;
            color: #999;
            background: #fff;
            border-radius: 0.1rem;
            margin: 0 auto;
           
        }
    }


    

    .Navs{
        padding-top: .5rem;
        h1{
            padding-bottom: .1rem;
            padding-left: .2rem;    
        }
        .uls{
            li{
                margin-top: .1rem;
                margin-left: .16rem;
                float:left;
                padding:0 .14rem;
                height: .25rem;
                border:1px solid #ccc;
                border-radius:20px;
                line-height: .25rem;
                &:active{
                    color: #ff6f00;
                    background-color: #fff;
                    border-color: #ff6f00;
                }
            }
        }
    }
    .btent{
      padding-top: .46rem;
    }
</style>