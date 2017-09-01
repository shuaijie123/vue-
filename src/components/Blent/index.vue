<template>
    <div class="boxs">
       <ul class="uls">
          <li v-for="item in btuent">
              
              <div class="lefts">
                <img src="https://jkcdn.pajk.com.cn/image/T1XZYsBXEn1RCvBVdK?img=/tf,q_70" alt="">
              </div>
              <div class="rights">
                  <p class="drugname">{{item.name}}</p>
                  <p class="manus">{{item.pharmacyName}}</p>
                  <div class="tags">{{item.promotionTags[0]}}</div>
              </div>
              <div class="price-row">
                  <div class="price"><span>￥ {{item.price}}</span></div>
                  <div class="old-price"><s>￥ {{item.directPrice}}</s></div>
                  <div class="salesVolume">销售{{item.salesVolume}}件</div>
              </div>
          </li>
       </ul>
    </div>
</template>
<script>
    import $ from 'zepto'
    
    export default {
        name:"blen",
        props:["btuent"],
        data(){
            return{
               
            }
        },
        methods:{

        }
    }
</script>
<style scoped lang='less'>
    .uls{
        clear: both;
        li{
            height: 1.1rem;
            border-bottom:1px solid #ccc;
            .lefts{
                margin: 8px;
                height: 80px;
                width: 80px;
                position: relative;
                float: left;
                img{
                    width: 100%;
                }
            }
            .rights{
                .drugname{
                  padding-top: .17rem;
                  font-size:.14rem;
                }
                .manus{
                    padding-top: .02rem;
                    color: #bdbdbd;
                    font-size: 12px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .tags{
                    margin-top: .04rem;
                    display: inline-block;
                    font-size: 10px;
                    margin-right: 5px;
                    margin-bottom: 5px;
                    padding: 2px;
                    line-height: 12px;
                    height: 14px;
                    color: #fff;
                    background-color: #ff6f00;
                    border-radius: 2px;
                }
            }
            .price-row{
                .price{
                    float:left;
                    color: #ff4500;
                }
                .old-price{
                    float:left;
                    text-decoration: line-through;
                    padding: 5px 0 0 5px;
                    color: #bdbdbd;
                    float: left;
                    font-size:.12rem;
                }
                .salesVolume{
                    float:right;
                    display: inline-block;
                    color: #999;
                    font-size: 12px;
                   padding-top: .04rem;
                   padding-right: .2rem;
                }

            }   
        }
    }
</style>