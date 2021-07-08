<template>
 <div class="register-wrapper">
   <HeaderNav :user="user"></HeaderNav>
   <p class="registerTitle">注册</p>
   <el-form
     :model="registerData"
     :rules="rules"
     status-icon
     ref="RegisterForm"
     label-width="80px"
     >
     <el-form-item label="用户名" prop="username">
       <el-input
         type="username"
         v-model="registerData.username"
         auto-complete="off"></el-input>
     </el-form-item>
     <el-form-item label="密码" prop="pwd">
       <el-input
         type="password"
         v-model="registerData.pwd"
         auto-complete="off"
         show-password></el-input>
     </el-form-item>
     <el-form-item label="确认密码" prop="checkPass">
       <el-input
           type="password"
           v-model="registerData.checkPass"
           auto-complete="off"
           show-password></el-input>
     </el-form-item>
     <el-form-item>
       <el-button type="primary" @click="register()">注册</el-button>
     </el-form-item>
   </el-form>
 </div>
</template>

<script>
// import HeaderNav from "@/components/headerNav";
export default {
  name: "Register",
  // components: {HeaderNav},
  data() {
    var validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else if (value.length > 15 ||value.length < 2) {
        callback(new Error('用户名长度在2-15个字符之间'));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (value.length > 15 || value.length < 6) {
        callback(new Error('密码长度在6-15个字符之间'));
      } else callback();
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      }
      else if (value !== this.registerData.pwd) {
        console.log(value);
        console.log(this.registerData.pwd);
        callback(new Error('两次输入密码不一致！'));
      } else callback();
    };
    return {
      registerData: {
        username: '',
        pwd: '',
        checkPass: ''
      },
      rules: {
        username: [
          {validator: validateUsername, trigger: 'blur'}
        ],
        pwd: [
          {validator: validatePass, trigger: 'blur'}
        ],
        checkPass: [
          {validator: validatePass2, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {

        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!');
          return false;
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    register() {
      if (this.registerData.pwd != this.registerData.checkPass) {
        this.$message({message: '两次密码输入不一致，注册失败', type: 'error'})
        return
      }
      this.$axios.post("api/Register", this.registerData).then(res=> {
        if (res.status === 200) {
          this.$message({message: '注册成功', type: 'success'});
          this.$router.push('/Login');
        }
      }).catch(() => {
        this.$message({message: '注册失败', type: 'error'});
      })
    }
  },
  props: ['user']
}
</script>

<style scoped>
  .register-wrapper {
    width: 400px;
    margin: 0 auto;
  }
  .registerTitle {
    font-size: 20px;
    text-align: center;
  }
</style>
