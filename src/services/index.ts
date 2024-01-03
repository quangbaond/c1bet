import axios from "../plugin/axios";

export const GET = async (url: string, params?: any) => {
  return await axios.get(url, { params });
};

export const POST = async (url: string, data?: any) => {
  return await axios.post(url, data);
};

export const PUT = async (url: string, data?: any) => {
  return await axios.put(url, data);
};

export const DELETE = async (url: string, data?: any) => {
  return await axios.delete(url, data);
};
