<script lang="tsx">
  import { LayoutContent } from 'ant-design-vue'
  import { defineComponent, Transition } from 'vue'
  import type { Component } from 'vue'
  import { RouterView } from 'vue-router'
  import type { RouteLocationNormalized } from 'vue-router'

  export default defineComponent({
    setup() {
      return () => (
        <LayoutContent>
          <RouterView>
            {(scope: { Component: Component; route: RouteLocationNormalized }) => (
              <Transition enterActiveClass={`animate__animated ${scope.route.meta.transition}`}>
                {scope.Component}
              </Transition>
            )}
          </RouterView>
        </LayoutContent>
      )
    },
  })
</script>
