<template>
  <div class="student-list">
    <a-table :columns="columns" :data-source="data" :rowKey="(record) => record.sId">
      <template slot="sex" slot-scope="text">
        {{ text ? "女" : "男" }}
      </template>
      <span slot="opt" slot-scope="text, record">
        <a @click="editStudent(record.sId)">编辑</a>
        <a-divider type="vertical" />
        <a @click="deleteStudent(record.sId)">删除</a>
      </span>
    </a-table>
    <edit-student-info-modal :isVisible="editModalVisible" @closeModal="closeEditModal"></edit-student-info-modal>
  </div>
</template>
<script>
import EditStudentInfoModal from "./EditStudentInfoModal";
const columns = [
  {
    title: "学生ID",
    dataIndex: "sId",
  },
  {
    title: "姓名",
    dataIndex: "sName",
  },
  {
    title: "年龄",
    dataIndex: "sAge",
  },
  {
    title: "性别",
    dataIndex: "sex",
    scopedSlots: { customRender: "sex" },
  },
  {
    title: "班级编号",
    dataIndex: "sCid",
  },
  {
    title: "操作",
    scopedSlots: { customRender: "opt" },
  },
];

//  引入外部资源
import StudentAPI from "../apis/student";
export default {
  name: "StudentList",
  mixins: [],
  components: {
    EditStudentInfoModal,
  },
  props: {},
  data() {
    return {
      //  常量
      data: [],
      columns,
      //  状态
      editModalVisible: false,
      editId: "",
      //  变量
      list: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    editStudent(sId) {
      this.editModalVisible = true;
      this.editId = sId;
    },
    closeEditModal(val) {
      this.editModalVisible = !this.editModalVisible;
      console.log("val", val);
    },
    deleteStudent() {
      console.log("删除学生");
    },
    /***
     * HTTP REQUEST
     * 获取用户列表
     */
    getStudentListRequest() {
      StudentAPI.getStudentList()
        .then((res) => {
          this.data = res;
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
  filters: {},
  created() {},
  mounted() {
    this.getStudentListRequest();
  },
  destoryed() {},
};
</script>
<style scoped>
.student-list {
}
</style>
