<template>
  <b-container>
  	<div class="row">
	  	<div class="col-md-6">
			  <Cadastro />
	  	</div>
			<div class="col-md-6">
			  <Procedure />
			</div>
		</div>
  </b-container>
</template>

<script>
import Procedure from './components/Procedure'
import Cadastro from './components/Cadastro'

export default {
  name: 'app',
  components: {
    Cadastro,
    Procedure
  }
}
</script>