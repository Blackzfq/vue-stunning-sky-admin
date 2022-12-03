<script lang="tsx">
  import { Divider, Space } from 'ant-design-vue'
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      return () => (
        <div className={'mb-6'}>
          <p>主题色</p>
          <Space size={8}>
            {new Array(10).fill(null).map(() => (
              <div className={'w-5 h-5 mt-2 bg-sky-600 rounded cursor-pointer'}></div>
            ))}
          </Space>
          <Divider />
        </div>
      )
    },
  })
</script>
