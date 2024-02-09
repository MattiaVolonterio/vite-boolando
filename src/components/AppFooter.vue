<script>
export default {
  props: {
    footerLeftTitle: String,
    footerRightTitle: String,
    footerSelections: Array,
    footerIcons: Array,
  },
};
</script>

<template>
  <footer>
    <div class="container">
      <div class="left">
        <span>{{ footerLeftTitle }}</span>
        <ul>
          <li v-for="selection in footerSelections">
            <a :href="selection.href">{{ selection.name }}</a>
          </li>
        </ul>
      </div>
      <div class="right">
        <span>{{ footerRightTitle }}</span>
        <ul>
          <li v-for="icon in footerIcons">
            <a href="#"> <i :class="icon"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;

footer {
  background-color: black;
  color: white;
}
.container {
  @include space-between;
  height: 100px;

  span {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  .left {
    span {
      font-size: 1.2rem;
    }
    li {
      font-size: 0.9rem;
    }
  }

  .right {
    li {
      font-size: 1.2rem;
    }
  }
}
</style>
