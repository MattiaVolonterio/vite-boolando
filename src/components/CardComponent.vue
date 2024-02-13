<script>
export default {
  props: {
    cardInfo: Object,
  },

  emits: ["request-modal-show"],

  computed: {
    discountPrice() {
      let discountedPrice = 0;
      if (this.cardInfo.badge.isInDiscount) {
        const discountPerc = parseInt(
          this.cardInfo.badge.discountPerc.slice(
            1,
            this.cardInfo.badge.discountPerc.length
          )
        );
        const discount = (this.cardInfo.price * discountPerc) / 100;
        discountedPrice = (this.cardInfo.price - discount).toFixed(2);
      } else {
        discountedPrice = this.cardInfo.price;
      }
      return discountedPrice;
    },
  },

  methods: {
    getImagePath(image) {
      return new URL(`../assets/img/${image}`, import.meta.url).href;
    },

    toggleFavourite() {
      this.cardInfo.isInFavourite = !this.cardInfo.isInFavourite;
    },
  },
};
</script>

<template>
  <div class="card">
    <div @click="toggleFavourite()" class="image-container">
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
      <div class="heart" :class="cardInfo.isInFavourite ? 'isFavoutite' : ''">
        &hearts;
      </div>
    </div>
    <div class="image-description">
      <span class="subtitle">{{ cardInfo.subtitle }}</span>
      <p
        @click="
          $emit(
            'request-modal-show',
            cardInfo.subtitle,
            cardInfo.title,
            cardInfo.badge.isInDiscount,
            cardInfo.badge.discountPerc,
            cardInfo.price,
            discountPrice,
            getImagePath(cardInfo.imgUrl)
          )
        "
        class="title"
      >
        {{ cardInfo.title }}
      </p>
      <span class="discount-price">{{ discountPrice + " €" }}</span>
      <span v-if="cardInfo.badge.isInDiscount" class="real-price">{{
        cardInfo.price + " €"
      }}</span>
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
    cursor: pointer;
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
