<script>
export default {
  props: {
    cardInfo: Object,
  },

  methods: {
    getImagePath(image) {
      return new URL(`../assets/img/${image}`, import.meta.url).href;
    },

    toggleFavourite() {
      this.cardInfo.isFavourite = !this.cardInfo.isFavourite;
    },
  },
};
</script>

<template>
  <div @click="toggleFavourite()" class="card">
    <div class="image-container">
      <img :src="getImagePath(cardInfo.imgUrl)" alt="image" class="base-img" />
      <img
        :src="getImagePath(cardInfo.imgUrlHover)"
        alt="image-hover"
        class="hover-img"
      />
      <div class="banner">
        <div v-if="cardInfo.badge.isInDiscount" class="discount-perc">
          {{ cardInfo.badge.discountPerc }}
        </div>
        <div v-if="cardInfo.badge.isSostenible" class="sostenibility">
          {{ cardInfo.badge.sostenibility }}
        </div>
      </div>
      <div class="heart" :class="cardInfo.isFavourite ? 'isFavoutite' : ''">
        &hearts;
      </div>
    </div>
    <div class="image-description">
      <span class="subtitle">{{ cardInfo.subtitle }}</span>
      <p class="title">{{ cardInfo.title }}</p>
      <span class="discount-price">{{ cardInfo.discountPrice }}</span>
      <span class="real-price">{{ cardInfo.realPrice }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  .image-container {
    position: relative;

    cursor: pointer;
    .base-img {
      display: block;
    }
    .hover-img {
      display: none;
    }

    .heart {
      position: absolute;
      top: 20px;
      right: 0;
      font-size: 2rem;
      padding: 15px;

      background-color: white;
      text-align: center;

      &.isFavoutite {
        color: red;
      }
    }

    &:hover {
      .base-img {
        display: none;
      }
      .hover-img {
        display: block;
      }
    }

    .banner {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 5px;
      color: white;
      font-weight: bold;

      bottom: 30px;
      .discount-perc {
        background-color: red;
        padding: 5px;
      }

      .sostenibility {
        background-color: green;
        padding: 5px;
      }
    }
  }
  .subtitle {
    font-size: 0.9rem;
    color: gray;
    margin-top: 2px;
  }

  .title {
    font-size: 1.2rem;
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
</style>
