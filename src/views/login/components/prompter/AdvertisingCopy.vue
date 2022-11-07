<script lang="tsx">
  import { defineComponent, unref } from 'vue'
  import { Button, Space } from 'ant-design-vue'
  import { advertising, UserAD } from './index'
  import type { CopyEnum } from './index'

  const { getCurrentIndex, setCurrentIndex } = UserAD()
  export default defineComponent({
    setup() {
      /**
       * Caption
       * @element - 标题部分
       */
      const Caption = (val: string) => (
        <h3
          className={
            'text-2xl text-white font-semibold relative pb-5 before:absolute before:content-[""] before:bg-white before:bottom-0 before:left-0 before:h-1 before:w-20 before:rounded-full'
          }>
          {val}
        </h3>
      )
      /**
       * Content
       * @element - 内容部分
       */
      const Content = (val: string) => <p className={'text-white'}>{val}</p>
      /**
       * Dots
       * @element - 分页器
       */
      const Dots = (num: CopyEnum) => (
        <Space size={10}>
          {advertising.map((currentItem) => (
            <span
              className={[
                'inline-block w-3 h-3 rounded-full cursor-pointer',
                currentItem.key === num ? 'bg-white' : 'bg-[rgba(255,255,255,.5)]',
              ].join(' ')}
              onClick={() => setCurrentIndex(currentItem.key)}></span>
          ))}
        </Space>
      )
      /**
       * Footer
       * @element - 底部部分
       */
      const Footer = (url: string) => (
        <Button shape={'round'} size={'large'} href={url} target={'_blank'} ghost>
          Know More
        </Button>
      )
      return () => {
        return (
          <>
            {advertising.map((currentItem) => (
              <>
                {unref(getCurrentIndex) === currentItem.key ? (
                  <div className={'enter-x w-2/3'}>
                    <Space direction={'vertical'} size={20}>
                      {Caption(currentItem.title)}
                      {Content(currentItem.describe)}
                      {Dots(currentItem.key)}
                      {Footer(currentItem.url)}
                    </Space>
                  </div>
                ) : null}
              </>
            ))}
          </>
        )
      }
    },
  })
</script>
