import { createLogger, createStore } from "vuex";
import { IDevice } from "../interface/device";
import userStore from "./user";
import axios from "axios";

interface IStateStore {
  device: IDevice;
  loading: boolean;
  ipAddress: string;
}
// Create a new store instance.
const store = createStore({
  state(): IStateStore {
    return {
      device: {} as IDevice,
      loading: false as boolean,
      ipAddress: "" as string,
    };
  },
  mutations: {
    setDevice(state: IStateStore, device: IDevice) {
      state.device = device;
    },
    setIpAdress(state: IStateStore, ip: string) {
      state.ipAddress = ip;
    },

    setLoading(state: any, params: boolean) {
      state.loading = params;
    },
  },

  actions: {
    async getIpAddress(
      { commit }: { commit: any },
      params: any,
    ): Promise<void> {
      const res: any = await axios.get(
        "https://api.db-ip.com/v2/free/self" as string,
      );
      if (res.status === 200) {
        commit("setIpAdress", res.data);
      }
    },
  },
  modules: {
    userStore,
  },

  plugins: [createLogger()],
});

export default store;
