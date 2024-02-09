<script>
import AppHeader from "./components/AppHeader.vue";
import AppMainContent from "./components/AppMainContent.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
      headerSelections: [
        {
          name: "Donna",
          href: "#",
          isActive: true,
        },
        {
          name: "Uomo",
          href: "#",
          isActive: false,
        },
        {
          name: "Bambino",
          href: "#",
          isActive: false,
        },
      ],

      headerIcons: [
        "fa-regular fa-user",
        "fa-regular fa-heart",
        "fa-solid fa-bag-shopping",
      ],

      cards: [
        {
          id: 1,
          imgUrl: "1.webp",
          imgUrlHover: "1b.webp",
          subtitle: "Levi's",
          title: "RELAXED FIT TEE UNISEX",
          price: 29.99,
          badge: {
            isInDiscount: true,
            discountPerc: "-50%",
            isSostenible: true,
            sostenibility: "Sostenibilità",
          },
          isInFavourite: false,
        },
        {
          id: 2,
          imgUrl: "2.webp",
          imgUrlHover: "2b.webp",
          subtitle: "Guess",
          title: "ROSES TEE",
          price: 29.99,
          badge: {
            isInDiscount: true,
            discountPerc: "-30%",
            isSostenible: false,
            sostenibility: "",
          },
          isInFavourite: false,
        },
        {
          id: 3,
          imgUrl: "3.webp",
          imgUrlHover: "3b.webp",
          subtitle: "Come Zucchero Filato",
          title: "VOGLIA DI COLORI PASTELLO",
          price: 184.99,
          badge: {
            isInDiscount: true,
            discountPerc: "-30%",
            isSostenible: false,
            sostenibility: "",
          },
          isInFavourite: false,
        },
        {
          id: 4,
          imgUrl: "4.webp",
          imgUrlHover: "4b.webp",
          subtitle: "Levi's",
          title: "TEE UNISEX",
          price: 29.99,
          badge: {
            isInDiscount: true,
            discountPerc: "-50%",
            isSostenible: true,
            sostenibility: "Sostenibilità",
          },
          isInFavourite: false,
        },
        {
          id: 5,
          imgUrl: "5.webp",
          imgUrlHover: "5b.webp",
          subtitle: "Maya Deluxe",
          title: "STRIPE BODICE",
          price: 99.99,
          badge: {
            isInDiscount: false,
            discountPerc: "",
            isSostenible: false,
            sostenibility: "",
          },
          isInFavourite: false,
        },
        {
          id: 6,
          imgUrl: "6.webp",
          imgUrlHover: "6b.webp",
          subtitle: "Esprit",
          title: "MAGLIONE - BLACK",
          price: 29.99,
          badge: {
            isInDiscount: false,
            discountPerc: "",
            isSostenible: true,
            sostenibility: "Sostenibilità",
          },
          isInFavourite: false,
        },
      ],

      footerLeftTitle: "Boolando s.r.l.",

      footerRightTitle: "Trovaci anche su: ",

      footerSelections: [
        {
          name: "Informazioni legali",
          href: "#",
        },
        {
          name: "Informativa sulla privacy",
          href: "#",
        },
        {
          name: "Diritto di recesso",
          href: "#",
        },
      ],

      footerIcons: [
        "fa-brands fa-square-twitter",
        "fa-brands fa-square-facebook",
        "fa-brands fa-square-instagram",
        "fa-brands fa-square-pinterest",
        "fa-brands fa-square-youtube",
      ],
    };
  },

  components: { AppHeader, AppMainContent, AppFooter },
};
</script>

<template>
  <AppHeader
    :selections="headerSelections"
    :headerIcons="headerIcons"
  ></AppHeader>
  <AppMainContent :cardsArray="cards"></AppMainContent>
  <AppFooter
    :footerLeftTitle="footerLeftTitle"
    :footerRightTitle="footerRightTitle"
    :footerSelections="footerSelections"
    :footerIcons="footerIcons"
  ></AppFooter>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
