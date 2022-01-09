import * as logger from '@/utils/logger'

export const call = <T>(name: string, args?: unknown): Promise<T> => {
  return new Promise((resolve, reject) => {
    bytedCall(name, args)
      .then(resolve) // 与下面test的结果一样
      .catch((error: Error) => {
        reject(error)
        logger.error(`[JSB CALL ERROR] ${name}：${error.message}`, name)
        // metrics.counter(`[JSB CALL ERROR]`, { eventName: name }, error.message)
      })
  })
}

const test = () => {
  return new Promise((resolveA, rejectA) => {
    new Promise((resolveB) => {
      resolveB(400)
    })
      .then(resolveA)
      .catch((err) => {
        rejectA(err)
      })
  })
}
test().then((res) => {
  console.log(res) // 400
})
