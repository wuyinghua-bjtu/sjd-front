<template>
  <div>

    <router-view class="rv"></router-view>

  </div>
</template>

<script>

// import HeaderNav from "@/components/headerNav";
export default {
  name: 'App',
  components: {
  },
  // methods: {
  //   cnm() {
  //     console.log(this.user);
  //   }
  // },
  props: ['user']
  ,
  mounted() {
    // console.log(sessionStorage.getItem('user'));
    // this.$store.commit('modifyUserInfo', localStorage.getItem('user').username, localStorage.getItem('user').uid);
    // //sessionStorage.setItem('user', null);
  }
}
</script>

<style>
  .rv {
    width: 100%;
    margin: 0 auto;
  }
</style>
