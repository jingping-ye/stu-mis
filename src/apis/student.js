/**
 * Title: student
 * Author: jingping.ye
 * Date: 2021-01-10 17:11:40
 * Description: 学生，API文档
 * LastModifiedDate:2021-01-10 17:11:40
 * LastModifiedDescription: 修改描述
 */
import http from "@/utils/http";

const prefix = ""; // 可以在此处写"v1/"，自动拼接路径
const api = {
  list: `${prefix}/student/findAll`,
  update: `${prefix}/student/update`,
  delete: `${prefix}/student/delete`,
  add: `${prefix}/student/add`,
  detail: `${prefix}/student/detail`,
};

/**
 * 获取列表
 * @param {object} argsParams
 * @param {number} argsParams.isDelete 是否删除状态 0-正常[default]|1-删除
 * @note 备注
 * @usage 使用示例
 */
function getStudentList(argsParams = {}) {
  return http
    .get(api.list, {
      params: argsParams,
    })
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

/**
 * 更新
 * @param {object} argsParams
 * @note 备注
 * @usage 使用示例
 */
function updateStudent(argsParams = {}) {
  return http
    .put(api.update, argsParams)
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

/**
 * 新增
 * @param {object} argsParams
 * @note 备注
 * @usage 使用示例
 */
function addStudent(argsParams = {}) {
  return http
    .post(api.add, argsParams)
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

/**
 * 删除
 * @param {object} argsParams
 * @note 备注
 * @usage 使用示例
 */
function deleteStudent(argsParams = {}) {
  return http
    .delete(api.delete, { data: { ...argsParams } })
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

/**
 * 获取详情
 * @param {object} argsParams
 * @note 备注
 * @usage 使用示例
 */
function getStudentDetail(argsParams = {}) {
  return http
    .get(api.detail, {
      params: argsParams,
    })
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

export default {
  getStudentList,
  updateStudent,
  addStudent,
  deleteStudent,
  getStudentDetail,
};
