<script lang="tsx">
  import { defineComponent, unref, reactive, computed, ref } from 'vue'
  import { Button, Checkbox, Form, FormItem, Input, InputPassword, notification, Progress } from 'ant-design-vue'
  import type { Rule, FormInstance } from 'ant-design-vue/es/form'
  import { userForms, FormEnum } from '../index'
  import { level } from '@/utils/password/CheckPassword'

  const { userCurrent, setCurrent } = userForms()

  export default defineComponent({
    setup() {
      /**
       * @element
       * @description 表单节点
       */
      const formRef = ref<FormInstance>()
      /**
       * FormCaption
       * @element
       * @description 表单标题
       */
      const FormCaption = () => {
        return (
          <>
            <h3 className={'text-black text-2xl font-semibold'}>Sign up</h3>
            <h5 className={'text-black mb-5'}>
              Already have an account?
              <Button type={'link'} onClick={() => setCurrent(FormEnum.Login)}>
                Sign in
              </Button>
            </h5>
          </>
        )
      }
      /**
       * RegisterForm
       * @interface
       * @description 注册表单类型
       */
      interface RegisterForm {
        username: string
        email: string
        smscode: string
        password: string
        confirmPassword: string
        agree: boolean
      }
      /**
       * registerForm
       * @const
       * @description 注册表单
       */
      const registerForm = reactive<RegisterForm>({
        username: '',
        email: '',
        smscode: '',
        password: '',
        confirmPassword: '',
        agree: false,
      })
      /**
       * RegisterRule
       * @const
       * @description 表单的校验规则
       */
      const validatePass = async (_rule: Rule, value: string) => {
        if (value === '') {
          return Promise.reject(new Error('Please input the password again'))
        }
        if (registerForm.password !== registerForm.confirmPassword) {
          return Promise.reject(new Error("Two inputs don't match!"))
        }
        return Promise.resolve()
      }
      const RegisterRule = reactive({
        username: [
          { required: true, message: 'Please input your name!' },
          {
            min: 3,
            max: 10,
            message: 'username in 3 to 10 characters!',
          },
        ],
        email: [
          { required: true, message: 'Please input your email adress!' },
          {
            pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/,
            message: 'Please check the email address!',
          },
        ],
        password: [
          { required: true, message: 'Please input your password!' },
          {
            min: 6,
            message: 'Password at least 6',
          },
        ],
        confirmPassword: [{ validator: validatePass, trigger: ['blur', 'change'] }],
      })
      /**
       * @const
       * @description 信息校验
       */
      const { validate, validateInfos } = Form.useForm(registerForm, RegisterRule)
      /**
       * RegisterForm
       * @element
       * @description 用户注册表单
       */
      const RegisterFormComponent = () => {
        /**
         * watchPassword
         * @watch
         * @description 监听密码强度
         */
        const watchPassword = computed(() => {
          if (registerForm.password) {
            return level(registerForm.password)
          }
          return {
            color: '#bfbfbf',
            level: 0,
          }
        })
        /**
         * passwordProgress
         * @element
         * @description 密码强度校验器
         */
        const passwordProgress = () => (
          <div className={'grid grid-cols-5 gap-1'}>
            {new Array(5).fill(0).map((element, index) => (
              <Progress
                percent={index < watchPassword.value.level ? 100 : 0}
                showInfo={false}
                strokeColor={watchPassword.value.color}
              />
            ))}
          </div>
        )
        /**
         * checkAgreement
         * @const
         * @description 勾选协议
         */
        const checkAgreement = ref<boolean>(false)
        /**
         * timerAgreement
         * @method
         * @description 动态设置样式
         */
        const timerAgreement = () => {
          checkAgreement.value = true
          setTimeout(() => {
            checkAgreement.value = false
          }, 300)
        }
        /**
         * @element
         * @description 表单
         */
        const RegisterForms = () => (
          <Form ref={formRef} layout={'vertical'}>
            <FormItem {...validateInfos.username}>
              <Input v-model:value={registerForm.username} placeholder={'User Name'} />
            </FormItem>
            <FormItem {...validateInfos.email}>
              <Input v-model:value={registerForm.email} placeholder={'Email Address'} />
            </FormItem>
            <FormItem {...validateInfos.password}>
              <InputPassword v-model:value={registerForm.password} placeholder={'Password'} />
              {passwordProgress()}
            </FormItem>
            <FormItem {...validateInfos.confirmPassword}>
              <InputPassword v-model:value={registerForm.confirmPassword} placeholder={'Confirm Password'} />
            </FormItem>
            <FormItem class={checkAgreement.value && 'animate__bounceIn'}>
              <Checkbox v-model:checked={registerForm.agree}>
                <div className={'whitespace-nowrap ...'}>
                  I have read and accept<Button type={'link'}>terms & conditions</Button>
                </div>
              </Checkbox>
            </FormItem>
          </Form>
        )
        const Submit = () => {
          const onSubmit = (e: MouseEvent) => {
            e.stopPropagation()
            validate().then(() => {
              if (!registerForm.agree) {
                timerAgreement()
                return
              }
              notification.open({
                message: '账户创建成功',
                description: '这是一条模拟数据,模拟用户的账户创建，模板消息请自行修改',
                placement: 'topRight',
              })
            })
          }
          return (
            <Button type={'primary'} size={'large'} block onClick={onSubmit}>
              Create your account
            </Button>
          )
        }
        return (
          <>
            {RegisterForms()}
            {Submit()}
          </>
        )
      }
      return () => (
        <>
          {unref(userCurrent) === FormEnum.Register ? (
            <div className={'w-2/3 enter-x'}>
              {FormCaption()}
              {RegisterFormComponent()}
            </div>
          ) : null}
        </>
      )
    },
  })
</script>
