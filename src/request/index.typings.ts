export type FetchOptions = {
  /**
   * 页面url，完整的url地址，包括协议
   */
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  /**
   * 拼接在url上
   */
  params?: Record<string, any>
  /**
   * post body
   */
  body?: any
  /**
   * 自定义header
   */
  header?: Record<string, string | number>
}

export enum FetchStatus {
  Success = 0,
}

export enum FetchMessage {
  Success = 'success',
}

export type FetchResponse<T> = {
  status: number | string
  message: string
  prompts: string
  data: T
}

export type FetchJSBResponse<T> = {
  httpCode: number
  response: FetchResponse<T>
  header: Record<string, string>
}
