<script setup lang="ts">

import BasePage from "@/pages/BasePage.vue";
import {ref, computed} from 'vue';
import {gemInTreasure} from "@/shared/treasureGems";

import {IonItem, IonButton, IonInput} from "@ionic/vue";
import {GemTreasure} from "@/types/gemEnums";


const numberOfGems: number = ref(20);
const response: GemTreasure[] = ref([]);
const totalValue: number = computed(()=>{
  let tVal = 0;
  response.value.map(stone => tVal = tVal + stone.baseValue);
  return tVal;
});

function generateGems() {
  response.value = [];
  for (let i = 0; i < numberOfGems.value; i++) {
    response.value.push(gemInTreasure());
  }
}

</script>

<template>
  <BasePage>
    <template v-slot:header>
      <header>
        <div class="wrapper">
          <h1>AD&D 1e Gem Generator</h1>
        </div>
      </header>
    </template>

    <template v-slot:default>
      <main>
        <div>
          <ion-item>
            <ion-input label="Number of gems in the haul" type="number" v-model="numberOfGems"
                       :value="numberOfGems"></ion-input>
            <ion-button @click="generateGems">generate</ion-button>
          </ion-item>
        </div>

        <div v-for="(gem, key) in response" :key="key">
          <p>
            {{gem.description.name}}<br>
            {{gem.description.description}}, {{gem.description.opacity}}<br>
            {{gem.size}}<br>
            {{gem.baseValue}}
          </p>
        </div>
        <div>
          {{totalValue}}
        </div>
      </main>
    </template>
  </BasePage>
</template>

<style scoped>

</style>
