<template>
    <h3>Propiedades Computadas</h3>
    <input type="text" v-model="valor"></input>
    {{ valorCalculado}}
    <ResultadoSection v-if="mostarElemento":resultado="valorCalculado"></ResultadoSection>
    <div v-else-if="isNaN(valor)">Debe ser un numero para calcular</div>
    <div v-else>aqui no se muestra nada</div>
</template>

<script setup>
import {ref, computed} from 'vue';
import ResultadoSection from '../components/ResultadoSection.vue';
const valor = ref('');
const valorCalculado = computed(()=>{
    return valor.value *3
});
const mostarElemento = computed(()=>{
    return valor.value > 10;
});
</script>


<style scoped>


</style>