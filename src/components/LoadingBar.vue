<script lang="tsx">
  import { defineComponent, ref, unref } from 'vue'

  export default defineComponent({
    name: 'LoadingBar',
    setup(props, { expose }) {
      const speed = ref<number>(1)
      const bar = ref<HTMLElement>()
      const timer = ref<number>(0)
      const startLoading = () => {
        const dom = unref(bar) as HTMLElement
        speed.value = 1
        timer.value = window.requestAnimationFrame(function fn() {
          if (unref(speed) < 99) {
            speed.value += 4
            dom.style.display = 'block'
            dom.style.width = `${unref(speed)}%`
            timer.value = window.requestAnimationFrame(fn)
          } else {
            speed.value = 1
            window.cancelAnimationFrame(unref(timer))
          }
        })
      }
      const endLoading = () => {
        const dom = unref(bar) as HTMLElement
        setTimeout(() => {
          window.requestAnimationFrame(() => {
            speed.value = 100
            dom.style.width = `${unref(speed)}%`
            dom.style.display = 'none'
          })
        }, 500)
      }

      expose({
        startLoading,
        endLoading,
      })

      return () => {
        return (
          <div class="fixed top-0 w-full h-[2px]">
            <div ref={bar} class="h-full w-0 bg-[#188fff]"></div>
          </div>
        )
      }
    },
  })
</script>
