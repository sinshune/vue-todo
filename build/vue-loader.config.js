module.exports = (isDev) => {
  return {
    preserveWhiteSpace: true, // 不渲染额外的空格
    extractCSS: !isDev,  // 单独打包.vue文件中的css, 会一次性加载应用里的所有css, 如果要使用vue的异步加载模式, 则不需要这样
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]', // 根据路径, 原名, 哈希生成的css的类名, 所以不同文件下的css是不会互相影响的; 与scoped相比的好处是, 保证唯一性和保密性, 因为你自己都不知道这是什么时候写的什么样式
      camelCase: true
    },
    // hotReload: false, // 热重载功能, 默认情况下不需要设置, 会根据环境变量自动生成
  }
}