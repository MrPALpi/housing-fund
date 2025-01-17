import { userAPI } from '@/entites/user';

export const usersStore = {
  namespaced: true,
  state() {
    return {
      users: [],
      searchedUserIds: [],
      searchedUserNames: [],
      selectedId: null,
      isLoading: false
    };
  },
  actions: {
    async fetchUsers({ commit, getters }, { username: userNames, id: userIds }) {
      if (userNames.length === 0 && userIds.length === 0) {
        commit('setSearchedUsers', { userIds: [], userNames: [] });
        return;
      }

      commit('setLoading', true);
      const existingUserIds = getters.getUserIds;
      const existingUserNames = getters.getUserNames;

      const filteredIds = userIds.filter(userId => !existingUserIds.includes(Number(userId)));
      const filteredUserNames = userNames.filter(userName => !existingUserNames.find(name => name.includes(userName.toLowerCase())));

      if (filteredIds.length === 0 && filteredUserNames.length === 0) {
        commit('setSearchedUsers', { userIds, userNames });
        commit('setLoading', false);
        return;
      }

      try {
        const users = await userAPI.getUsers({ username: filteredUserNames, id: filteredIds });
        commit('setUsers', users);
        commit('setSearchedUsers', { userIds, userNames });

        if (users.length === 0) {
          commit('notificationsStore/notify', { id: new Date().getTime(), message: 'Пользователей не найдено', status: 'info' }, { root: true });
        }

      } catch (error) {
        commit('notificationsStore/notify', { id: new Date().getTime(), message: 'Failed to fetch users', status: 'error' }, { root: true });
      } finally {
        commit('setLoading', false);
      }
    }
  },
  mutations: {
    setUsers(state, users) {
      state.users = [...state.users, ...users];
    },

    setSearchedUsers(state, { userIds = [], userNames = [] }) {
      if (state.searchedUserIds.length || userIds.length) {
        state.searchedUserIds = userIds;
      }

      if (state.searchedUserNames.length || userNames.length) {
        state.searchedUserNames = userNames;
      }
    },

    setSelectedUser(state, id) {
      state.selectedId = id;
    },

    setLoading(state, loading) {
      state.isLoading = loading;
    }
  },
  getters: {
    getSelectedUser: state => {
      return state.users.find(user => user.id === state.selectedId);
    },

    getUsers: state => {
      if (state.searchedUserIds.length) {
        return state.users.filter(user => state.searchedUserIds.includes(user.id.toString()));
      } else if (state.searchedUserNames.length) {
        return state.users.filter(user => !!state.searchedUserNames.find(name => user.username.toLowerCase().includes(name.toLowerCase())));
      }

      return state.users;
    },

    getUserIds: state => {
      return state.users.map(user => user.id);
    },

    getUserNames: state => {
      return state.users.map(user => user.username.toLowerCase());
    }
  }
}