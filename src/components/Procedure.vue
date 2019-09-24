<template>
    <b-container id="dados_aluno" class="m-auto">
    <h1 class="my-4 text-center">Procedure</h1>
    <b-form class="m-auto" inline>
      <Registro class="w-50" nome="Nome">
	      <b-form-input class="w-100" type="text" v-model="dados_aluno.nome" />
      </Registro>
      <Registro class="w-50" nome="CPF">
        <b-form-input class="w-100" type="text" v-mask="'###.###.###-##'" v-model="dados_aluno.cpf" />
      </Registro>
      <Registro class="w-25 p-2" v-for="i in 6" :nome="'Nota ' + i">
        <b-form-input class="w-100" type="text" maxlength="5" v-model="dados_aluno.notas[i-1]" />
      </Registro>
      <Registro class="w-50" nome="Media: ">
        <b-form-input type="text" class="w-100" readonly :value="dados_aluno.media.toFixed(2) + ' ' + resultado" :class="corResultado" />
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
      if(this.dados_aluno.notas != ''){
	      for(let i=0;i < this.dados_aluno.notas.length;i++){
          this.dados_aluno.notas[i].replace(",", ".")
	        this.total += parseFloat(this.dados_aluno.notas[i])
	      }
	      this.dados_aluno.media = this.total / this.dados_aluno.notas.length
        if(this.dados_aluno.media >= 5){
          this.corResultado = 'text-success'
          this.resultado = 'Aprovado'
        }else{
          this.corResultado = 'text-danger'
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
      corResultado: '',
      resultado: '',
    };
  },
};
</script>
