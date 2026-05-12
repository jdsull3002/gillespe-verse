<script setup lang="ts" >

import BasePage from "@/pages/BasePage.vue";
import {IonPicker, IonButton} from '@ionic/vue'
</script >

<template >
<BasePage>
  <template v-slot:header>
   <h1>List of Gems </h1>
    <div>
      <ion-button>Ornamental</ion-button>
      <ion-button>Semi-precious</ion-button>
      <ion-button>Fancy</ion-button>
      <ion-button>Precious</ion-button>
      <ion-button>Gems</ion-button>
    </div>
    <ion-picker>
      <picker-column value="javascript">
        <picker-column-option value="" disabled="true">--</picker-column-option>
        <picker-column-option value="javascript">Javascript</picker-column-option>
        <picker-column-option value="typescript">Typescript</picker-column-option>
        <picker-column-option value="rust">Rust</picker-column-option>
        <picker-column-option value="c#">C#</picker-column-option>
      </picker-column>
    </ion-picker>
    <ion-searchbar></ion-searchbar>
  </template>

  <template v-slot:default>
  </template>
</BasePage>
</template >

<style scoped >

</style >
