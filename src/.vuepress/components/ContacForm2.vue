<template>
  <div id="Contac-Form2" class="demo">
	<input v-model="nombre" placeholder="Nombre" class="cont">
	<BR/>
	<input v-model="apellido" placeholder="Apellido" class="cont">
	<BR/>
	<input v-model="empresa" placeholder="empresa" class="cont">
	<BR/>
	<input v-model="telefono" placeholder="Telefono" class="cont">
	<BR/>
	<input v-model="direccion" placeholder="Direccion" class="cont">
	<BR/>
	<div v-if="enviando" >
		Enviando...
	</div>
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
	
	//Vue.use(VueFormulate)	//import FormulateInput from //'@braid/vue-formulate'
	export default {
		name: 'Contac-Form2',
		//components: { FormulateInput },
		data () {
			return {
				enviando: false,
				nombre: '',
				apellido: '',
				empresa: '',
				telefono: '',
				direccion: ''
			}
		},
		  methods: {
			Enviar: function (event) {
				var mensaje = 'hola me interesa tu propuesta, me llamo ' + this.nombre + ' ' + this.apellido + ' y soy de ' + this.empresa + ', ubicado en ' + this.direccion + ', mi telefono es ' + this.telefono + ' me gustaria saber mas'
				this.enviando = true
				setTimeout(() => { this.enviando=false }, 6000);
				// `this` dentro de los métodos apunta a la instancia de Vue
				//alert('Hola ' + this.message + '!')
				// `evento` es el evento DOM nativo
				var url = "https://api.whatsapp.com/send?phone=+59894736724&text=%20"+mensaje 
				window.open(url, '_blank');
				this.nombre=''
				this.apellido=''
				this.empresa=''
				this.direccion=''
				this.telefono=''
				
				//if (event) {
				//	alert(event.target.tagName)
				//}
			}
		}
	}
</script>