<script lang="tsx">
  import { Button, Checkbox, Divider, Form, FormItem, Input, InputPassword } from 'ant-design-vue'
  import { defineComponent, reactive, unref, toRaw } from 'vue'
  import { v4 as uuidv4 } from 'uuid'
  import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons-vue'
  import { userForms, FormEnum } from '../index'

  import { userLogin } from '@/api/sys/user'

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
       * loginForm
       * @const
       * @description 登录表单
       */
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
      /**
       * loginRule
       * @const
       * @description 表单的校验规则
       */
      const loginRule = reactive({
        username: [
          { required: true, message: 'Please input your email address!' },
          {
            pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/,
            message: 'Please check your mailbox!',
          },
        ],
        password: [
          { required: true, message: 'Please input your password!' },
          {
            min: 6,
            message: 'Password at least 6',
          },
        ],
      })
      /**
       * @const
       * @description 信息校验
       */
      const { validate, validateInfos } = Form.useForm(loginForm, loginRule)
      /**
       * LoginForm
       * @element
       * @description 用户登录表单
       */
      const LoginSheet = () => {
        return (
          <Form layout={'vertical'}>
            <FormItem label={'Email address'} {...validateInfos.username}>
              <Input v-model:value={loginForm.username} placeholder={'Email address'} />
            </FormItem>
            <FormItem label={'Password'} {...validateInfos.password}>
              <InputPassword v-model:value={loginForm.password} placeholder={'Password'} />
            </FormItem>
            <FormItem>
              <Checkbox v-model:checked={loginForm.remember}>Rememb</Checkbox>
            </FormItem>
          </Form>
        )
      }
      /**
       * @element
       * @description 提交按钮
       */
      const Submit = () => {
        const onSubmit = (e: MouseEvent) => {
          e.stopPropagation()
          validate().then(() => {
            userLogin(toRaw(loginForm)).then((res) => {
              console.log(res)
            })
          })
        }
        return (
          <Button type={'primary'} block={true} size={'large'} onClick={onSubmit}>
            Sign in
          </Button>
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
            title: 'Google',
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
                  {currentItem.title === 'Google' ? <GoogleOutlined /> : <FacebookOutlined />}
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
              <div className={'w-2/3 enter-x'}>
                {FormCaption()}
                {LoginSheet()}
                {Submit()}
                {OtherLogin()}
              </div>
            ) : null}
          </>
        )
      }
    },
  })
</script>
