<script setup>
import {randomRunicTablet} from "@/randomRunicTablet";
import {nextTick, ref} from "vue";
import {randomDungeonDressing} from "@/dungeonDressing";
import BasePage from "@/pages/BasePage.vue";
import {generateRandomEncounter} from "@/randomEncounter";
import {generatePatronList} from "@/randomParty";
import {generateSarcophagusContents} from "@/randomSarcophagus";

let tablet = ref('make a roll');
let dd = ref('make a roll');
let brSt = ref('make a roll');
let re = ref('make a roll');
let sar = ref('make a roll');

async function clickHandler(table) {
  await nextTick();
  if (table === 'tablet') {
    tablet.value = randomRunicTablet();
  }
  if (table === "dungeonDressing") {
    dd.value = randomDungeonDressing();
  }
  if (table === "randomEncounter") {
    //pop a modal with 5 radios.
    re.value = generateRandomEncounter('level_low');
  }
  if (table === "brazenStrumpet") {
    //pop a modal with 5 radios.
    brSt.value = generatePatronList('morning');
  }
  if (table === "sarcophagus") {
    //pop a modal with 5 radios.
    sar.value = generateSarcophagusContents();
  }
}
</script>

<template>
  <BasePage>
    <template v-slot:default>
      <main>
        <h1>this is the barrowmage home page</h1>

        <div style="display: inline-block">
          <h2>Table 1: Random Encounters</h2>
          <div>
            <button @click="clickHandler('randomEncounter', )">click me</button>
            <textarea>{{ re }}</textarea>
          </div>
        </div>

        <div style="display: inline-block">
          <h2>Table 2: Brazen Strumpet Random Patron Generator</h2>
          <div>
            <button @click="clickHandler('brazenStrumpet')">click me</button>
            <textarea>{{ brSt }}</textarea>
          </div>
        </div>

        <div style="display: inline-block">
          <h2>Table 3: Dungeon Dressing</h2>
          <div>
            <button @click="clickHandler('dungeonDressing')">click me</button>
            <textarea>{{ dd }}</textarea>
          </div>
        </div>

        <div style="display: inline-block">
          <h2>Table 4: Pit Contents</h2>
          <div>
            <button @click="clickHandler('dungeonDressing')">click me</button>
            <textarea>{{ dd }}</textarea>
          </div>
        </div>

        <div style="display: inline-block">
          <h2>Table 5: Graffiti</h2>
          <div><button @click="clickHandler('dungeonDressing')">click me</button>
            <textarea>{{ dd }}</textarea></div>
          </div>

        <div style="display: inline-block">
          <h2>Table 6: Runic Tablet Result</h2>
          <div>
            <button @click="clickHandler('tablet')">click me</button>
            <textarea>{{ tablet }}</textarea>
          </div>
        </div>

        <div style="display: inline-block">
          <h2>Table 7: Dungeon Restock</h2>
          <div>
            <button @click="clickHandler('dungeonDressing')">click me</button>
            <textarea>{{ dd }}</textarea>
          </div>
        </div>

        <div style="display: inline-block">
          <h2>Table 8: Sarcophagus Contents</h2>
          <div>
            <button @click="clickHandler('sarcophagus')">click me</button>
            <textarea>{{ sar }}</textarea>
          </div>
        </div>



      </main>

    </template>
  </BasePage>


</template>

<style scoped>

</style>
