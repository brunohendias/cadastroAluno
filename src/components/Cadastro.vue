<template>
	<b-container id="cadastro" class="w-50 m-auto">
    <b-form action="registro.php" class="formulario">
    <p class="text-danger h3">Realizar uma inscrição</p>
      <Registro nome="Nome completo* ">
        <b-form-input type="text" v-model="user.name" minlength="5" required pattern="[a-zA-Z\s]+$" />
        <p class="text-danger"> {{ msgName }} </p>
      </Registro>
      <Registro nome="E-mail* ">
        <b-form-input type="email" placeholder="example@example.com" v-model="user.email" required />
        <p class="text-danger"> {{ msgEmail }}</p>
      </Registro>
      <Registro nome="Telefone celular* ">
        <b-form-input type="text" placeholder="(xx) x xxxx xxxx" v-model="user.tell" minlength="16" maxlength="16" v-mask="'(##) # #### ####'" masked required />
      </Registro>
      <b-button class="my-4" @click="validar" type="submit">Enviar</b-button>
    </b-form>
  </b-container>
</template>

<script>
import Registro from './Registro'

export default {

  name: 'cadastro',

  components: {
  	Registro
  },

  methods: {
    validar: function() {
      if(!this.user.name){
        this.msgName = "O campo nome e obrigatorio"
      }else if(!isNaN(this.user.name)){
        this.msgName = 'O campo nome esta invalido apenas letras'
      }else{
        this.msgName = ''
      }
      if(!this.user.email){
        this.msgEmail = "O campo e-mail e obrigatorio"
      }else if(!isNaN(this.user.email)){
        this.msgEmail = 'O campo email esta invalido'
      }else{
        this.msgEmail = ''
      }
    }
  },

  data() {
    return {
    	user: {
        name: '',
        email: '',
        tell: null
      },
      msgName: '',
      msgEmail: '',
    };
  }
};
</script>