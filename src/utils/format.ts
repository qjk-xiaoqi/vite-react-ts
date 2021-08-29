import dayjs from 'dayjs'

/**
 * 将毫秒时间戳转为format格式
 * @param timestamp 时间戳
 * @param format 格式
 */
export const formatUnixTime = (timestamp?: number | string, format = 'YYYY.MM.DD'): string =>
  timestamp ? dayjs.unix(Number(timestamp)).format(format) : ''
