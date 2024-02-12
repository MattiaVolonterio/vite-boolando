import { reactive } from "vue";

export const store = reactive({
  serverURI: "http://localhost:3000",
  headerSelections: [],
  headerSelIndex: 0,
  cards: [],
  footerSelections: [],
});
