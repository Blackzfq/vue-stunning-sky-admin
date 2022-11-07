import { computed, ref, unref } from 'vue'

export enum FormEnum {
  'Login',
  'Register',
  'Forget',
}

const current = ref<FormEnum>(FormEnum.Login)

/**
 * userForms
 * @returns 当前索引和设置索引的方法
 * @description 表单控件
 */
export function userForms() {
  const userCurrent = computed(() => unref(current))
  const setCurrent = (val: FormEnum) => {
    current.value = val
  }
  return { userCurrent, setCurrent }
}
