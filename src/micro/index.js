import { registerMicroApps, start, addGlobalUncaughtErrorHandler } from 'qiankun'

// 微应用注册信息
import apps from './app'
/**
 * 注册微应用
 * 第一个参数 - 微应用的注册信息
 * 第二个参数 - 全局生命周期钩子
 */
registerMicroApps(apps, {
  // qiankun 生命周期钩子 - 微应用加载前
  beforeLoad: (app) => {
    // 微应用加载前
    return Promise.resolve()
  },
  // qiankun生命钩子 - 微应用挂载后
  afterMount: (app) => {
    return Promise.resolve()
  },
})
/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event) => {
  const { msg } = event
  if (msg && msg.includes('died in status LOADING_SOURCE_CODE')) {
    console.log('微应用加载失败，请检查应用是否可运行')
  }
})
export default start
