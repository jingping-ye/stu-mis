<template>
  <div class="main-layout">
    <a-layout id="components-layout-demo-responsive">
      <a-layout-sider breakpoint="lg" collapsed-width="0" @collapse="onCollapse" @breakpoint="onBreakpoint">
        <div class="logo">Example</div>
        <a-menu theme="dark" mode="inline" :default-selected-keys="['4']">
          <a-menu-item v-for="route in routeList" :key="route.path">
            <router-link :to="route.path">{{ route.title }}</router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header :style="{ background: '#fff', padding: 0 }" />
        <a-layout-content :style="{ margin: '24px 16px 0' }">
          <div :style="{ padding: '24px', background: '#fff', minHeight: '85vh' }">
            <router-view />
          </div>
        </a-layout-content>
        <a-layout-footer style="textAlign: center">
          jingping.ye ©2021 享有所有权利
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
//  引入外部资源
// import someThing from 'SomeThing';
export default {
  name: "MainLayout",
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      //  常量
      routeList: [
        {
          path: "/student",
          title: "学生管理",
        },
        {
          path: "/class",
          title: "班级管理",
        },
        {
          path: "/login",
          title: "登录页面",
        },
        {
          path: "/fake",
          title: "NotFound",
        },
      ],
      //  状态
      collapsed: false,
      //  变量
      list: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
  },
  filters: {},
  created() {},
  mounted() {},
  destoryed() {},
};
</script>
<style scoped>
#components-layout-demo-responsive .logo {
  min-height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
</style>
