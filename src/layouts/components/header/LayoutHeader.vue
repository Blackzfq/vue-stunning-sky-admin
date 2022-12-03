<script lang="tsx">
  import { LayoutHeader, Space } from 'ant-design-vue'
  import { defineComponent } from 'vue'

  import SettingComponent from './setting/SettingComponent.vue'
  import PersonComponent from './person/PersonComponent.vue'
  import InformComponent from './inform/informComponent.vue'
  import TranslationComponent from './translation/TranslationComponent.vue'
  import SearchComponent from './search/SearchComponent.vue'
  import MessageComponent from './message/MessageComponent.vue'
  import MenuComponent from './menu/MenuComponent.vue'
  import LogoComponent from './logo/LogoComponent.vue'

  export default defineComponent({
    setup() {
      /**
       * LeftContent
       * @element
       * @description 左侧
       */
      const LeftContent = () => (
        <Space>
          <MenuComponent />
          <LogoComponent />
        </Space>
      )
      /**
       * RightContent
       * @element
       * @description 右侧
       */
      const RightContent = () => (
        <Space size={20}>
          <SearchComponent />
          <MessageComponent />
          <TranslationComponent />
          <InformComponent />
          <PersonComponent />
          <SettingComponent />
        </Space>
      )
      /**
       * layout
       * @element
       * @description 布局
       */
      const Layout = () => (
        <div className={'flex justify-between items-center px-7'}>
          {LeftContent()}
          {RightContent()}
        </div>
      )
      return () => <LayoutHeader>{Layout()}</LayoutHeader>
    },
  })
</script>
