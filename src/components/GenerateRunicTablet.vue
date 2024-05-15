<script setup>
import {randomRunicTablet} from "@/barrowMaze/randomRunicTablet";
import {onMounted, ref} from 'vue';
const button = ref(null)
onMounted(()=> {
  console.log(button.value)
})


</script>

<template>
  <div>
    <button ref="button" @click="randomRunicTablet()"></button>
  <textarea>{{results}}</textarea>
  </div>
 </template>

<style scoped>

</style>
