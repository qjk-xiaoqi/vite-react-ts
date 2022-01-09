import * as logger from '@/utils/logger'

import { FetchOptions, FetchResponse, FetchStatus, FetchMessage, FetchJSBResponse } from './index.typings'

const HOST = 'https://xxx.com'

export function request<T>(options: FetchOptions): Promise<FetchResponse<T>> {
  return new Promise((resolve, reject) => {
    const url = /^https?:/.test(options.url) ? options.url : `${HOST}${options.url}`

    window
      .fetch(url, {
        ...options,
      })
      .then((response) => response.json() as Promise<FetchJSBResponse<T>>)
      .then((res) => {
        if (!res.response) {
          logger.error('network_response_empty', url)
          // metrics.counter('network_response_empty', { url })
          reject(res)
          return
        }

        const { response } = res
        if (
          response.status === FetchStatus.Success ||
          response.status === FetchMessage.Success ||
          response.message === FetchMessage.Success ||
          typeof response.status === 'undefined' // 部分接口格式定义不符合规范，无status
        ) {
          resolve(response)
        } else {
          logger.error('network_service_error', url)
          // metrics.counter('network_service_error', { url, status: response.status })
          reject(res)
        }
      })
      .catch((error: Error) => {
        logger.error('network_error', url)
        // metrics.counter('network_error', { url })
        reject(error)
      })
  })
}
