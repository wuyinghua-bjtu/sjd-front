<template>
  <div class="coach-test-wrapper">
    <h2 style="text-align: center">教练认证</h2>
    <el-form
      ref="form"
      :model="coachInfo"
      label-width="80px">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="coachInfo.name" type="name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-radio v-model="coachInfo.gender" label="m">男</el-radio>
        <el-radio v-model="coachInfo.gender" label="f">女</el-radio>
      </el-form-item>
      <el-form-item label="主要方向" prop="direction">
        <el-input v-model="coachInfo.direction" type="direction"></el-input>
      </el-form-item>
      <el-form-item label="联系方式" prop="tel">
        <el-input v-model="coachInfo.tel" type="tel"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="coachInfo.age" type="age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitCoach()">审核</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "coachTest",
  data() {
    return {
      coachInfo: {
        name: '',
        gender: '',
        direction: '',
        tel: '',
        age: ''
      }
    }
  },
  methods: {
    submitCoach() {
      this.$axios.post("api/CoachTest", this.coachInfo).then(res=> {
        if (res.status === 200) {
          this.$message({message: '登记成功，请等待审核', type: 'success'});
          this.$router.push('/Home');
        }
      }).catch(() => {
        this.$message({message: '登记失败', type: 'error'});
      })
    }
  }
}
</script>

<style scoped>
  .coach-test-wrapper {
    width: 500px;
    margin: 0 auto;
  }
</style>
