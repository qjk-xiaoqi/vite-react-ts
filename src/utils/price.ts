/**
 * 价格 >= 10000元时，保留几位小数
 * @param num 价格
 * @param fixedPoint 小数点位数
 */
export const formatPrice = (num: number, fixedPoint = 2): number => {
  if (num >= 10000) {
    return Number((num / 10000).toFixed(fixedPoint))
  }

  return num
}

/**
 *
 * @param num 价格
 * @param fixedPoint 小数点位数
 * @param unit 单位
 */
export const formatWithUnit = (num: number, fixedPoint?: number, unit = ''): [number, string] => {
  return [formatPrice(num, fixedPoint), num >= 10000 ? '万' : unit]
}
