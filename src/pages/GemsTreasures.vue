<script setup lang="ts">
import BasePage from "@/pages/BasePage.vue";
import {ref, computed, ComputedRef, Ref} from 'vue';
import {gemInTreasure} from "@/shared/treasureGems";

import { IonButton, IonInput, IonGrid, IonRow, IonCol } from "@ionic/vue";
import {GemTreasure} from "@/types/gemEnums";
import Gem from "@/components/gem.vue";

const numberOfGems: Ref<number> = ref(0);
const response: Ref<GemTreasure[]> = ref([]);
const totalValue: ComputedRef<number> = computed(()=>{
  let tVal = 0;
  response?.value.map(stone => tVal = tVal + stone.derivedValue);
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
          <span style="display: block">Number of gems in the haul</span>

          <ion-input type="number"
                     min="0"
                     v-model="numberOfGems"
                     :value="numberOfGems"
                     class="gemInput"
          />


          <p>
            <ion-button
                @click="generateGems"
                :disabled="numberOfGems== 0"
                size="large"
                 >Generate Gems</ion-button>
        </p>

        </div>



        <ion-grid>
          <ion-row>
            <ion-col v-for="(gem, key) in response"
                 :key="key"
                 size="12" >

              <gem :gem="gem"></gem>
            </ion-col>
          </ion-row>
        </ion-grid>

        <div v-if="totalValue > 0">
          <h3> Total Value:  <span>{{totalValue.toLocaleString()}} gp</span></h3>
        </div>
      </main>
    </template>
  </BasePage>
</template>

<style lang="scss">
ion-row {
  span {
    display: block;
  }
}
.gemInput {
  display: block;
  font-size: 32px;
  text-align: center;
  width: 30%;
  margin: 0 auto;
}

ion-grid {

  --ion-grid-padding: 20px;

  --ion-grid-padding-xs: 20px;
  --ion-grid-padding-sm: 20px;
  --ion-grid-padding-md: 20px;
  --ion-grid-padding-lg: 20px;
  --ion-grid-padding-xl: 20px;

  --ion-grid-column-padding: 5px;

  --ion-grid-column-padding-xs: 5px;
  --ion-grid-column-padding-sm: 10px;
  --ion-grid-column-padding-md: 15px;
  --ion-grid-column-padding-lg: 20px;
  --ion-grid-column-padding-xl: 25px;
}

ion-row {
  gap: 5px;
}

</style>
