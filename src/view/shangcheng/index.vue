<template>
    <div>
       <HeadBar></HeadBar>
      
        <div class="bigbox">
            <div class="banners">
                 <swiper ref="mySwiper">
                    <!-- slides -->
                    <swiper-slide v-for="item in Postent.banner"><img :src="item" alt=""></swiper-slide>
                </swiper>
            </div>
            <p class="jia"><img :src="Postent.jia" alt=""></p>

            <div class="nav">
                <ul class="uls">
                    <li v-for="item in Postent.Nav" @click="increment(false)">
                        <img :src="item.url" alt="">
                        <div>
                            {{item.title}}
                        </div>
                    </li>
                </ul>
            </div>

            <div class="top-line">
                <div class="left">
                    头条
                </div>
                <div class="right">
                    <div class="clickable">
                        {{Postent.tou}}
                    </div>
                </div>
            </div>
            
            <div class="box">
                <div class="title-div">
                    今日剁手价
                </div> 
                <div class="times">
                    <span><span>{{Postent.time}}</span></span>
                </div> 
                <span class="gengduo">
                    更多》
                </span>
            </div>

            <!--砍手价-->

            <div class="xents">
                <div class="xaotu">
                    <ul class="uls1">
                        <li v-for="item in cuthandent.dents">
                            <div>
                                <img :src="item.url" alt="">
                            </div>
                            <h2>{{item.title}}</h2>
                            <h3>￥:{{item.price}}</h3>
                            <s>￥:{{item.price}}</s>
                        </li>
                    </ul>
                </div>
            </div>


            <div class="titles">
                <h4>常备用药</h4>
                <span>更多》</span>
            </div>
            <div class="bieyao">
                <div v-for="item in Postent.beiyao" class="bieyao-lis">
                    <div class="lefts">
                        <h2>{{item.title}}</h2>
                        <p>{{item.subTile}}</p>
                    </div>
                    <div class="rights">
                        <img :src="item.url" alt="">
                    </div>
                </div>
            </div>

            <div class="titles">
                <h4>美妆个户</h4>
                <span>更多》</span>
            </div>
            <div class="bieyao">
                <div v-for="item in Postent.yiliaos" class="bieyao-lis">
                    <div class="lefts">
                        <h2>{{item.title}}</h2>
                        <p>{{item.subTile}}</p>
                    </div>
                    <div class="rights">
                        <img :src="item.url" alt="">
                    </div>
                </div>
            </div>

            <div class="titles">
                <h4>健康电器</h4>
                <span>更多》</span>
            </div>
            <div class="bieyao">
                <div v-for="item in Postent.yiliaos" class="bieyao-lis">
                    <div class="lefts">
                        <h2>{{item.title}}</h2>
                        <p>{{item.subTile}}</p>
                    </div>
                    <div class="rights">
                        <img :src="item.url" alt="">
                    </div>
                </div>
            </div>

        </div>
        <Tanchu></Tanchu>
        <FooterBar></FooterBar>
    </div>
    
</template>
<script>
    import HeadBar from "@/components/HeadBar"
    import FooterBar from "@/components/FooterBar"
    import Tanchu from "@/components/Tanchu"
    import $ from "zepto"
    export default {
        name: 'My',
        methods:{
             increment(item) {
                this.$store.dispatch('increments',item)
                console.log(this.$store)
             }
        },

        data() {
            return {
                Postent: {
                    modules: "",
                    banner: "",
                    jia: "",
                    Nav: "",
                    tou: "",
                    tiem: "",
                    beiyao: "",
                    yiliaos:""
                },
                cuthandent: {
                    cuthand: "",
                    bents: ""
                },
                iscrollConf: {
                    mouseWheel: true,
                    vScrollbar: true,
                    click: true,
                    preventDefault: true,
                    tap: true,
                    bounce: false,
                    disableTouch: true
                }
            }
        },
        components: {
            FooterBar,
            HeadBar,
            Tanchu
        },
        created() {

            let that = this;


            this.$axios.get('/shoppmll').then(function(res) {
                var data = res.data.data[0]

                console.log(data)



                that.Postent.modules = data.modules

                console.log(data.modules)

                var arr = []
                for (var i = 0; i < data.modules[0].sections.length; i++) {
                    var str = ""
                    var img = JSON.parse(data.modules[0].sections[i].content).img.substring(0, 18)
                    str = "https://jkcdn.pajk.com.cn/image/" + img + "?img=/tf,q_70"
                    arr.push(str)
                }
                that.Postent.banner = arr


                that.Postent.jia = "https://jkcdn.pajk.com.cn/image/" + JSON.parse(that.Postent.modules[1].sections[0].content).img + "?img=/tf,q_70"



                var arr1 = []
                for (var i = 0; i < data.modules[2].sections.length; i++) {
                    var str = ""
                    var str1 = {}
                    var imgs = JSON.parse(data.modules[2].sections[i].content).img.substring(0, 18)
                    str = "https://jkcdn.pajk.com.cn/image/" + imgs + "?img=/tf,q_70"

                    str1.url = str
                    str1.title = JSON.parse(data.modules[2].sections[i].content).title
                    arr1.push(str1)
                }
                that.Postent.Nav = arr1
                that.Postent.tou = JSON.parse(that.Postent.modules[3].sections[0].content).title
                that.Postent.time = new Date()




                // 剁手价
                that.cuthandent.cuthand = data.cuthand[0].sections
                var arr2 = []

                for (var i = 0; i < that.cuthandent.cuthand.length; i++) {
                    var contents = JSON.parse(that.cuthandent.cuthand[i].content)
                    var imgs = JSON.parse(contents.content).img
                    var str1 = {}
                    str = "https://jkcdn.pajk.com.cn/image/" + imgs + "?img=/tf,q_70"
                    str1.url = str
                    str1.title = contents.title
                    str1.price = contents.price
                    arr2.push(str1)
                }
                that.cuthandent.dents = arr2


                //常备用药
                var arr3 = []
                for (var i = 1; i < data.modules[5].sections.length; i++) {
                    var str = ""
                    var str1 = {}
                    var imgs = JSON.parse(data.modules[5].sections[i].content).img
                    str = "https://jkcdn.pajk.com.cn/image/" + imgs + "?img=/tf,q_70"
                    str1.url = str
                    str1.title = JSON.parse(data.modules[5].sections[i].content).title
                    str1.subTile = JSON.parse(data.modules[5].sections[i].content).subTitle

                    arr3.push(str1)
                }

                that.Postent.beiyao = arr3

                //美妆个户
                var arr4 = []
                for (var i = 1; i < data.modules[6].sections.length; i++) {
                    var str = ""
                    var str1 = {}
                    var imgs = JSON.parse(data.modules[6].sections[i].content).img
                    str = "https://jkcdn.pajk.com.cn/image/" + imgs + "?img=/tf,q_70"
                    str1.url = str
                    str1.title = JSON.parse(data.modules[6].sections[i].content).title
                    str1.subTile = JSON.parse(data.modules[6].sections[i].content).subTitle

                    arr4.push(str1)
                }

                that.Postent.yiliaos = arr4

                //健康器械
                var arr5 = []
                for (var i = 1; i < data.modules[7].sections.length; i++) {
                    var str = ""
                    var str1 = {}
                    var imgs = JSON.parse(data.modules[7].sections[i].content).img
                    str = "https://jkcdn.pajk.com.cn/image/" + imgs + "?img=/tf,q_70"
                    str1.url = str
                    str1.title = JSON.parse(data.modules[7].sections[i].content).title
                    str1.subTile = JSON.parse(data.modules[7].sections[i].content).subTitle

                    arr5.push(str1)
                }

                that.Postent.yiliaos = arr4

            })





        },

    }
</script>
<style scoped lang="less">
    .bigbox {
        margin-bottom: .5rem;
    }
    
    .banners,
    .jia {
        img {
            width: 100%;
        }
    }
    
    .nav {
        height: 1.6rem;
    }
    
    .uls {
        padding: .1rem 0;
        li {
            float: left;
            width: 20%;
            text-align: center;
            margin-top: .1rem;
            img {
                width: 50%;
            }
        }
    }
    
    .top-line {
        clear: both;
        height: .4rem;
        display: flex;
        border-top: 1px solid #ccc;
        .left {
            height: 15px;
            width: 25px;
            font-size: 11px;
            text-align: center;
            line-height: 15px;
            color: #ff4500;
            border: 1px solid #ff4500;
            border-radius: 2px;
            margin-top: .1rem;
            margin-left: .1rem;
        }
        .right {
            margin-left: 9px;
            height: 34px;
            overflow: hidden;
            .clickable {
                align-items: center!important;
                height: 34px;
                line-height: 34px;
                font-size: 14px;
                color: #666;
            }
        }
    }
    
    .box {
        height: .5rem;
        .title-div {
            display: inline-block;
            margin: 12px 5px 12px 15px;
            width: 85px;
            height: 20px;
            float: left;
        }
        .times {
            float: left;
            line-height: .4rem;
        }
        .gengduo {
            float: right;
            padding-right: .1rem;
            line-height: .4rem;
        }
    }
    
    .xents {
        width: 4rem;
        .xaotu {
            overflow-x: auto;
            overflow-y: hidden;
            padding-left: 5px;
            width: 100%;
            .uls1 {
                display: flex;
                width: 3610px;
                li {
                    flex: 1;
                    div {
                        img {
                            width: 1.4rem;
                        }
                    }
                    h2 {
                        width: 1.4rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        -o-text-overflow: ellipsis;
                        -webkit-text-overflow: ellipsis;
                        -moz-text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    h3 {
                        color: #ff4500;
                        font-size: 14px;
                        padding: .05rem 0;
                    }
                }
            }
        }
    }
    
    .titles {
        clear: both;
        height: .4rem;
        line-height: .4rem;
        border: 1px solid #ccc;
        margin-top: .2rem;
        h4 {
            float: left;
            margin-left: 15px;
            font-size: 15px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            max-height: 44px;
            width: 200px;
        }
        span {
            color: rgb(153, 153, 153);
            float: right;
            padding-right: 10px;
            font-size: 14px;
            color: #999;
            width: 70px;
            text-align: right;
        }
    }
    
    .bieyao {
        border-bottom: 1px solid #ccc;
        height: 2.5rem;
        .bieyao-lis {
            float: left;
            width: 24.5%;
            &:nth-child(1) {
                width: 49%;
                .lefts {
                    float: left;
                    padding-left: .1rem;
                    h2 {
                        color: rgb(210, 1, 43);
                    }
                }
            }
            &:nth-child(2) {
                .lefts {
                    float: left;
                    padding-left: .1rem;
                    h2 {
                        color: rgb(45, 136, 219);
                    }
                }
                width: 50%;
            }
            .lefts {
                text-align: center;
                h2 {
                    padding-top: .2rem;
                    font-size: 16px;
                    font-weight: 700;
                    color: rgb(33, 33, 33);
                }
                p {
                    padding-top: .05rem;
                    font-size: 11px;
                    color: #999;
                }
            }
            .rights {
                float: right;
                img {
                    width: 100%;
                    position: relative;
                    width: 79px;
                    height: 99px;
                    margin-left: auto;
                    margin-right: auto;
                }
            }
        }
    }
</style>