<template>
<the-header-layout></the-header-layout>
  <router-view></router-view>
</template>

<script>
import TheHeaderLayout from './components/layout/TheHeaderLayout.vue'

export default {
 components: {
   TheHeaderLayout
 }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>