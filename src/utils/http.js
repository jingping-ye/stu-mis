/**
 * axios请求封装
 */
import axios from "axios";
import { message } from "ant-design-vue";

// 基础路径
// process.env.VUE_APP_API_BASE_URL
const BaseURL = `/api`; // 基础路径
const Timeout = 30000; // 超时时间
const NormalCode = 2; // 从后台正常返回的代码

const ErrorMessage = (msg) => {
  message.error(msg, 5);
}; // 错误信息提示

let httpInstance = axios.create({
  baseURL: BaseURL,
  timeout: Timeout,
});
//  请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    //  添加头部信息
    config.headers["Content-Type"] = "application/json;charset=UTF-8";

    console.log("request", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//  响应拦截器
httpInstance.interceptors.response.use(
  (response) => {
    console.log("response", response);
    if (response.status === 200) {
      if (response.data.data) {
        //  处理正常json格式文件
        if (response.data.errcode === NormalCode) {
          return Promise.resolve(response.data.data);
        } else {
          ErrorMessage(`错误(错误代码${response.data.errcode}):${response.data.errmsg}`);
          return Promise.reject(new Error("请求失败"));
        }
      } else {
        //  处理文件流
        return Promise.resolve(response.data);
      }
    } else {
      console.log(response);
    }
  },
  (error) => {
    if (error.response) {
      const resStatus = error.response.status.toString();
      if (resStatus === "401") {
        ErrorMessage(`token验证失败，请重新登录!`);
        location.reload();
      } else if (resStatus.startsWith("5")) {
        ErrorMessage(`服务器繁忙中，请稍后再试！`);
        return Promise.reject(error);
      } else {
        return Promise.reject(error);
      }
    } else {
      ErrorMessage(error);
      return Promise.reject(error);
    }
  }
);
export default httpInstance;
