<template>
  <div class="coachInfo">
    <el-table
      :data="tableData"
      stripe>
      <el-table-column
        prop="name"
        label="姓名"
        width="150">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
        width="150">
      </el-table-column>
      <el-table-column
        prop="direction"
        label="主要方向"
        width="250">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="联系"
        width="100">
        <template>
          <el-button @click="toCoach" type="text" size="medium">联系Ta</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                   :current-page="currentPage" :page-sizes="[5, 10, 20, 40]" :page-size="pagesize"
                   layout="prev, next, pager, total, sizes, jumper" :total="totalNum"></el-pagination>
  </div>
</template>

<script>
export default {
  name: "coachPre",
  data() {
    return {
      totalNum: 0,
      tableData: [],
      currentPage: 1,
      pagesize: 10
    }
  },
  methods: {
    handleSizeChange: function (size) {
      this.pagesize = size;
      this.handleUserList(this.currentPage);
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
      this.handleUserList(currentPage);
    },
    handleUserList(page = 1 ) {
      this.$axios.post("api/CoachList", {
        params: {
          limit: this.pagesize,
          offset: (page - 1) * this.pagesize
        }
      }).then(res=> {
        this.tableData = res.data;
        console.log(res.data)
      })
    },
    getItemsNum() {
      this.$axios.post("api/GetItemsNum").then(res=> {
        console.log(res.data);
        this.totalNum = res.data;
      })
    }
  },
  beforeMount() {
    this.getItemsNum();
  },
  mounted() {
    this.handleUserList();
  }
}
</script>

<style scoped>
  .coachInfo {
    width: 1220px;
    margin: 0 auto;
  }
</style>
