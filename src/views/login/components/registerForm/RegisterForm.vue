<script lang="tsx">
  import { defineComponent, unref } from 'vue'
  import { Button } from 'ant-design-vue'
  import { userForms, FormEnum } from '../index'

  const { userCurrent, setCurrent } = userForms()

  export default defineComponent({
    setup() {
      /**
       * FormCaption
       * @element
       * @description 表单标题
       */
      const FormCaption = () => {
        return (
          <>
            <h3 className={'text-black text-2xl font-semibold'}>Sign up</h3>
            <h5 className={'text-black mb-10'}>
              Already have an account?
              <Button type={'link'} onClick={() => setCurrent(FormEnum.Login)}>
                Sign in
              </Button>
            </h5>
          </>
        )
      }
      return () => {
        return (
          <>
            {unref(userCurrent) === FormEnum.Register ? <div className={'w-1/2 enter-x'}>{FormCaption()}</div> : null}
          </>
        )
      }
    },
  })
</script>
