<template>
  <div>
    <HeaderNav :user="user"></HeaderNav>
    <router-view></router-view>
  </div>
</template>

<script>

// import FunctionBar from "@/components/functionBar";
import HeaderNav from "@/components/headerNav";
export default {
  data() {
    return function() {
      console.log(this.user);
    }();
  },
  name: "Home",
  components: {HeaderNav},
  props: ['user'],
  methods: {

  },
  mounted(){
    // 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
    //this.$store.commit('modifyUserInfo', localStorage.getItem('user').username, localStorage.getItem('user').uid);
    // window.onbeforeunload = function () {
    //   var storage = window.localStorage;
    //   storage.removeItem('user');
    // }
  }
}
</script>

<style scoped>
  ::v-deep.router-view{
    width: 1220px;
    margin: 0 auto;
  }
</style>
