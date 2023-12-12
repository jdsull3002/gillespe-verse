<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import TheWelcome from '@/components/TheWelcome.vue'
import BasePage from "@/pages/BasePage.vue";
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
          <TheWelcome/>
        </div>
      </main>

    </template>
  </BasePage>


</template>

