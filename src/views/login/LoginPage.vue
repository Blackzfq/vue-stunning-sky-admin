<script lang="ts" setup>
  import Advertising from './components/prompter/AdvertisingCopy.vue'
  import Copyright from './components/copyright/WebCopyright.vue'
  import LoginForm from './components/loginForm/LoginForm.vue'
  import RegisterForm from './components/registerForm/RegisterForm.vue'
</script>

<template>
  <div class="min-h-screen w-full bg-[#ebecee]">
    <div
      class="grid grid-cols-2 w-full xl:w-[1200px] min-h-[600px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl overflow-hidden"
    >
      <div class="bg-[#267dff] relative overflow-hidden flex flex-col justify-between items-start pt-10 pb-2 px-12">
        <!-- 装饰 -->
        <div
          class="w-[200px] h-[200px] absolute bottom-10 -right-24 bg-[#fff] rounded-full before:content-[''] before:absolute before:bg-[#267dff] before:w-[100px] before:h-[100px] before:rounded-full before:bottom-12 before:right-12"
        ></div>
        <div>
          <!-- logo -->
          <h1 class="text-xl font-semibold text-white mb-12">Tusky Admin</h1>
          <!-- 广告 -->
          <Advertising />
        </div>
        <!-- 版权信息 -->
        <Copyright />
      </div>
      <div class="bg-[#fff] flex justify-center items-center">
        <!-- 装饰 -->
        <div
          class="w-[200px] h-[200px] absolute top-10 -right-24 bg-[#ebecee] rounded-full before:content-[''] before:absolute before:bg-[#fff] before:w-[100px] before:h-[100px] before:rounded-full before:bottom-12 before:right-12"
        ></div>
        <!-- 表单 -->
        <LoginForm />
        <RegisterForm />
      </div>
    </div>
  </div>
</template>
