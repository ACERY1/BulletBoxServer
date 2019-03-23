// 常用工具函数
module.exports = {
  APIError(message) {
    return {
      code: 1,
      data: null,
      message,
    }
  }
}