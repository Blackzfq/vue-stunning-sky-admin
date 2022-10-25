<script lang="ts" setup>
  import 'animate.css'
  import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <RouterView v-slot="{ Component, route }">
      <Transition :enter-active-class="`animate__animated ${route.meta.transition}`">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </ElConfigProvider>
</template>
