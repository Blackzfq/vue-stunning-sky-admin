// 过滤对象
export function filtObject(obj: object) {
  const keyList = Object.keys(obj)
  const valList = Object.values(obj)
  return valList.reduce((pre: any, cut: any, index: number) => {
    if (typeof cut === 'boolean' || typeof cut === 'number' || (typeof cut === 'string' && cut !== '')) {
      const newObj: {
        [propName: string]: any
      } = {}
      newObj[`${keyList[index]}`] = cut
      return { ...pre, ...newObj }
    }
    return pre
  }, {})
}

// 数组随机取值
export function randomArr<T>(list: Array<T>) {
  return list[parseInt((Math.random() * list.length).toString(), 10)]
}

// 金额处理器
export function priceFormat(price: number, divideNum = 100, num = 2, isNum = true) {
  const priceNum = (price / divideNum).toFixed(num)
  return isNum ? Number(priceNum) : priceNum
}
