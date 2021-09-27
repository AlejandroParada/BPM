import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("d:/ale/codigo/master/BPMx/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("d:/ale/codigo/master/BPMx/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
