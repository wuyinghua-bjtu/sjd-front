<template>
  <div class="function-bar-wrapper">
    <div class="function-bar">
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="funcChange"
        text-color="#b0b0b0"
        active-text-color="#fa8072"
        router>
        <el-menu-item index="/coachPre">私教预约</el-menu-item>
        <el-menu-item index="/gymAbout">合作场地</el-menu-item>
        <el-menu-item index="/coachTest">教练认证</el-menu-item>
        <el-menu-item index="/gymTest">场地认证</el-menu-item>
        <el-menu-item index="/trainingBlog">健身圈</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "functionBar",
  data() {
    return {
      activeIndex: '/coachPre'
    }
  }
}
</script>

<style scoped>
  .function-bar-wrapper {
    width: 1220px;
    margin: 0 auto;
  }
  ::v-deep.el-menu {
    margin: 0 auto;
  }
  ::v-deep.el-menu-item {

    margin-right: 40px;
  }
</style>
