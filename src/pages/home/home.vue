<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple header-l">众富期贷</div>
        </el-col>
       
          <!-- <div class="header-r">
            <ul>
              <li class="show">
                <a href="javascript:;" class="show-a">
                  通知
                  <span class="badge">8</span>
                </a>
                <div class="hide">
                  <div>
                    <a href>
                      平台报价审核
                      <span>[0]</span>
                    </a>
                  </div>
                  <div>
                    <a href>
                      实名认证审核
                      <span>[1]</span>
                    </a>
                  </div>
                  <div>
                    <a href>
                      出金审核
                      <span>[0]</span>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a href="javascript:;" class="show-a">超级管理员</a>
              </li>
              <li>
                <a href="javascript:;" class="show-a">
                  <i class="fa fa-sign-out"></i>
                  退出
                </a>
              </li>
            </ul>
          </div>-->
          <el-col :offset="16" :span="4" class="userinfo">
            <div  class="grid-content bg-purple header-l">
            <el-dropdown trigger="hover">
              <span class="el-dropdown-link userinfo-inner">
                <img src="">
                <!-- {{sysUserName}} -->
                呵呵呵
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的消息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            </div>
          </el-col>
       
      </el-row>
    </el-header>
    <el-container class="container">
      <app-asider></app-asider>
      <!-- <el-aside class="aside" width="200px">
        <el-scrollbar wrapClass="scrollbar-wrapper" style="height:100%;">
          <el-menu
            class="el-menu-vertical-demo aside-menu"
            @open="handleOpen"
            @close="handleClose"
            background-color="#393d49"
            text-color="#fff"
          >
            <el-submenu index="1">
              <template slot="title">
                <span>首页</span>
              </template>
              <el-menu-item index="1-1">系统首页</el-menu-item>
            </el-submenu>
            <el-submenu index="2" style="position:absolute">
              <template slot="title">
                <span>系统设置</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">参数设置</el-menu-item>
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
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-scrollbar>
      </el-aside>-->
      <el-main class="main">
        <el-col :span="24" class="breadcrumb-container">
						<strong class="title">哈哈</strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item >
								哈哈
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import AppAsider from "@/components/asider/asider";
import {removeUserInfo} from '@/assets/js/auth'
export default {
   created () {
    // 动态加载用户的角色对应的权限菜单数据
    // this.loadMenus()
  },
  data() {
    return {
       menuList: []
    };
  },
  components: {
    AppAsider
  },
   methods: {
    logout () {
      this.$confirm('确认退出吗?', '退出提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => { // 点击确认执行 resolve 函数
        // 1. 删除本地存储中的用户登陆信息
        removeUserInfo()

        // 2. 跳转到登陆视图
        this.$router.push({
          name: 'login'
        })

        // 提示用户退出成功
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
      }).catch(() => {
        // 点击取消的处理
      })
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    // async loadMenus () {
    //   // 动态的获取左侧菜单栏数据
    //   const res = await this.$http.get('/menus')
    //   const {data, meta} = res.data
    //   if (meta.status === 200) {
    //     this.menuList = data
    //   }
    // }
  }
}

</script>

<style>

</style>