<!-- Single file Components -->

<template>
  <IndecisionView />
</template>




<script lang="ts" setup>
import IndecisionView from './views/indecisionView.vue';
</script>

  <!--  ============= 1. PRIMER VERSION -->
  <!-- estamos enviando el valor de 5->  :value="5" -->
  <!-- estamos enviando el string 5 ->   value="5" -->
  <!-- <MyCounter :value="15" />
  <MyCounterScript :value="10" />
  <MyCounterScript2 :value="150" />
  <button class="btn-primary">asdasd</button> -->

<!-- ====== 1. PRIMERA VERSION -->
<!-- <script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
</script> -->
