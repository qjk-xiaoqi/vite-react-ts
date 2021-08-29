export type Response<T> = {
  status: number
  message: string
  prompts: string
  data: T
}
