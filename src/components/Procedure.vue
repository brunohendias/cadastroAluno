<template>
	<b-container id="dados_aluno" class="w-75 m-auto">
		<h1 class="my-4 text-center">Procedure</h1>
    
    <b-form inline class="w-75 m-auto">
    	<Registro nome="Nome">
  			<b-form-input type="text" v-model="dados_aluno.nome" />
      </Registro>
    	<Registro nome="CPF :">
  			<b-form-input type="text" v-mask="'###.###.###-##'" v-model="dados_aluno.cpf" />
      </Registro>
    	<Registro nome="Nota 1:">
  			<b-form-input type="text" maxlength="5" v-model="dados_aluno.notas[0]"/>
      </Registro>
    	<Registro nome="Nota 2:">
  			<b-form-input type="text" maxlength="5" v-model="dados_aluno.notas[1]"/>
      </Registro>
    	<Registro nome="Nota 3:">
  			<b-form-input type="text" maxlength="5" v-model="dados_aluno.notas[2]"/>
      </Registro>
    	<Registro nome="Nota 4:">
  			<b-form-input type="text" maxlength="5" v-model="dados_aluno.notas[3]"/>
      </Registro>
    	<Registro nome="Nota 5:">
  			<b-form-input type="text" maxlength="5" v-model="dados_aluno.notas[4]"/>
      </Registro>
    	<Registro nome="Nota 6:">
  			<b-form-input type="text" maxlength="5" v-model="dados_aluno.notas[5]"/>
      </Registro><br>
      <Registro v-if="dados_aluno.media" nome="Media: ">
        <b-form-input :value="dados_aluno.media.toFixed(2) + ' ' + resultado" :class="notaFinal" />
      </Registro>
      <b-button class="my-3" @click="calcularMedia()">Calcular Media</b-button>

    </b-form>
  
  </b-container>
</template>

<script>
import Registro from './Registro'

export default {

  name: 'Procedure',

  components: {
    Registro
  },

  methods: {
  	calcularMedia(){
      if(this.dados_aluno.notas != []){
    		for(let i=0;i < this.dados_aluno.notas.length;i++){
    			this.total += parseFloat(this.dados_aluno.notas[i])
    			this.dados_aluno.media = this.total / this.dados_aluno.notas.length
    		}
        if(this.dados_aluno.media >= 5){
          this.notaFinal = 'text-success'
          this.resultado = 'Aprovado'
        }else{
          this.notaFinal = 'text-danger'
          this.resultado = 'Reprovado'
        }
        this.dados_aluno.notas = []
        this.total = 0
        this.dados_aluno.cpf = ''
        this.dados_aluno.nome = ''
      }
  	}
  },

  data() {
    return {
    	dados_aluno: {
    		nome: '',
    		cpf: '',
    		notas: [],
    		media: 0
    	},
    	total: 0,
      notaFinal: '',
      resultado: '',
    };
  },
};
</script>
<style lang="css" scoped>
  input{
    margin-right: 20px;
  }
</style>