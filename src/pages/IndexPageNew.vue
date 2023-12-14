<script setup>
import BasePage from "@/pages/BasePage.vue";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <BasePage>
    <template v-slot:header>
      <header>
        <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125"/>

        <div class="wrapper">
          <HelloWorld msg="You did it!"/>
        </div>
      </header>

    </template>

    <template v-slot:default>
      <main>
        <div>
          <div>
            <h3>The Barrowmaze</h3>
            <router-link to="/barrowmaze">
              <button>click me</button>
            </router-link>
          </div>


          <div>
            <h3>Caverns of Arachia</h3>
            <router-link to="/arachia">
              <button>click me</button>
            </router-link>
          </div>

          <div>
            <h3>Highfell</h3>
            <router-link to="/highfell">
              <button>click me</button>
            </router-link>
          </div>

          <div>
            <h3>Dwarrowdeep</h3>
            <router-link to="/dwarrowdeep">
              <button>click me</button>
            </router-link>
          </div>

        </div>
      </main>

    </template>
  </BasePage>


</template>

