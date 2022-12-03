<script lang="tsx">
  import { SettingOutlined } from '@ant-design/icons-vue'
  import { Drawer } from 'ant-design-vue'
  import { defineComponent, ref } from 'vue'

  import ColorComponent from './color/colorComponent.vue'
  import NavigationComponent from './navigation/navigationComponent.vue'
  import StyleComponent from './style/styleComponent.vue'

  export default defineComponent({
    setup() {
      /**
       * visible
       * @const {Boolean} visible
       * @description 控制抽屉容器的开关
       */
      const visible = ref<boolean>(false)
      /**
       * drawerController
       * @method
       * @scription 开关控制器
       */
      const drawerController = (param: boolean) => {
        visible.value = param
      }
      /**
       * drawerContainer
       * @element
       * @description 抽屉容器
       */
      const DrawerContainer = () => {
        return (
          <Drawer
            v-model:visible={visible.value}
            closable={false}
            placement={'right'}
            maskStyle={{ 'backdrop-filter': 'blur(3px)' }}>
            <StyleComponent />
            <ColorComponent />
            <NavigationComponent />
          </Drawer>
        )
      }
      return () => (
        <>
          <SettingOutlined onClick={() => drawerController(true)} />
          {DrawerContainer()}
        </>
      )
    },
  })
</script>
