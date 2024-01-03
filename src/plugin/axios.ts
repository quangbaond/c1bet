import { getStorage } from "../common";
import { TOKEN_KEY } from "../common/constants";
import store from "../store";
import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  timeout: 6000,
  headers: {
    Accept: "Application/json",
  },
});

instance.interceptors.request.use(
  (config: any) => {
    const token = getStorage(TOKEN_KEY);

    store.commit("setLoading", true);
    if (token) {
      config.headers.Authorization = `Bearer ${token.access_token}`;
    }
    return config;
  },
  (error: any) => {
    store.commit("setLoading", false);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response: any) => {
    // return {
    //   status: true,
    //   data: response.data.result,
    //   message: response.data.message
    // }
    store.commit("setLoading", false);
    response.data.status = true;
    return response;
  },
  (error: any) => {
    console.log(error);
    store.commit("setLoading", false);
    if (error?.response?.status === 401) {
      window.location.href = "/login";
    }
    return {
      status: false,
      message: "Server Error",
    };

    return Promise.reject(error);
  },
);

export default instance;
