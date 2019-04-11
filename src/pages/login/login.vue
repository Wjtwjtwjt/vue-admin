<template>
  <div class="login-wrap">
    <h5>众富期贷后台管理系统</h5>
    <el-form
      class="login-from"
      label-position="top"
      ref="form"
      :model="userForm"
      label-width="80px"
    >
      <h2 class="heading">用户登陆</h2>
      <el-form-item label="用户名">
        <el-input v-model="userForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="userForm.password"></el-input>
      </el-form-item>
      <!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> -->
      <el-form-item>
        <el-button class="login-btn" type="primary" @click.native.prevent="login">立即登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { saveUserInfo } from "@/assets/js/auth";
export default {
  data() {
    return {
      userForm: {
        username: "admin",
        password: "123456"
      },
      rules2: {
        account: [
          { required: true, message: "请输入账号", trigger: "blur" }
          //{ validator: validaePass }
        ],
        checkPass: [
          { required: true, message: "请输入密码", trigger: "blur" }
          //{ validator: validaePass2 }
        ]
      },
      checked: true
    };
  },
   methods: {
    async login () {
      // 1. 采集表单数据
      // 2. 表单验证
      const res = await this.$http.post('/login', this.userForm)
      const data = res.data
      if (data.meta.status === 200) {
        // 登陆成功，我们把服务器发给我们当前登陆的用户信息存储到本地存储
        saveUserInfo(data.data)
        const {redirect} = this.$route.query
        // 如果查询字符串中有 redirect 字段，则直接跳转到这里
        if (redirect) {
          this.$router.push(redirect.substr(1))
        } else {
          // 导航到 home 组件
          this.$router.push({
            name: 'home'
          })
        }

        // 给出登陆成功的提示消息
        this.$message({
          type: 'success',
          message: '登陆成功!'
        })
      }
    }
  }
};
</script>
<style>
</style>
