/**
 * 日志
 */

export type ALogLevel = 'verbose' | 'debug' | 'info' | 'warn' | 'error'

// 这里以lynx中发日志为例子
const log = (level: ALogLevel, message: string, tag: string) => {
  // if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test')  {
  //   return
  // }
  // 客户端日志
  // call('x.reportALog', { level, message, tag })
  // Slardar Hybrid 日志
  // _slardarLog(message)
}

export const info = (message: string, tag: string) => {
  log('info', message, tag)
}

export const warn = (message: string, tag: string) => {
  log('warn', message, tag)
}

export const error = (message: string, tag: string) => {
  log('error', message, tag)
}
