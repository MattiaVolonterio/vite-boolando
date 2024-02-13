<script>
import CardComponent from "./CardComponent.vue";
import { store } from "../store";

export default {
  props: {
    cardsArray: Array,
  },

  methods: {
    showModal() {
      store.modal.isShown = true;
    },
  },

  components: { CardComponent },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div v-for="card in cardsArray" class="col-4">
          <CardComponent
            @show-modal="showModal"
            :cardInfo="card"
          ></CardComponent>
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
