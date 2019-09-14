<template>
  <b-container>
    <b-row>
      <b-col md="6">
        <Cadastro />
      </b-col>
      <b-col md="6">
        <Procedure />
      </b-col>
    </b-row>
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
=======
<template>
  <b-container>
  	<b-row>
	  	<b-col md="6">
				<Cadastro />
	  	</b-col>
			<b-col md="6">
			  <Procedure />
			</b-col>
		</b-row>
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
>>>>>>> 9a3dd414a4c14a8c1a6b81de5fb4d9fac146e00d
