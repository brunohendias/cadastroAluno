<template>
  <div>
    <label>{{nome }}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Registro',
  props: ['nome']
};
</script>
