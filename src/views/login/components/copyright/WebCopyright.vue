<script lang="tsx">
  import { Button, Space } from 'ant-design-vue'
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      return () => {
        return (
          <div className={'flex justify-between items-center w-full'}>
            <span className={'text-white'}>©2022 Tusky Admin</span>
            <Space>
              <Button type={'link'} href={'/'}>
                <span className={'text-white'}>Privacy</span>
              </Button>
              <Button type={'link'} href={'/'}>
                <span className={'text-white'}>Security</span>
              </Button>
              <Button type={'link'} href={'/'}>
                <span className={'text-white'}>Legal</span>
              </Button>
            </Space>
          </div>
        )
      }
    },
  })
</script>
