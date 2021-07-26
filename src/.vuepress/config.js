const { description } = require('../../package')

module.exports = {
  base: '/BPM/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'BPM',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '¿Que es?',
        link: 'Quees',
      }
    ],
    sidebar: [
       //   ['Quees', '¿En que consiste?'],
        //   'Quees',   
          ['/area', 'Areas'],
          ['/preguntasyrespuestas', 'PyR'],
          ['/empresas', 'Empresas que usan BPM'],
          ['/preferir', 'Preferir BPM'],
          ['/contacto', 'Contacto'],
        
//      'Quess': [
//        {
//          title: '¿Que es?'//,
//          //collapsable: false,
//          //children: [
//          //  '',
//          //  'using-vue',
//          //]
//        },
//      ],
//      'Areas': { title: 'Areas que barca', 'area' },
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
