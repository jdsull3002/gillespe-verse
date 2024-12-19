<script setup lang="ts" >
    const props = defineProps(['gem'])
</script >

<template >
  <ion-row >
    <ion-col>
      <p>
       <b>Name:</b>  {{gem.size}} {{gem.description.name}}<br>
      <b> Desc: </b> {{gem.description.description}}, {{gem.description.opacity}}<br>
      <b> Value:</b>  {{gem.baseValue}} gp
      </p>
    </ion-col>
    <ion-col>
      <img v-if="props.gem.description.image" :src="gem.description.image" alt="">
    </ion-col>
  </ion-row>
</template >
