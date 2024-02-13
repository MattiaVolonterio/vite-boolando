<script>
import CardComponent from "./CardComponent.vue";
import { store } from "../store";

export default {
  props: {
    cardsArray: Array,
  },

  emits: ["show-modal"],

  methods: {
    requestModalShow() {
      this.$emit("show-modal");
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
            @request-modal-show="requestModalShow"
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
