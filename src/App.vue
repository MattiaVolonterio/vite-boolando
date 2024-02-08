<script>
import AppHeader from "./components/AppHeader.vue";
import AppMainContent from "./components/AppMainContent.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {},

  components: { AppHeader, AppMainContent, AppFooter },
};
</script>

<template>
  <AppHeader></AppHeader>
  <AppMainContent></AppMainContent>
  <AppFooter></AppFooter>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
