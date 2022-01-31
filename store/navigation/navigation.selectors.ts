import { AppState } from "store";

const active = (state: AppState): number => state.navigation.active;

export default {
  active,
};
