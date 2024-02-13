<script>
import AppHeader from "./components/AppHeader.vue";
import AppMainContent from "./components/AppMainContent.vue";
import AppFooter from "./components/AppFooter.vue";
import ModalComponent from "./components/ModalComponent.vue";
import axios from "axios";
import { store } from "./store";

export default {
  data() {
    return {
      store,

      headerIcons: [
        "fa-regular fa-user",
        "fa-regular fa-heart",
        "fa-solid fa-bag-shopping",
      ],

      footerLeftTitle: "Boolando s.r.l.",

      footerRightTitle: "Trovaci anche su: ",

      footerIcons: [
        "fa-brands fa-square-twitter",
        "fa-brands fa-square-facebook",
        "fa-brands fa-square-instagram",
        "fa-brands fa-square-pinterest",
        "fa-brands fa-square-youtube",
      ],
    };
  },

  methods: {
    fetchHeaderSel() {
      axios.get(`${store.serverURI}/headerSelections`).then((res) => {
        store.headerSelections = res.data;
      });
    },
    fetchFooterSel() {
      axios.get(`${store.serverURI}/footerSelections`).then((res) => {
        store.footerSelections = res.data;
      });
    },
    fetchCard() {
      axios.get(`${store.serverURI}/cards`).then((res) => {
        store.cards = res.data;
      });
    },
  },

  created() {
    this.fetchHeaderSel();
    this.fetchFooterSel();
    this.fetchCard();
  },

  components: { AppHeader, AppMainContent, AppFooter, ModalComponent },
};
</script>

<template>
  <AppHeader
    :selections="store.headerSelections"
    :headerIcons="headerIcons"
  ></AppHeader>
  <ModalComponent v-if="store.modal.isShown"></ModalComponent>
  <AppMainContent :cardsArray="store.cards"></AppMainContent>
  <AppFooter
    :footerLeftTitle="footerLeftTitle"
    :footerRightTitle="footerRightTitle"
    :footerSelections="store.footerSelections"
    :footerIcons="footerIcons"
  ></AppFooter>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
