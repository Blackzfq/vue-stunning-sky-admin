<script lang="tsx">
  import { SearchOutlined } from '@ant-design/icons-vue'
  import { Input, Space } from 'ant-design-vue'
  import { defineComponent, ref, unref } from 'vue'

  export default defineComponent({
    setup() {
      /**
       * focus
       * @element
       * @description 输入框的dom节点
       */
      const InputRef = ref<HTMLElement>()
      /**
       * focus controller
       * @method
       * @description 焦点控制器
       */
      const focusController = () => {
        InputRef.value?.focus()
      }
      return () => (
        <Space size={0}>
          <SearchOutlined onClick={focusController} />
          <Input
            ref={InputRef}
            placeholder={'Keyword Searching'}
            class={
              'w-[0px!important] border-x-[transparent!important] border-t-[transparent!important] px-[0px!important] focus:w-[200px!important]'
            }
            style={{ boxShadow: 'none' }}
          />
        </Space>
      )
    },
  })
</script>
