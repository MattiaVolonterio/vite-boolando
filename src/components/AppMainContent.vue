<script>
import CardComponent from "./CardComponent.vue";

export default {
  props: {
    cardsArray: Array,
  },

  components: { CardComponent },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div v-for="card in cardsArray" class="col-4">
          <CardComponent :cardInfo="card"></CardComponent>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  margin-top: 3rem;
  margin-bottom: 1rem;
}
</style>
