<template>
  <div>
	<input v-model="nombre" placeholder="Nombre" class="cont">
	<BR/>
	<input v-model="apellido" placeholder="Apellido" class="cont">
	<BR/>
	<input v-model="empresa" placeholder="empresa" class="cont">
	<BR/>
	<div class="home">
		<div class="hero">
	<button v-on:click="Enviar" class="nav-link action-button">Enviar</button>
		</div>
	</div>
  </div>
</template>

<script>

	//import VueFormulate from '@braid/vue-formulate'
	//import FormulateInput from '@braid/vue-formulate'
	
	//Vue.use(VueFormulate)	//import FormulateInput from '@braid/vue-formulate'
	export default {
		//name: 'contactform',
		//components: { FormulateInput },
		data () {
			return {
				nombre: '',
				apellido: '',
				empresa: ''
			}
		},
		  methods: {
			Enviar: function (event) {
				// `this` dentro de los métodos apunta a la instancia de Vue
				//alert('Hola ' + this.message + '!')
				// `evento` es el evento DOM nativo
				var url = "https://api.whatsapp.com/send?phone=+59894736724&text=%20"+this.message
				window.open(url, '_blank');
				
				
				//if (event) {
				//	alert(event.target.tagName)
				//}
			}
		}
	}
</script>

<style>
  .cont {width: -webkit-fill-available;}
  input.cont {
    margin-top: 6px;
	}
  @media (max-width: 419px)
  .cont {width: -webkit-fill-available;}
  
  @media (max-width: 959px)
  .cont {width: 200px;}
  
</style>