<script lang="tsx">
  import { Button, Divider, Form, FormItem, Input, InputPassword } from 'ant-design-vue'
  import { defineComponent, reactive, unref } from 'vue'
  import { v4 as uuidv4 } from 'uuid'
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
            <h3 className={'text-black text-2xl font-semibold'}>Sign in</h3>
            <h5 className={'text-black mb-10'}>
              Don't have an account?{' '}
              <Button type={'link'} onClick={() => setCurrent(FormEnum.Register)}>
                Sign up
              </Button>
            </h5>
          </>
        )
      }
      /**
       * LoginForm
       * @element
       * @description 登录表单
       */
      const LoginForm = () => {
        interface LoginForm {
          username: string
          password: string
          remember: boolean
        }
        const loginForm = reactive<LoginForm>({
          username: '',
          password: '',
          remember: false,
        })
        return (
          <Form v-model={loginForm} layout={'vertical'}>
            <FormItem label={'Email address'}>
              <Input placeholder={'Email address'} />
            </FormItem>
            <FormItem label={'Password'}>
              <InputPassword placeholder={'Password'} />
            </FormItem>
            <FormItem>
              <Button type={'primary'} block={true} size={'large'}>
                Sign in
              </Button>
            </FormItem>
          </Form>
        )
      }
      /**
       * OtherLogin
       * @element
       * @descriotion 其他登录方式
       */
      const OtherLogin = () => {
        const loginMethod = [
          {
            key: uuidv4(),
            title: 'Googel',
          },
          {
            key: uuidv4(),
            title: 'Facebook',
          },
        ]
        return (
          <>
            <Divider>or Sign In with</Divider>
            <div className={'grid grid-cols-2 gap-2 mt-10'}>
              {loginMethod.map((currentItem) => (
                <Button key={currentItem.key} size={'large'} type={'primary'} block ghost>
                  {currentItem.title}
                </Button>
              ))}
            </div>
          </>
        )
      }
      return () => {
        return (
          <>
            {unref(userCurrent) === FormEnum.Login ? (
              <div className={'w-1/2 enter-x'}>
                {FormCaption()}
                {LoginForm()}
                {OtherLogin()}
              </div>
            ) : null}
          </>
        )
      }
    },
  })
</script>
