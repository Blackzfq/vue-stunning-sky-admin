<script lang="tsx">
  import { Space, Tag } from 'ant-design-vue'
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      return () => (
        <Space>
          <span className={'text-xl'}>Tuskey Admin</span>
          <Tag color={'#f50'}>Bate</Tag>
        </Space>
      )
    },
  })
</script>
