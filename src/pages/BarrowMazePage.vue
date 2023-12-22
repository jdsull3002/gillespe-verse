<script setup>
import {randomRunicTablet} from "@/barrowMaze/randomRunicTablet";
import {nextTick, ref} from "vue";
import BasePage from "@/pages/BasePage.vue";
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

async function clickHandler(table, supplemental_param= null) {
  await nextTick();
  switch (table){
    case 'tablet':
      tablet.value = randomRunicTablet();
      break;
    case 'dungeonDressing':
      dd.value = randomDungeonDressing();
      break;
    case 'randomEncounter':
      //pop a modal with 5 radios.
        re.value = '';
      re.value = generateRandomEncounter(supplemental_param);
      break;
    case 'brazenStrumpet':
      brSt.value="";
      brSt.value = generatePatronList(supplemental_param);
      break;
    case 'sarcophagus':
      sar.value = generateSarcophagusContents();
      break;
    case 'graffiti':
      graffiti.value = generateWallGraffiti();
      break;
    case 'pitContents':
      pt.value = generatePitContents();
      break;
    case 'restock':
      restock.value = generateRestock();
      break;
    default:
      break;

  }
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
    <template v-slot:default>
      <main>
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
  </BasePage>


</template>

<style scoped>
.response {
  width: 400px;
  overflow: auto;
}
</style>
