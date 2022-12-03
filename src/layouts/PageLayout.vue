<script setup lang="ts">
  import { Layout } from 'ant-design-vue'
  import LayoutHeader from './components/header/LayoutHeader.vue'
  import LayoutContent from './components/content/LayoutContent.vue'
  import LayoutFooter from './components/footer/LayoutFooter.vue'
  import LayoutSlider from './components/slider/LayoutSlider.vue'
</script>

<template>
  <Layout class="h-full">
    <!-- <LayoutSlider /> -->
    <Layout>
      <LayoutHeader />
      <Layout>
        <LayoutSlider />
        <LayoutContent />
      </Layout>
      <LayoutFooter />
    </Layout>
  </Layout>
</template>
