export const notificationsStore = {
  namespaced: true,
  state() {
    return {
      notifications: [],
    };
  },
  mutations: {
    notify(state, notification) {
      state.notifications.push(notification);
      setTimeout(() => {
        state.notifications = state.notifications.filter(item => item.id !== notification.id);
      }, 5000);
    },
    close(state, id) {
      state.notifications = state.notifications.filter(item => item.id !== id);
    }
  }
}