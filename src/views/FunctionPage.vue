<template>
  <div>
    <function-bar></function-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import FunctionBar from "@/components/functionBar";
export default {
name: "FunctionPage",
  components: {FunctionBar}
}
</script>

<style scoped>

</style>
