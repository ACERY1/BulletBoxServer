// 常用工具函数
module.exports = {
  APIError(message) {
    return {
      code: 1,
      data: null,
      message,
    }
  },
  APISuccess(data, message) {
    return {
      code: 0,
      data,
      message,
    }
  }
}