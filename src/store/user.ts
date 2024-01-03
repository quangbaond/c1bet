import type { ILoginParams, IUser } from "../interface/user";
import { GET, POST } from "../services";
import { createLogger } from "vuex";

interface IUserState {
  isLogin: boolean;
  profile: IUser;
}

// Create a new store instance.
const userStore = {
  namespaced: true,
  state(): IUserState {
    return {
      isLogin: false,
      profile: {
        id: 0,
        name: "",
        email: "",
        username: "baonq",
        balance: 11.11,
      },
    };
  },
  actions: {
    async login({ commit }: { commit: any }, params: ILoginParams) {
      const res = await POST("/auth/login", params);

      if (res.status) {
        commit("setLogin", true);
        commit("setProfile", res.data.data);
      }

      return res;
    },

    async logout({ commit }: { commit: any }) {
      commit("setLogin", false);
      commit("setProfile", {
        id: 0,
        name: "",
        email: "",
      });
    },

    async register({ commit }: { commit: any }, params: ILoginParams) {
      const res = await POST("/auth/register", params);

      return res;
    },

    async getProfile({ commit }: { commit: any }) {
      const res = await GET("/v1/profile");
      console.log(res.data);

      if (res.status) {
        commit("setProfile", res.data.result);
      }

      return res;
    },

    async updateProfile({ commit }: { commit: any }, params: IUser) {
      const res = await POST("/v1/profile", params);

      if (res.status) {
        commit("setProfile", res.data.result);
      }

      return res;
    },

    async withdraw({ commit }: { commit: any }, params: any) {
      const res = await POST("/v1/withdraw", params);
      return res;
    },

    // getWithdrawHistory,

    async getWithdrawHistory({ commit }: { commit: any }, params: any) {
      const res = await GET("/v1/withdraw", params);
      return res;
    },
  },

  mutations: {
    setLogin(state: IUserState, status: boolean) {
      state.isLogin = status;
    },
    setProfile(state: IUserState, profile: IUser) {
      state.profile = profile;
    },
  },

  plugins: [createLogger()],
};

export default userStore;
