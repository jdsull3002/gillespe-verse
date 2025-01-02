<script setup lang="ts">
import BasePage from "@/pages/BasePage.vue";
import {IonButton} from "@ionic/vue";
</script>

<template>
  <BasePage>
<!--    <template v-slot:header>-->
<!--      <header>-->
<!--        <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125"/>-->

<!--        <div class="wrapper">-->
<!--          <HelloWorld msg="You did it!"/>-->
<!--        </div>-->
<!--      </header>-->

<!--    </template>-->

    <template v-slot:default>
      <main>
        <div>
          <div>
            <h3>The Barrowmaze</h3>
            <router-link to="/barrowmaze">
              <ion-button>click me</ion-button>
            </router-link>
          </div>


          <div>
            <h3>Caverns of Arachia</h3>
            <router-link to="/arachia">
              <ion-button>click me</ion-button>
            </router-link>
          </div>

          <div>
            <h3>Highfell</h3>
            <router-link to="/highfell">
              <ion-button>click me</ion-button>
            </router-link>
          </div>

          <div>
            <h3>Dwarrowdeep</h3>
            <router-link to="/dwarrowdeep">
              <ion-button>click me</ion-button>
            </router-link>
          </div>
          <div>
            <h3>Gems and Jewels</h3>
            <router-link to="/gemsTreasures">
              <ion-button>click me</ion-button>
            </router-link>
          </div>

        </div>
      </main>

    </template>
  </BasePage>


</template>

