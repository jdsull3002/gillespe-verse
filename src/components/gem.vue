<script setup lang="ts" >
    const props = defineProps(['gem'])
</script >

<template >
  <ion-row style="border: 1px solid red;">
    <ion-col style="border: 1px solid blue;">
      <p>
       <b>Name:</b>  {{gem.size}} {{gem.description.name}}<br>
      <b> Desc: </b> {{gem.description.description}}, {{gem.description.opacity}}<br>
      <b> Value:</b>  {{gem.baseValue}} gp
      </p>
    </ion-col>
    <ion-col style="border: 1px solid blue;">
      <img v-if="props.gem.description.image" :src="gem.description.image" alt="">
    </ion-col>
  </ion-row>
</template >
