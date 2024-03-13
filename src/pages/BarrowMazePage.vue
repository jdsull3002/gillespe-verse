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

let tablet = ref('make a roll');
let dd = ref('make a roll');
let brSt = ref('make a roll');
let re = ref('make a roll');
let sar = ref('make a roll');
let graffiti = ref('make a roll');
let pt = ref('make a roll');
let restock = ref('make a roll');

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
function handleClick(){

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
        <div style="display: inline-block">
          <h2>Table 1: Random Encounters</h2>
          <div>
            <button @click="clickHandler('randomEncounter', 'level_low')">L 1-2</button>
            <button @click="clickHandler('randomEncounter', 'level_med')">L 3-4</button>
            <button @click="clickHandler('randomEncounter', 'level_mid')">L 5-6</button>
            <button @click="clickHandler('randomEncounter', 'level_high')">L 7-8</button>
            <div class="response">{{ re }}</div>
          </div>
        </div>

        <div style="display: inline-block">
          <h2>Table 2: Brazen Strumpet Random Patron Generator</h2>
          <div>
            <button @click="clickHandler('brazenStrumpet', 'Morning')">Morning</button>
            <button @click="clickHandler('brazenStrumpet', 'Afternoon')">Noon</button>
            <button @click="clickHandler('brazenStrumpet', 'Evening')">Evening</button>
            <div class="response" v-html=brSt></div>
          </div>
        </div>

        <div style="display: inline-block">
          <h2>Table 3: Dungeon Dressing</h2>
          <div> <button @click="clickHandler('dungeonDressing')">click me</button>
            <div class="response">{{ dd }}</div>

          </div>
        </div>

        <div style="display: inline-block">
          <h2>Table 4: Pit Contents</h2>
          <div>
            <button @click="clickHandler('pitContents')">click me</button>
            <div class="response">{{ pt }}</div>
          </div>
        </div>

        <div style="display: inline-block">
          <h2>Table 5: Graffiti</h2>
          <div><button @click="clickHandler('graffiti')">click me</button>
            <div class="response">{{ graffiti }}</div></div>
          </div>

        <div style="display: inline-block">
          <h2>Table 6: Runic Tablet Result</h2>
          <div>
            <button @click="clickHandler('tablet')">click me</button>
            <div class="response">{{ tablet }}</div>
          </div>
        </div>

        <div style="display: inline-block">
          <h2>Table 7: Dungeon Restock</h2>
            <button @click="clickHandler('restock')">click me</button>
            <div class="response">{{ restock }}</div>
        </div>

        <div style="display: inline-block">
          <h2>Table 8: Sarcophagus Contents</h2>
          <div>
            <button @click="clickHandler('sarcophagus')">click me</button>
            <div class="response">{{ sar }}</div>
          </div>
        </div>



      </main>

    </template>

    <template v-slot:result>
      <div v-show="presentResults">

        <div v-if="isMarkup" v-html="result"></div>

        <div v-else> {{ result }}</div>

        <button @click=" presentResults= !presentResults">generate more</button>
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
