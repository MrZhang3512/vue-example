<template>
  <div id="app">
      <el-container class="container">
         <el-header height="56px" class="header">
           <div class="title">
              {{title}}
           </div>
           </el-header>
      <el-container>
        <!-- 左侧导航 -->
         <el-aside width="200px" class="left-aside">
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @select="selectHandler">
                
                <el-menu-item index="1">
                  <i class="el-icon-s-home"></i>
                  <span slot="title">Dashboard</span>
                </el-menu-item>
              
                <el-menu-item index="2">
                  <i class="el-icon-user-solid"></i>
                  <span slot="title">顾客管理</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-menu"></i>
                  <span slot="title">栏目设置</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-mobile"></i>
                  <span slot="title">产品管理</span>
                </el-menu-item>
                <el-menu-item index="5">
                  <i class="el-icon-shopping-cart-full"></i>
                  <span slot="title">订单管理</span>
                </el-menu-item>
              </el-menu>
                  </el-aside>
         <!-- /左侧导航 -->
         <!-- 右侧内容 -->
         <el-main>
           <!-- <Customer/> -->
          <!-- 面包屑组件-->
          <div class="breadcrumb">
            <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
            <el-breadcrumb-item>{{currentViewName}}</el-breadcrumb-item>
          </el-breadcrumb>
          </div>
          <!--  /面包屑组件-->
           <!-- 动态组件 -->
           <component v-bind:is="currentView"></component>
         </el-main>
         <!-- /右侧内容 -->
      </el-container>
</el-container>
  </div>
</template>

<script>
import Customer from './views/Customer'
import Category from './views/Customer'
import Product from './views/Product'
export default {
  name: 'app',
  components: {
        Customer,
        Category,
        Product
  },
  data(){
    return{
      title:"EJ家政服务平台",
      currentView:'Customer',
      currentViewName:'顾客管理'
    }
  },
  methods:{
    selectHandler(index){
   
      switch(index){
        case "1":
        break;
        case "2":
          this.currentView="Customer";
          this.currentViewName="顾客管理"
        break;
        case "3":
          this.currentView="Category";
          this.currentViewName="栏目管理"

        break;
        case "4":
          this.currentView="Product";
          this.currentViewName="产品管理"

        break;
         case "5":
          this.currentView="Produvt"
        break;
      }
    }
  }
}
</script>

<style>
.container{
   position: absolute;
   width: 100%;
   top: 0;
   bottom: 0;
}
.container>.header{
  background: #30619e;
  color: #ffffff;
  line-height: 56px;
}
.container>.title{
  font-size: 18px;
  font-weight:bold; 
}
.container .left-aside{
  border-right: 1px solid #e6e6e6;
}
.breadcrumb{
  margin-bottom: 1em;
}
</style> 
