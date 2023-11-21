<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import {randomRunicTablet} from "@/randomRunicTablet";
import {nextTick, ref} from "vue";
import {randomDungeonDressing} from "@/dungeonDressing";

let tablet = ref('make a roll');
let dd = ref('make a roll');

async function clickHandler(table) {
  await nextTick();
  if (table == 'tablet') {
    tablet.value = randomRunicTablet();
  }
  if (table == "dungeonDressing") {
    dd.value = randomDungeonDressing();
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125"/>

    <div class="wrapper">
      <HelloWorld msg="You did it!"/>
    </div>
  </header>

  <main>
    <div>
      <TheWelcome/>
    </div>

    <div style="border: 1px solid red;">
      Runic Tablet
      <button @click="clickHandler('tablet')">click me</button>
      <textarea>{{ tablet }}</textarea>
    </div>
    <div style="border: 1px solid red;">
      Dungeon Dressing
      <button @click="clickHandler('dungeonDressing')">click me</button>
      <textarea>{{ dd }}</textarea>
    </div>
    <router-view></router-view>
  </main>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
