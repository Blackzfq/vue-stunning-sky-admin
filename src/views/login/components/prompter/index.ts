import { ref, computed, unref } from 'vue'

/**
 * CopyEnum
 * @enum
 * @declare - 广告类型的枚举
 */
export enum CopyEnum {
  'welcome',
  'introduce',
  'declare',
}
/**
 * advertising
 * @const {Array<body>} - 广告文案
 * @type {CopyEnum} body.key - 主键
 * @type {string} body.title - 标题
 * @type {string} body.describe - 描述
 * @type {string} body.url - 跳转链接
 */
export const advertising = [
  {
    key: CopyEnum.welcome,
    title: 'Welcome to login tusky 1',
    describe: `Lorem lpsum is simply dummy text of
    the printing and typesetting industry.
    Lorem lpsum has been the industry's
    standard dummy text 1`,
    url: '/',
  },
  {
    key: CopyEnum.introduce,
    title: 'Welcome to login tusky 2',
    describe: `Lorem lpsum is simply dummy text of
    the printing and typesetting industry.
    Lorem lpsum has been the industry's
    standard dummy text 2`,
    url: '/',
  },
  {
    key: CopyEnum.declare,
    title: 'Welcome to login tusky 3',
    describe: `Lorem lpsum is simply dummy text of
    the printing and typesetting industry.
    Lorem lpsum has been the industry's
    standard dummy text 3`,
    url: '/',
  },
]

/**
 * @const {number} currentIndex - 当前索引
 */
const currentIndex = ref<CopyEnum>(CopyEnum.welcome)

/**
 * UserAD
 * @function
 */
export function UserAD() {
  /**
   * getCurrentIndex
   * @declare 获取当前索引的值
   */
  const getCurrentIndex = computed(() => unref(currentIndex))
  /**
   * setCurrentIndex
   * @param key {CopyEnum} -
   * @declare 设置当前索引的值
   */
  const setCurrentIndex = (key: CopyEnum) => {
    currentIndex.value = key
  }
  return { getCurrentIndex, setCurrentIndex }
}
