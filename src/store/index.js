import { reactive } from "vue";

export const store = reactive({
  serverURI: "http://localhost:3000",
  headerSelections: [],
  cards: [],
  footerSelections: [],
});
