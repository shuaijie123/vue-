<template>
    <div>
        <div class="titles">
            <div>
                <div class="head-top">
                    <a href="###" class="left-bar" @click='goback()'></a>
                    <h2  class="title">我的</h2>
                    <div class="left-bar"></div>
                </div>
            </div>
            <div class="user-info-container">
                <img src="https://jkcdn.pajk.com.cn/image/T1l.YTByJT1RCvBVdK?img=/rs,w_150,h_150/tf,q_70" alt="">
                <div class="num">
                    <div class="number">
                        健康号:28769180200
                    </div>
                </div>
            </div>
        </div>
        <div class="trans-container">
           <div class="mysef">
              <router-link :to="{path:'/xiangqing',query:{id:dizhi}}">
               <p>
                   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzZCNzFCNTk5MzM0MTFFNjhCMDZDRjJGQ0VERUY1MTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzZCNzFCNUE5MzM0MTFFNjhCMDZDRjJGQ0VERUY1MTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNkI3MUI1NzkzMzQxMUU2OEIwNkNGMkZDRURFRjUxNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozNkI3MUI1ODkzMzQxMUU2OEIwNkNGMkZDRURFRjUxNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvBUcOgAAAieSURBVHja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" alt="">
                   <span>我的地址</span>
                </p>
                </router-link>
                <router-link :to="{path:'/xiangqing', query: { id: dingdan}}">
              <p>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTE0MDQxOTk5MkVBMTFFNjhCMDZDRjJGQ0VERUY1MTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTE0MDQxOUE5MkVBMTFFNjhCMDZDRjJGQ0VERUY1MTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MTQwNDE5NzkyRUExMUU2OEIwNkNGMkZDRURFRjUxNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MTQwNDE5ODkyRUExMUU2OEIwNkNGMkZDRURFRjUxNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuiZrQwAAAZ4SURBVHja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" alt="">
                  <span>我的订单</span>
              </p>
              </router-link>
              <router-link :to="{path:'/xiangqing',query:{id:youhui}}">
              <p>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjU0MDU4Njg5MzMzMTFFNjhCMDZDRjJGQ0VERUY1MTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzZCNzFCNTY5MzM0MTFFNjhCMDZDRjJGQ0VERUY1MTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNTQwNTg2NjkzMzMxMUU2OEIwNkNGMkZDRURFRjUxNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNTQwNTg2NzkzMzMxMUU2OEIwNkNGMkZDRURFRjUxNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoReWw0AAAbGSURBVHja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" alt="">
                  <span>我的优惠券</span>
              </p>
            </router-link>
           </div>
        </div> 
    </div>
    
</template>
<script>
    
    export default {
        name: 'My',
        data(){
            return {
                dizhi:{name:"地址列表",nav:["添加地址"]},
                dingdan:{name:"订单列表",nav:["全部","待付款","进行中","已完成"]},
                youhui:{name:"我的优惠券",nav:["可使用","已过期","已使用"]}
            }
        },
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
        padding: 0 2%;
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
            font-size: 0.18rem;
        }
        a:after {
            content: " ";
            display: inline-block;
            -webkit-transform: rotate(-45deg);
            transform: rotate(-135deg);
            height: 12px;
            width: 12px;
            border-width: 2px 2px 0 0;
            border-color: #999;
            border-style: solid;
            position: relative;
            top: 0;
            right: 0;
        }
    }
    .user-info-container{
         padding: 15px;
         padding-top: .5rem;
         background-color: #fff;
        display: flex;
        img{
            width: 50px;
            height: 50px;
            display: block;
            border-radius: 50%;
            margin-right: 10px;
        }
        .num{
            height: .44rem;
            line-height: .44rem;
            -webkit-box-flex: 1;
            flex:1;
            .number{
                color: #999;
                font-size: 14px;
               
            }
        }
    }

    .trans-container{
        background-color: #fff;
        .mysef{
            p{
                padding: 10px 5px;
                margin-left: 10px;
                border-bottom: 1px solid #eee;
                display:flex;
                img{
                    width: 25px;
                    height: 25px;
                    display: block;
                    margin-right: 10px;
                }
                span{
                    flex:1;
                    display: block;
                    line-height: .28rem;
                }
                &:after {
                    content: " ";
                    display: inline-block;
                    -webkit-transform: rotate(-45deg);
                    transform: rotate(-135deg);
                    height: 12px;
                    width: 12px;
                    border-width:0 0 2px 2px;
                    border-color: #999;
                    border-style: solid;
                    position: relative;
                    top: 0;
                    right: 0;
                    margin-top: .1rem;
                    margin-right: .1rem;
                }
            }
            
        }
    }
</style>