<script>
export default {
  props: {
    selections: Array,
    icons: Array,
  },
};
</script>

<template>
  <header>
    <div class="container">
      <div class="selections">
        <ul>
          <li v-for="selection in selections">
            <a :href="selection.href">{{ selection.name }}</a>
          </li>
        </ul>
      </div>
      <div class="logo">
        <img src="../assets/img/boolean-logo.png" alt="boolean-logo" />
      </div>
      <div class="icons">
        <ul>
          <li v-for="icon in icons" :class="icon"></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;

header {
  background-color: #e97630;
}

.container {
  @include space-between;

  height: 70px;
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
</style>
