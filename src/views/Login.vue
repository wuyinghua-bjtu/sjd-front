<template>
  <div class="login-wrapper">
<!--    <HeaderNav :user="user"></HeaderNav>-->
    <p class="loginTitle">登录</p>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" type="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.pwd" prop="pwd" type="password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import HeaderNav from "@/components/headerNav";
export default {
  name: "Login",
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
    return {
      form: {
        username: '',
        pwd: ''
      },
      rules: {
        username: [
          {validator: validateUsername, trigger: 'blur'}
        ],
        pwd: [
          {validator: validatePass, trigger: 'blur'}
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
    login() {
      this.$axios.post("api/Login", this.form).then(res=>{
        if (res.status === 200) {
          sessionStorage.setItem('user', JSON.stringify(res.data[0]));
          console.log('local')
          console.log(localStorage.getItem('user'));
          console.log('state')
          console.log(this.$store.state.user);
          console.log(res.data[0])
          this.$store.commit('modifyUserInfo', res.data[0].username, res.data[0].uid);
          console.log(1)
          this.$message({message: '登陆成功', type: 'success'});
          this.$router.push('/Home');
        }
      }).catch(() => {
        this.$message({message: '登录失败', type: 'error'});
      })
    }
      // this.$router.push({
      //   name: 'Home'
      //
      // })

    //   this.$axios.post("api/Login", this.form).then(res=>{
    //     console.log(res.data[0]);
    //
    //     if (res.status === 200) {
    //       this.$store.commit('modifyUserInfo', res.data[0].username, res.data[0].uid);
    //       // console.log(res)
    //       this.$message({message: "登陆成功", type: "success"});
    //       this.$router.push('/Home');
    //     }
    //     }).catch(() => {
    //         this.$message({message: "登录失败", type: "error"});
    //         this.$router.push('/Login');
    //       })
    //
    //     console.log(this.$store.state.user.username);
    //
    // }
  },
  props: ['user'],
  // components: {HeaderNav}
}
</script>

<style scoped>
  .login-wrapper {
    width: 400px;
    margin: 0 auto;
  }
  .loginTitle {
    font-size: 20px;
    text-align: center;
  }

</style>
