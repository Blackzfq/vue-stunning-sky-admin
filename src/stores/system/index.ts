import { defineStore } from 'pinia'
import { STORE_NAME, STORE_THEME, STORE_LANG, STORE_LAYOUT, STORE_MENU_COLOR, STORE_PRIMARY_COLOR } from '../enum'

/**
 * state
 * @param lang 系统语言
 * @param theme 系统主题
 * @param layout 样式布局
 * @param menuColor 侧边栏色
 * @param primaryColor 主题色
 */

const useConfigStore = defineStore(STORE_NAME.OPTION, {
  state: () => ({
    lang: STORE_LANG.EN,
    theme: STORE_THEME.LIGHT,
    layout: STORE_LAYOUT.DEFAULT,
    menuColor: STORE_MENU_COLOR.ONE,
    primaryColor: STORE_PRIMARY_COLOR.ONE,
  }),
  actions: {
    SetTheme(val: STORE_THEME) {
      this.theme = val
    },
    SetLayout(val: STORE_LAYOUT) {
      this.layout = val
    },
    SetMenuColor(val: STORE_MENU_COLOR) {
      this.menuColor = val
    },
    SetPrimaryColor(val: STORE_PRIMARY_COLOR) {
      this.primaryColor = val
    },
  },
})

export default useConfigStore
