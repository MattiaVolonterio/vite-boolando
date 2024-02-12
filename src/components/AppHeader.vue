<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    checkSelectedIndex(index) {
      store.headerSelections[store.headerSelIndex].isActive = false;
      store.headerSelIndex = index;
      store.headerSelections[store.headerSelIndex].isActive = true;
    },
  },

  props: {
    selections: Array,
    headerIcons: Array,
  },
};
</script>

<template>
  <header>
    <div class="container">
      <div class="selections">
        <ul>
          <li
            v-for="(selection, index) in selections"
            @click="checkSelectedIndex(index)"
            :class="selection.isActive ? 'active' : ''"
          >
            <a :href="selection.href">{{ selection.name }}</a>
          </li>
        </ul>
      </div>
      <div class="logo">
        <img src="../assets/img/boolean-logo.png" alt="boolean-logo" />
      </div>
      <div class="icons">
        <ul>
          <li v-for="icon in headerIcons">
            <font-awesome-icon :icon="icon" />
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;

header {
  background-color: #e97630;

  .container {
    @include space-between;

    height: 70px;

    .selections {
      ul {
        li {
          &.active {
            text-shadow: -2px 0px greenyellow;
            color: black;
          }
        }
      }
    }
  }

  img {
    height: 30px;
  }

  .icons {
    li {
      font-size: 1rem;
      margin-right: 0;
      margin-left: 10px;

      cursor: pointer;
    }
  }
}
</style>
