<template>
  <div class="manage">
    <el-form
      :model="ruleForm2"
     label-width="100px"
    >
     <div class="manage-main">
      <div class="manage-main-t">
        <i class="el-icon-plus"></i>
        赠金设置
      </div>
      <div class="manage-main-b">
        <el-form-item label="注册" prop="pass">
          
        <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm2.age"></el-input>
      </el-form-item>
      </div>
    </div>
        <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
   
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: "left",
       ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
    };
  },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
};
</script>
