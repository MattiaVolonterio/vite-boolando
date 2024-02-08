<script>
export default {
  data() {
    return {
      cards: [
        {
          imgUrl: "1.webp",
          imgUrlHover: "1b.webp",
          subtitle: "Levi's",
          title: "RELAXED FIT TEE UNISEX",
          discountPrice: "14,99 €",
          realPrice: "29,99 €",
          isInDiscount: true,
          discountPerc: "-50%",
          sostenibility: true,
        },
        {
          imgUrl: "2.webp",
          imgUrlHover: "2b.webp",
          subtitle: "Guess",
          title: "ROSES TEE",
          discountPrice: "20,99 €",
          realPrice: "29,99 €",
          isInDiscount: true,
          discountPerc: "-30%",
          sostenibility: false,
        },
        {
          imgUrl: "3.webp",
          imgUrlHover: "3b.webp",
          subtitle: "Come Zucchero Filato",
          title: "VOGLIA DI COLORI PASTELLO",
          discountPrice: "129,99 €",
          realPrice: "184,99 €",
          isInDiscount: true,
          discountPerc: "-30%",
          sostenibility: false,
        },
        {
          imgUrl: "4.webp",
          imgUrlHover: "4b.webp",
          subtitle: "Levi's",
          title: "TEE UNISEX",
          discountPrice: "14,99 €",
          realPrice: "29,99 €",
          isInDiscount: true,
          discountPerc: "-50%",
          sostenibility: true,
        },
        {
          imgUrl: "5.webp",
          imgUrlHover: "5b.webp",
          subtitle: "Maya Deluxe",
          title: "STRIPE BODICE",
          discountPrice: "99,99 €",
          realPrice: "",
          isInDiscount: false,
          discountPerc: "",
          sostenibility: false,
        },
        {
          imgUrl: "6.webp",
          imgUrlHover: "6b.webp",
          subtitle: "Esprit",
          title: "MAGLIONE - BLACK",
          discountPrice: "29,99 €",
          realPrice: "",
          isInDiscount: false,
          discountPerc: "",
          sostenibility: true,
        },
      ],
    };
  },

  methods: {
    getImagePath(image) {
      return new URL(`../assets/img/${image}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div v-for="card in cards" class="col-4">
          <div class="card">
            <div class="image-container">
              <img
                :src="getImagePath(card.imgUrl)"
                alt="image"
                class="base-img"
              />
              <img
                :src="getImagePath(card.imgUrlHover)"
                alt="image-hover"
                class="hover-img"
              />
              <div class="banner">
                <div v-if="card.isInDiscount" class="discount-perc">
                  {{ card.discountPerc }}
                </div>
                <div v-if="card.sostenibility" class="sostenibility">
                  Sostenibilità
                </div>
              </div>
              <div class="heart">&hearts;</div>
            </div>
            <div class="image-description">
              <span class="subtitle">{{ card.subtitle }}</span>
              <p class="title">{{ card.title }}</p>
              <span class="discount-price">{{ card.discountPrice }}</span>
              <span class="real-price">{{ card.realPrice }}</span>
            </div>
          </div>
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
    }

    &:hover {
      .base-img {
        display: none;
      }
      .hover-img {
        display: block;
      }
      .heart {
        color: red;
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
