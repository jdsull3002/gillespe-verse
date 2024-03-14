<script setup>
import {nextTick, ref} from "vue";

import BasePage from "@/pages/BasePage.vue";

import {randomRunicTablet} from "@/barrowMaze/randomRunicTablet";
import {randomDungeonDressing} from "@/barrowMaze/dungeonDressing";
import {generateRandomEncounter} from "@/barrowMaze/randomEncounter";
import {generatePatronList} from "@/barrowMaze/brazenStrumpet";
import {generateSarcophagusContents} from "@/barrowMaze/randomSarcophagus";
import {generateWallGraffiti} from "@/barrowMaze/graffiti";
import {generatePitContents} from "@/barrowMaze/pitContents";
import {generateRestock} from "@/barrowMaze/dungeonRestock";

const presentResults = ref(false);
const result = ref('');
let isMarkup = false;

async function clickHandler(table, supplemental_param= null) {
  await nextTick();
  result.value = '';
  isMarkup = false;

  switch (table){
    case 'tablet':
      result.value = randomRunicTablet();
      break;

    case 'dungeonDressing':
      result.value = randomDungeonDressing();
      break;

    case 'randomEncounter':
      //pop a modal with 5 radios.
      result.value = generateRandomEncounter(supplemental_param);
      break;

    case 'brazenStrumpet':
      isMarkup = true;
      result.value = generatePatronList(supplemental_param);
      break;
    case 'sarcophagus':
      result.value = generateSarcophagusContents();
      break;

    case 'graffiti':
      result.value = generateWallGraffiti();
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
  console.log()
  presentResults.value = !presentResults.value;
}

</script>

<template>
  <BasePage>
    <template v-slot:header>
      <header>
        <div class="wrapper">
          <h1>Barrowmaze</h1>
        </div>
      </header>
    </template>

    <template v-slot:default v-show="!presentResults">
      <main v-show="!presentResults">
        <div>
          <h2>Table 1: Random Encounters</h2>
          <div>
            <ion-button color="primary" @click="clickHandler('randomEncounter', 'level_low')">L 1-2</ion-button>
            <ion-button color="success" @click="clickHandler('randomEncounter', 'level_med')">L 3-4</ion-button>
            <ion-button color="warning" @click="clickHandler('randomEncounter', 'level_mid')">L 5-6</ion-button>
            <ion-button color="danger" @click="clickHandler('randomEncounter', 'level_high')">L 7-8</ion-button>
          </div>
        </div>

        <div>
          <h2>Table 2: Brazen Strumpet Random Patron Generator</h2>
          <div>
            <ion-button color="secondary" @click="clickHandler('brazenStrumpet', 'Morning')">Morning</ion-button>
            <ion-button color="warning" @click="clickHandler('brazenStrumpet', 'Afternoon')">Noon</ion-button>
            <ion-button color="tertiary" @click="clickHandler('brazenStrumpet', 'Evening')">Evening</ion-button>
          </div>
        </div>

        <div>
          <h2>Table 3: Dungeon Dressing</h2>
          <div>
            <ion-button @click="clickHandler('dungeonDressing')">Make a roll </ion-button>
          </div>
        </div>

        <div>
          <h2>Table 4: Pit Contents</h2>
          <div>
            <ion-button @click="clickHandler('pitContents')">Make a roll </ion-button>
          </div>
        </div>

        <div>
          <h2>Table 5: Graffiti</h2>
          <div>
            <ion-button @click="clickHandler('graffiti')">Make a roll </ion-button>
          </div>
        </div>


        <div>
          <h2>Table 6: Runic Tablet Result</h2>
          <div>
            <ion-button @click="clickHandler('tablet')">Make a roll </ion-button>
          </div>
        </div>

        <div>
          <h2>Table 7: Dungeon Restock</h2>
            <ion-button @click="clickHandler('restock')">Make a roll </ion-button>
        </div>

        <div>
          <h2>Table 8: Sarcophagus Contents</h2>
          <div>
            <ion-button @click="clickHandler('sarcophagus')">Make a roll </ion-button>
          </div>
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
.response {
  width: 400px;
  overflow: auto;
}
</style>
