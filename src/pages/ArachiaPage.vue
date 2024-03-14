<script setup>
import {nextTick, ref} from "vue";

import BasePage from "@/pages/BasePage.vue";

import {generatePatronList} from "@/archaia/saucyTart";
import {generatePitContents} from "@/barrowMaze/pitContents";
import {generateRestock} from "@/barrowMaze/dungeonRestock";
import {generateRandomMonster} from "@/archaia/randomMonster";

const presentResults = ref(false);
const result = ref('');

const selectedArea = ref('');

let isMarkup = false;

async function clickHandler(table, supplemental_param= null) {
  await nextTick();
  result.value = '';
  isMarkup = false;

  switch (table){
    case 'saucyTart':
      isMarkup = true;
      result.value = generatePatronList(supplemental_param);
      break;

    case 'pitContents':
      result.value =generatePitContents();
      break;

    case 'restock':
      result.value = generateRestock();
      break;

    default:
      break;
  }

  presentResults.value = !presentResults.value;
}
function generateRandomEncounter(area, level)
{
  result.value = generateRandomMonster(area, level);
  presentResults.value = !presentResults.value;
  selectedArea.value = '';
}
</script>

<template>
  <BasePage>
    <template v-slot:header>
      <header>
        <div class="wrapper">
         <h1>Caverns of Archaia</h1>
        </div>
      </header>
    </template>

    <template v-slot:default v-show="!presentResults">
      <main v-show="!presentResults">
        <div>
          <h2>Table 1:Saucy Tart Random Patron Generator</h2>
          <div>
            <ion-button color="secondary" @click="clickHandler('saucyTart', 'Morning')">Morning</ion-button>
            <ion-button color="warning" @click="clickHandler('saucyTart', 'Afternoon')">Noon</ion-button>
            <ion-button color="tertiary" @click="clickHandler('saucyTart', 'Evening')">Evening</ion-button>
          </div>
        </div>

        <div>
          <h2>Table 2: Random Monster Tables</h2>
          <div v-show="selectedArea == ''">
            <ion-button @click="selectedArea = 'arches'">Ruined Arches</ion-button>
            <ion-button  @click="selectedArea = 'caverns'">Caverns</ion-button>
            <ion-button  @click="selectedArea = 'crypts'">Crypts</ion-button>
            <ion-button  @click="selectedArea = 'sewers'">Sewers</ion-button>
          </div>
          <div v-show="selectedArea != ''">
            <ion-button @click="generateRandomEncounter(selectedArea, 'low')">Levels 1-3</ion-button>
            <ion-button  @click="generateRandomEncounter(selectedArea, 'high')"> Levels 4-7</ion-button>
            <ion-button @click="selectedArea = ''">Go Back</ion-button>
          </div>

        </div>

        <div>
          <h2>Table 3: Pit Contents</h2>
          <div>
            <ion-button @click="clickHandler('pitContents')">Make a roll </ion-button>
          </div>
        </div>

        <div>
          <h2>Table 4: Dungeon Restock</h2>
          <ion-button @click="clickHandler('restock')">Make a roll </ion-button>
        </div>

      </main>
    </template>
    <template v-slot:result>
      <div v-show="presentResults">

        <div v-if="isMarkup">
          <h2>{{result.timeOfDay}}</h2>
          <p v-for="patron, index in result.patrons" :key="index">{{patron}}</p>
        </div>

        <div v-else>
          <p>{{ result }}</p>
        </div>

        <ion-button @click=" presentResults= !presentResults">Go Back</ion-button>
      </div>
    </template>
  </BasePage>

</template>

<style scoped>

</style>
