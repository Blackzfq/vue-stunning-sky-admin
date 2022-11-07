<script lang="ts" setup>
  import 'animate.css'
</script>

<template>
  <AConfigProvider prefix-cls="custom-default">
    <RouterView v-slot="{ Component, route }">
      <Transition :enter-active-class="`animate__animated ${route.meta.transition}`">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </AConfigProvider>
</template>
