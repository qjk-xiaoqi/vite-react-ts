import type { Response } from './interface'

// example
export type UploadFile = (file: Blob) => Promise<Response<string>>
