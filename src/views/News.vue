<template>
  <div class="news">
<!--    <HeaderNav :user="user"></HeaderNav>-->
    <p>1.指纹识别</p>
    <p>2.几月份上班</p>
    <p>3.我没上班</p>
    <p>4.来一个随便</p>
    <p>5.打车上班</p>
  </div>
</template>

<script>
// import HeaderNav from "@/components/headerNav";
export default {
  name: "News",
  // components: {HeaderNav},
  props: ['user']
}
</script>

<style scoped>
  p {
    text-align: center;
    font-size:16px;
  }
</style>
