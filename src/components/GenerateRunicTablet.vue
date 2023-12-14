<script setup>
import {randomRunicTablet} from "@/barrowMaze/randomRunicTablet";

</script>

<template>
  <div>
    <button @click="randomRunicTablet()"></button>
  <textarea>{{results}}</textarea>
  </div>
 </template>

<style scoped>

</style>
