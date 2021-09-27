<template>
  <div>
    <VueSlickCarousel :arrows="true" :dots="true" :autoplay="true">
      <div><img src="../../../assets/img/grido.jpg" width="331" height="201" border="0" alt="" /></div>
      <div>2</div> 
      <div>3</div>
      <div>4</div>
    </VueSlickCarousel>
  </div>
</template>

<script>
	import lazyLoadComponent from './lazy-load-component';
	import SkeletonBox from './SkeletonBox.vue';	

//	import VueSlickCarousel from 'vue-slick-carousel'
  
  //import ImgLazy from 'vuepress-plugin-img-lazy/ImgLazy' 
	import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  
  //optional style for arrows & dots
	import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

	const defaultOptions = {
	  loading: SkeletonBox,
	  loadingData: {
		props: {
		  width: `100%`,
		  height: `20em`,
		},
	  },
	};

	const imp = function () {
		console.log("esta cargando componente")
		import(`vue-slick-carousel`);
		console.log("paso 1")
		import(`vue-slick-carousel/dist/vue-slick-carousel.css`);
		console.log("paso 2")
		import(`vue-slick-carousel/dist/vue-slick-carousel-theme.css`);
		console.log("paso 3")
	
	}

	function loadjscssfile(filename, filetype){
		if (filetype=="js"){ //if filename is a external JavaScript file
			var fileref=document.createElement('script')
			fileref.setAttribute("type","text/javascript")
			fileref.setAttribute("src", filename)
		}
		else if (filetype=="css"){ //if filename is an external CSS file
			debugger
			var fileref=document.createElement("link")
			fileref.setAttribute("rel", "stylesheet")
			fileref.setAttribute("type", "text/css")
			fileref.setAttribute("href", filename)
		}
		if (typeof fileref!="undefined")
			document.getElementsByTagName("head")[0].appendChild(fileref)
	}

	export default {
		name: 'mycarousel',
		components: { 
			VueSlickCarousel: lazyLoadComponent({
      ...defaultOptions, componentFactory: () => import(`vue-slick-carousel`)
//		.then(loadjscssfile("vue-slick-carousel/dist/vue-slick-carousel.css", "css")) 
    }),
		},  
	}
</script>
