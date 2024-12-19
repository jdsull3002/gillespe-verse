<script setup >

</script >

<template >
  <div class="page" >
    <slot name="header" ></slot >
    <slot name="default" ></slot >
    <slot name="result" ></slot >
  </div >

</template >

<style lang="scss" >
.page {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

header  h1, h2, p {
  line-height: 1.5;
  width: 100%;
}


.logo {
  display: block;
  margin: 0 auto 2rem;
}


//header {
//  display: flex;
//  place-items: center;
//  padding-right: calc(var(--section-gap) / 2);
//
//  .wrapper {
//    display: flex;
//    place-items: flex-start;
//    flex-wrap: wrap;
//  }
//}
//
//.logo {
//  margin: 0 2rem 0 0;
//}


</style >
