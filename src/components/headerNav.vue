<template>
  <div class="header-nav-container">
    <router-link to="/Home"><img src="../img/zw.jpg"></router-link>
    <div class="header-nav">
      <el-menu
        mode="horizontal"
        class="el-menu-demo"
        background-color="#333333"
        text-color="#ffd04b"
        active-text-color="#fa8072"
        :default-active="activeIndex"
        @select="handleSelect"
        router>
        <el-menu-item index="/Home">首页</el-menu-item>
        <el-menu-item index="/News">资讯</el-menu-item>
        <el-menu-item index="/Cooperation">商业合作</el-menu-item>
        <el-menu-item index="/DownloadApp">下载app</el-menu-item>
        <el-menu-item index="/DownloadApp">小程序</el-menu-item>
        <el-menu-item index="/Agreement">相关协议</el-menu-item>
        <el-menu-item index="/Login" class="lr" v-if="$store.state.user.username === '' || $store.state.user.username === undefined">登录</el-menu-item>
        <el-menu-item index="/Register" class="lr" v-if="$store.state.user.username === '' || $store.state.user.username === undefined">注册</el-menu-item>
        <el-menu-item index="/UserInfo" class="lr" v-if="$store.state.user !== undefined" >{{$store.state.user.username}}</el-menu-item>
      </el-menu>
    </div>
<!--    <div class="login">-->
<!--      <el-menu-->
<!--        mode="horizontal"-->
<!--        class="el-menu-demo"-->
<!--        background-color="#333333"-->
<!--        text-color="#ffd04b"-->
<!--        active-text-color="#fa8072"-->
<!--        :default-active="activeIndex"-->
<!--        @select="handleSelect"-->
<!--        router>-->
<!--        <el-menu-item index="/login" >登录</el-menu-item>-->
<!--        <el-menu-item index="/register">注册</el-menu-item>-->

<!--      </el-menu>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "headerNav",
  data() {
    return {
      activeIndex: '/Home'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  props: ['user']
}
</script>

<style scoped>
  .header-nav-container {
    width: 100%;
    height: 60px;
    background-color: #333333;
    z-index: 999;
  }
  .header-nav {
    width: 1220px;
    margin: 0 auto;
  }

  .header-nav-container img{
    width: 50px;
    height: 50px;
    position: absolute;
    left: 50px;
    top: 13px;
  }
  .login {
    float: right;
    position: relative;
    top: -60px;
    right: 0px;
    z-index: 1000;
  }
  .login ::v-deep.el-menu-item {
    height: 59px;
  }
  /*.header-nav ::v-deep.el-menu-item{*/
  /*  margin-left: 50px;*/
  /*}*/

  .header-nav ::v-deep.el-menu-item.lr{
    /*margin-left: 500px;*/
    float: right;
  }
  .header-nav ::v-deep.el-menu-item.registerBottom{
    margin-left: 0px;
  }
</style>
