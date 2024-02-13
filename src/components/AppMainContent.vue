<script>
import CardComponent from "./CardComponent.vue";
import { store } from "../store";

export default {
  data() {
    return { store };
  },

  props: {
    cardsArray: Array,
  },

  emits: ["show-modal"],

  methods: {
    requestModalShow(
      subtitle,
      title,
      isInDiscount,
      discountPerc,
      price,
      discountPrice,
      url
    ) {
      this.$emit("show-modal");
      store.modal.imageURL = url;
      store.modal.brand = subtitle;
      store.modal.description = title;
      store.modal.isInDiscount = isInDiscount;
      store.modal.discountValue = discountPerc;
      store.modal.price = price;
      store.modal.discountPrice = discountPrice;
    },
  },

  components: { CardComponent },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div v-for="(card, index) in cardsArray" class="col-4">
          <CardComponent
            @request-modal-show="requestModalShow"
            :cardInfo="card"
            :cardIndex="index"
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
