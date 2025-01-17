import { createStore } from "vuex";
import { usersStore } from "./modules/usersStore";
import { notificationsStore } from "./modules/notificationStore";

export const store = createStore({
  modules: {
    usersStore,
    notificationsStore
  }
})