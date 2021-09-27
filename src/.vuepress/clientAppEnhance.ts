import { defineClientAppEnhance } from '@vuepress/client'
import ContacForm2 from './components/ContacForm2.vue'


export default defineClientAppEnhance(({ app, router, siteData }) => {// ...
  app.component('ContacForm2', ContacForm2)
})