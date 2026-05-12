<script setup lang="ts" >
import BasePage from "@/pages/BasePage.vue";
import {IonButton, IonGrid, IonRow, IonCol} from "@ionic/vue";
</script >

<template >
  <BasePage >
    <!--    <template v-slot:header>-->
    <!--      <header>-->
    <!--        <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125"/>-->

    <!--        <div class="wrapper">-->
    <!--          <HelloWorld msg="You did it!"/>-->
    <!--        </div>-->
    <!--      </header>-->

    <!--    </template>-->

    <template v-slot:default >
      <main >
        <div style="border: 1px dashed green" >
          <div >
            <ion-grid  style="border: 1px solid green" >

              <router-link to="/barrowmaze" >
                <ion-row class="ion-justify-content-center ion-align-items-center" >

                  <ion-col size="6">
                    <img class="titleArt" src="../../art/BMC/header.png"
                         alt="Barrowmaze Complete" />
                  </ion-col >
                  <ion-col size="4">
                    <ion-button >click me</ion-button >
                  </ion-col>
                </ion-row >
              </router-link >

              <router-link to="/arachia" >
              <ion-row class="ion-justify-content-center ion-align-items-center">
                <ion-col size="6"> <img src="../../art/BMC/coa title.png" />
                </ion-col >
                <ion-col size="4">
                  <ion-button >click me</ion-button ></ion-col >
              </ion-row >
              </router-link >

              <router-link to="/gemsTreasures" >
                <ion-row  class="ion-justify-content-center ion-align-items-center">
                  <ion-col size="6">  <h3 >AD & D 1e Gems and Jewels</h3 ></ion-col >
                  <ion-col size="4">   <ion-button >click me</ion-button ></ion-col >
                </ion-row>
              </router-link>
            </ion-grid >
          </div >
        </div>

<!--          <div >-->
<!--            <h3 >Highfell</h3 >-->
<!--            <router-link to="/highfell" >-->
<!--              <ion-button >click me</ion-button >-->
<!--            </router-link >-->
<!--          </div >-->

<!--          <div >-->
<!--            <h3 >Dwarrowdeep</h3 >-->
<!--            <router-link to="/dwarrowdeep" >-->
<!--              <ion-button >click me</ion-button >-->
<!--            </router-link >-->
<!--          </div >-->
      </main >

    </template >
  </BasePage >
</template >