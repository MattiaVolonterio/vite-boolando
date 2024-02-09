<script>
import AppHeader from "./components/AppHeader.vue";
import AppMainContent from "./components/AppMainContent.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          imgUrl: "1.webp",
          imgUrlHover: "1b.webp",
          subtitle: "Levi's",
          title: "RELAXED FIT TEE UNISEX",
          discountPrice: "14,99 €",
          realPrice: "29,99 €",
          badge: {
            isInDiscount: true,
            discountPerc: "-50%",
            isSostenible: true,
            sostenibility: "Sostenibilità",
          },
        },
        {
          id: 2,
          imgUrl: "2.webp",
          imgUrlHover: "2b.webp",
          subtitle: "Guess",
          title: "ROSES TEE",
          discountPrice: "20,99 €",
          realPrice: "29,99 €",
          badge: {
            isInDiscount: true,
            discountPerc: "-30%",
            isSostenible: false,
            sostenibility: "",
          },
        },
        {
          id: 3,
          imgUrl: "3.webp",
          imgUrlHover: "3b.webp",
          subtitle: "Come Zucchero Filato",
          title: "VOGLIA DI COLORI PASTELLO",
          discountPrice: "129,99 €",
          realPrice: "184,99 €",
          badge: {
            isInDiscount: true,
            discountPerc: "-30%",
            isSostenible: false,
            sostenibility: "",
          },
        },
        {
          id: 4,
          imgUrl: "4.webp",
          imgUrlHover: "4b.webp",
          subtitle: "Levi's",
          title: "TEE UNISEX",
          discountPrice: "14,99 €",
          realPrice: "29,99 €",
          badge: {
            isInDiscount: true,
            discountPerc: "-50%",
            isSostenible: true,
            sostenibility: "Sostenibilità",
          },
        },
        {
          id: 5,
          imgUrl: "5.webp",
          imgUrlHover: "5b.webp",
          subtitle: "Maya Deluxe",
          title: "STRIPE BODICE",
          discountPrice: "99,99 €",
          realPrice: "",
          badge: {
            isInDiscount: false,
            discountPerc: "",
            isSostenible: false,
            sostenibility: "",
          },
        },
        {
          id: 6,
          imgUrl: "6.webp",
          imgUrlHover: "6b.webp",
          subtitle: "Esprit",
          title: "MAGLIONE - BLACK",
          discountPrice: "29,99 €",
          realPrice: "",
          badge: {
            isInDiscount: false,
            discountPerc: "",
            isSostenible: true,
            sostenibility: "Sostenibilità",
          },
        },
      ],
    };
  },

  components: { AppHeader, AppMainContent, AppFooter },
};
</script>

<template>
  <AppHeader></AppHeader>
  <AppMainContent :cardsArray="cards"></AppMainContent>
  <AppFooter></AppFooter>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
