import { reactive } from "vue";

export const store = reactive({
  serverURI: "http://localhost:3000",
  headerSelections: [],
  headerSelIndex: 0,
  cards: [],
  footerSelections: [],

  modal: {
    isShown: false,
    imageURL: "",
    brand: "",
    description: "",
    isInDiscount: false,
    discountValue: "",
    price: "",
    discountPrice: "",
  },
});
