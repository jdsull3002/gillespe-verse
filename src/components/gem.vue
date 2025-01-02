<script setup lang="ts" >
import { IonRow, IonCol } from "@ionic/vue";
import { gemSizeString } from '@/types/gemEnums';

const props = defineProps(['gem']);

</script >

<template >
  <ion-row >
    <ion-col>
      <p>
       <b>Name:</b>  {{gemSizeString[gem.size]}} {{gem.description.name}}<br>
      <b> Desc: </b> {{gem.description.description}}, {{gem.description.opacity}}<br>
      <b> Value:</b>  {{gem.derivedValue.toLocaleString()}} gp
      </p>
    </ion-col>
    <ion-col>
      <img v-if="props.gem.description.image" :src="gem.description.image" alt="">
    </ion-col>
  </ion-row>
</template >
