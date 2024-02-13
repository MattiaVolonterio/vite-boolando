<script>
import { store } from "../store";

export default {
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

    width: 970px;
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
  }
}
</style>
