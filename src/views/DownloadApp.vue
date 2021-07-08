<template>

  <div class="downloadapp">
<!--    <HeaderNav :user="user"></HeaderNav>-->
    <img src="../img/qrcode.jpg">
    <p>扫码下载app</p>
  </div>
</template>

<script>
// import HeaderNav from "@/components/headerNav";
export default {
  name: "DownloadApp",
  // components: {HeaderNav},
  props: ['user']
}
</script>

<style scoped>
  .downloadapp img{
    width: 300px;
    display: block;
    margin: 0 auto;
  }
  .downloadapp p {
    text-align: center;
    font-size: 16px;
  }
</style>
