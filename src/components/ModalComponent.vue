<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    dismissModal() {
      store.modal.isShown = false;
    },
  },
};
</script>

<template>
  <div class="layover">
    <div class="modal-container">
      <font-awesome-icon
        icon="fa-regular fa-circle-xmark"
        class="icon"
        @click="dismissModal()"
      />
      <div class="object-container">
        <img :src="store.modal.imageURL" alt="modal-img" class="object-img" />
        <div class="object-description">
          <div class="modal-section">
            <span class="title">MARCA: </span>
            <span class="subtitle"> {{ store.modal.brand }}</span>
          </div>

          <div class="modal-section">
            <span class="title">DESCRIZIONE: </span>
            <span class="subtitle">{{ store.modal.description }}</span>
          </div>

          <div v-if="store.modal.isInDiscount" class="modal-section">
            <span class="title">SCONTO: </span>
            <span class="subtitle"> {{ store.modal.discountValue }}</span>
          </div>

          <div class="modal-section">
            <span class="title">PREZZO: </span>
            <span
              :class="
                store.modal.isInDiscount ? 'real-price' : 'discount-price'
              "
            >
              {{ store.modal.price + " €" }}
            </span>
          </div>

          <div v-if="store.modal.isInDiscount" class="modal-section">
            <span class="title">PREZZO SCONTATO: </span>
            <span class="discount-price">{{
              store.modal.discountPrice + " €"
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layover {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.6);

  .modal-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 800px;
    height: 500px;
    background-color: white;

    border-radius: 20px;

    .icon {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 1.8rem;

      cursor: pointer;
    }

    .object-container {
      display: flex;
      align-items: center;
      height: 100%;
      .object-img {
        height: 100%;
        padding: 1rem;
        border-radius: 50px;
        margin-left: 1rem;
      }

      .object-description {
        .modal-section {
          margin-bottom: 1rem;

          .subtitle {
            color: gray;
          }

          .title {
            font-weight: bold;
          }

          .discount-price {
            color: red;
            font-weight: bold;

            margin-right: 5px;
          }

          .real-price {
            color: grey;
            text-decoration: line-through;
          }
        }
      }
    }
  }
}
</style>
