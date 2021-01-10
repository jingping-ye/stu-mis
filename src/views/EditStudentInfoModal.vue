<template>
  <div class="edit-student-info-modal">
    <a-modal
      v-model="visible"
      title="编辑学生信息"
      @ok="handleOk"
      @cancel="handleCancel"
      width="600px"
      ok-text="确认"
      cancel-text="取消"
    >
      <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-model-item label="姓名">
          <a-input v-model="form.sName" />
        </a-form-model-item>
        <a-form-model-item label="年龄">
          <a-input-number v-model="form.sAge" :min="1" :max="20" />
        </a-form-model-item>

        <a-form-model-item label="性别">
          <a-radio-group v-model="form.sSex">
            <a-radio :value="0">
              女
            </a-radio>
            <a-radio :value="1">
              男
            </a-radio>
          </a-radio-group>
        </a-form-model-item>

        <a-form-model-item label="班级编号">
          <a-input v-model="form.cId" />
        </a-form-model-item>
      </a-form-model>
    </a-modal>
  </div>
</template>
<script>
//  引入外部资源
export default {
  name: "EditStudentInfoModal",
  mixins: [],
  components: {},
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    sId: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      // 常量
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      //  状态
      visible: false,
      //  变量
      list: [],

      form: {
        sName: "",
        sAge: 5,
        sSex: 0,
        cId: "000001",
      },
    };
  },
  computed: {},
  watch: {
    isVisible(newV) {
      this.visible = newV;
    },
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk() {
      this.visible = false;
      this.$emit("closeModal", { type: "confirm" });
    },
    handleCancel() {
      this.$emit("closeModal", { type: "cancel" });
    },
  },
  filters: {},
  created() {},
  mounted() {},
  destoryed() {},
};
</script>
<style scoped>
.edit-student-info-modal {
}
</style>
