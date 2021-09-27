const getLogger = require('webpack-log');
const log = getLogger({ name: 'webpack-verificador' });

const { description } = require('../../package')
const { path } = require('@vuepress/utils')
//const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//const ScriptExtHtmlWebpackPlugin = require('Script-Ext-Html-Webpack-Plugin')
//var BrotliPlugin = require('brotli-webpack-plugin');
//const refeshx = require('refresh.js')
const cdn = 'https://cdn.jsdelivr.net/gh/AlejandroParada/BPM@gh-pages/'
//var HtmlWebpackPreconnectPlugin = require('html-webpack-preconnect-plugin')

module.exports = {
  base: '/BPM/',
  //base: cdn,
 // base: '/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'BPM',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Buenas Practicas de Manufactura',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
	['link', { rel: 'icon', href: 'https://alejandroparada.github.io/BPM/favicon.ico?v=2', sizes: '16x16' }],
	['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon-152x152.png', sizes: '152x152' }],
	['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon-120x120.png', sizes: '120x120' }],
	['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon-76x76.png', sizes: '76x76' }],
	['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon-60x60.png', sizes: '60x60' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  locales: {
	  '/': { lang: 'es-ES',title: 'BPM' },
	  // '/en/': {  lang: 'en-US', title: 'BPM' },
	  // '/pt/': {  lang: 'pt-PT', title: 'BPM' },
  },
  themeConfig: {
	locales: {
	  '/': {
		selectLanguageName: 'Español',
		// text for the language dropdown
        //selectText: 'Idioma',
        // label for this locale in the language dropdown
        //label: 'Español',
        // Aria Label for locale in the dropdown
        //ariaLabel: 'Idioma',

		//repo: '',
		//editLinks: false,
		//docsDir: '',
		lastUpdated: 'Ultima actualizacion',
		//smoothScroll: true,
		nav: true,
		navbar: [
			{text: '¿Que es?', link: 'QueEs'},
			{ text: 'Su opinion nos importa', link: 'https://forms.gle/axEpEzTruRkBewMu9' },
		],
		sidebar: [
	   //   ['Quees', '¿En que consiste?'],
		//   'Quees',

		  { text: 'Areas', link: '/area'},
		  { text: 'Preguntas Frecuentes', link: '/preguntasyrespuestas' },
		  { text: 'Quienes usan BPM', link: '/empresas' },
		  { text: 'Ganar Ganar', link: '/ganarganar' },
		  { text: 'Mision', link: '/mision' },
		  { text: 'Vision',  link: '/vision' },
		  // { text: 'Responsabilidad Social', link: '/responsabilidadsocial' },
		  { text: 'Nosotros', link: '/nosotros' },
		  { text: 'Preferir BPM', link: '/preferir' },
		  { text: 'Diseño App/Web', link: '/disenio' },
		  // { text: 'Trabaja con nosotros', link: '/trabajaconnosotros'  },
		  { text: 'Contacto', link: '/contacto' },
		]
	  },

	  '/en/': {
		  selectLanguageName: 'English',
		// text for the language dropdown
        //selectText: 'Language',
        // label for this locale in the language dropdown
        //label: 'English',
        // Aria Label for locale in the dropdown
        //ariaLabel: 'Language',
		//repo: '',
		//editLinks: false,
		//docsDir: '',
		lastUpdated: true,
		//smoothScroll: true,

		navbar: [
		  { text: 'What is BPM?',  link: 'QueEs' },
		],
		sidebar: [
	   //   ['Quees', '¿En que consiste?'],
		//   'Quees',
		   {link: '/en/area', text: 'Subjects'},
		   {link: '/en/preguntasyrespuestas', text: 'FAQ'},
		   {link: '/en/empresas', text: 'Who use BPM?'},
		   {link: '/en/ganarganar', text: 'Win Win'},
		   {link: '/en/mision', text: 'Mision'},
		   {link: '/en/vision', text: 'Vision'},
		   {link: '/en/responsabilidadsocial', text: 'Social Responsability'},
		   {link: '/en/nosotros', text: 'About us'},
		   {link: '/en/preferir', text: 'Prefer BPM'},
		   {link: '/en/disenio', text: 'Design App/Web'},
		   // {link: '/en/trabajaconnosotros', text: 'Work with us'},
		   // {link: '/en/contacto', text: 'Contact'}
		]
	  },
	  '/pt/': {
		  selectLanguageName: 'Portugues',
		// text for the language dropdown
        //selectText: 'Linguagen',
        // label for this locale in the language dropdown
        //label: 'Portuges',
        // Aria Label for locale in the dropdown
        //ariaLabel: 'Linguagen',
		//repo: '',
		//editLinks: false,
		//docsDir: '',
		lastUpdated: true,
		//smoothScroll: true,

		navbar: [
			{
				text: 'What is BPM?', link: 'QueEs'
			},
		],
		sidebar: [
	   //   ['Quees', '¿En que consiste?'],
		//   'Quees',
		  {link: '/pt/area', text: 'Subjects'},
		  {link: '/pt/preguntasyrespuestas', text: 'FAQ'},
		  {link: '/pt/empresas', text: 'Who use BPM?'},
		  {link: '/pt/ganarganar', text: 'Win Win'},
		  {link: '/pt/mision', text: 'Mision'},
		  {link: '/pt/vision', text: 'Vision'},
		  {link: '/pt/responsabilidadsocial', text: 'Social Responsability'},
		  {link: '/pt/nosotros', text: 'About us'},
		  {link: '/pt/preferir', text: 'Prefer BPM'},
		  {link: '/pt/disenio', text: 'Design App/Web'},
		  {link: '/pt/trabajaconnosotros', text: 'Work with us'},
		  {link: '/pt/contacto', text: 'Contact'}
		]
	  },
	}
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
//  plugins: [
//      [
//		  '@vuepress/search', { searchMaxSuggestions: 10 },
//		  '@vuepress/register-components',
//		  {
//			components: {
//			  // mycarousel: path.resolve(__dirname, './components/mycarousel.vue'),
//			 contactform: path.resolve(__dirname, './components/contactform.vue'),
//			},
//		  },
//		],
//	 ],
		// [
		  // '@vuepress/plugin-search',
		  // {
			// locales: {
			  // '/': { placeholder: 'Buscar' },
			  // '/en/': { placeholder: 'Search' },
			  // '/pt/': { placeholder: 'Buscarp' },
			// },
		  // }
		 // ]
	// 'sitemap', {
		// hostname: 'https://alejandroparada.github.io/BPM'
    // },
	// 'seo', {
		// siteTitle: (_, $site) => $site.title,
		// title: $page => $page.title,
		// description: $page => $page.frontmatter.description,
		// author: (_, $site) => $site.themeConfig.author,
		// tags: $page => $page.frontmatter.tags,
		// twitterCard: _ => 'summary_large_image',
		// type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
		// url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
		// image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image),
		// publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
		// modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
	// },
	// 'img-lazy',
    //'@silvanite/tailwind',
//    '@vuepress/back-to-top',
//    '@vuepress/plugin-medium-zoom',
//    '@vuepress/pwa',
//	  {
//        serviceWorker: true,
//        updatePopup: true
//      }
	bundler: '@vuepress/bundler-webpack',
	bundlerConfig: {
        configureWebpack: (config, isServer, isBuild) => {
			const NODE_ENV = process.env.NODE_ENV
			const cdn = 'https://cdn.jsdelivr.net/gh/AlejandroParada/BPM@gh-pages/'
			if(isBuild){
			  return {
				output:{
					publicPath: 'https://cdn.jsdelivr.net/gh/AlejandroParada/BPM@gh-pages/'
				},
				resolve: {
				  // Configure path alias
				  alias: {
					'public': path.resolve(__dirname, './dist')
				  }
				}
			  }
	//		  log.info('entro al resolve')
			}else{
				log.info('Si es dev!!');
			  return {
				resolve: {
				  // Configure path alias
				  alias: {
					'public': path.resolve(__dirname, './dist')
				  }
				}
			  }
			}
	// entry: path.resolve(__dirname, 'js/app.js'),
	// output, {
		// path: path.resolve(__dirname, './dist'),
		// filename: '[name].[contenthash].js',
	// },
	optimization, {
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all',
			maxInitialRequests: Infinity,
			minSize: 0,
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name(module) {
						// get the name. E.g. node_modules/packageName/not/this/part.js
						// or node_modules/packageName
						const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

						// npm package names are URL-safe, but some servers don't like @ symbols
						return `npm.${packageName.replace('@', '')}`;
					},
				},
			},
		},
	 }

	// chainWebpack: config, isServer => {
		// config.module
			// .preLoader, (
					// {
						// test: /\.(jpe?g|png|gif|svg)$/i,
						// loader: "url-loader?name=assets/img/[name].[ext]"
				// }
			// )
/*
		config.module
		  .rule('images')
			.test(/\.(png|jpg|jpe|webp|git|svg|)$/i)
			.use('img-optimize-loader')
			  .loader('img-optimize-loader')
			  .options({
				name: '[name].zz.[ext]',
				compress: {
					// mode: 'high'
				  // This will transform your png/jpg into webp.
				  webp: true,
				  disableOnDevelopment: false
				}
			  })
			.end()
*/
		// config.module
		  // .rule('images')
			// .test(/\.(png|jpe?e)$/i)
			// .use('img-optimize-loader')
			  // .loader('file-loader')
			  // .loader('webp-loader')
			// .end()

		// if (!isServer) {
			// config
				// .plugin("webpack-bundle-analyzer")
				// .use(BundleAnalyzerPlugin)
				// .init(Plugin => new Plugin());
			// config
				// .plugin("Html-Webpack-Plugin")
				// .init(Plugin => new Plugin({title: 'Caching'}))
				// .plugin("Script-Ext-Html-Webpack-Plugin")
				// .init(Plugin => new Plugin({prefetch: /\.js$/}));
				// .init(Plugin => new Plugin({defer: /\.js$/}));
		// }
			// config
				// .plugin("brotli-webpack-plugin")
				// .init(Plugin => new Plugin({
					// asset: '[path].br[query]',
					// test: /\.(js|css|html|svg)$/,
					// threshold: 10240,
					// minRatio: 0.8
		// }))
	  // }
	  // }
	//	log.info("Termino el publicPath");
	//	log.info(__webpack_public_path__);
	}
	
  }
}