<script lang="tsx">
  import { CheckCircleFilled } from '@ant-design/icons-vue'
  import { Space } from 'ant-design-vue'
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      return () => (
        <div className={'mb-6'}>
          <p>整体风格样式</p>
          <Space size={16}>
            <div
              className={
                'relative w-11 h-9 bg-gray-300 rounded shadow-[0_1px_2.5px_0_rgb(0,0,0,18%)] cursor-pointer before:content-[""] before:bg-white before:block before:h-full before:w-1/3 before:absolute before:top-0 before:left-0 after:content-[""] after:bg-white after:block after:h-1/5 after:w-full after:absolute after:top-0 after:left-0'
              }>
              <CheckCircleFilled class={'absolute bottom-1 right-1'} />
            </div>
            <div
              className={
                'relative w-11 h-9 bg-gray-300 rounded shadow-[0_1px_2.5px_0_rgb(0,0,0,18%)] cursor-pointer before:content-[""] before:bg-neutral-800 before:block before:h-full before:w-1/3 before:absolute before:top-0 before:left-0 before:z-10 after:content-[""] after:bg-white after:block after:h-1/5 after:w-full after:absolute after:top-0 after:left-0'
              }>
              <CheckCircleFilled class={'absolute bottom-1 right-1'} />
            </div>
            <div
              className={
                'relative w-11 h-9 bg-neutral-600 rounded shadow-[0_1px_2.5px_0_rgb(0,0,0,18%)] cursor-pointer before:content-[""] before:bg-neutral-700 before:block before:h-full before:w-1/3 before:absolute before:top-0 before:left-0 after:content-[""] after:bg-neutral-800 after:block after:h-1/5 after:w-full after:absolute after:top-0 after:left-0'
              }>
              <CheckCircleFilled class={'absolute bottom-1 right-1'} />
            </div>
          </Space>
        </div>
      )
    },
  })
</script>
