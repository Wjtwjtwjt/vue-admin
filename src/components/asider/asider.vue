<template>
     <el-aside width="200px" class="aside">
        <el-scrollbar wrapClass="scrollbar-wrapper" style="height:100%;">
          <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo aside-menu"
            @open="handleOpen"
            @close="handleClose"
            background-color="#393d49"
            text-color="#fff"
            router
            unique-opened 
          >
            <el-submenu index="/set">
              <template slot="title">
                <span>首页</span>
              </template>
              <el-menu-item index="/system">系统首页</el-menu-item>
            </el-submenu>
            <el-submenu index="/">
              <template slot="title">
                <span>系统设置</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/setarg">参数设置</el-menu-item>
                <el-menu-item index="2-2">协议类型管理</el-menu-item>
                <el-menu-item index="2-3">协议管理</el-menu-item>
                <el-menu-item index="2-4">公告管理</el-menu-item>
                <el-menu-item index="2-5">客服设置</el-menu-item>
                <el-menu-item index="2-6">短信设置</el-menu-item>
                <el-menu-item index="2-7">管理员管理</el-menu-item>
                <el-menu-item index="2-8">权限管理</el-menu-item>
                <el-menu-item index="2-9">管理员操作日志</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <span>合约管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">合约列表</el-menu-item>
                <el-menu-item index="3-2">合约分组列表</el-menu-item>
                <el-menu-item index="3-3">交易所管理</el-menu-item>
                <el-menu-item index="3-4">币种管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1">用户列表</el-menu-item>
                <el-menu-item index="4-2">实名认证</el-menu-item>
                <el-menu-item index="4-3">用户事件管理</el-menu-item>
                <el-menu-item index="4-4">意见反馈管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <span>代理管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="5-1">代理列表</el-menu-item>
                <el-menu-item index="5-2">客户列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <span>交易管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="6-1">持仓列表</el-menu-item>
                <el-menu-item index="6-2">手动平仓报价审核列表</el-menu-item>
                <el-menu-item index="6-3">成交历史</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">
                <span>资金管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="7-1">后台入金记录</el-menu-item>
                <el-menu-item index="7-2">第三方入金记录</el-menu-item>
                <el-menu-item index="7-3">出金审核</el-menu-item>
                <el-menu-item index="7-4">出金记录</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="8">
              <template slot="title">
                <span>营销管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="8-1">资讯管理</el-menu-item>
                <el-menu-item index="8-2">Banner管理</el-menu-item>
                <el-menu-item index="8-3">品牌管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="9">
              <template slot="title">
                <span>其他设置</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="9-1">新手指引</el-menu-item>
                <el-menu-item index="9-2">银行卡管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-scrollbar>
      </el-aside>   
</template>
<script>
// var 
export default {
  name: "AppAsider",
  data() {
    return {

    };
  },
    methods: {
    handleOpen (key, keyPath) {
    //   console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      //   console.log(key, keyPath)
    }
  }
}
</script>
<style>

</style>