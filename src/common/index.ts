export const setStorage = (key: string, data: any) => {
  window.localStorage.setItem(key, JSON.stringify(data));
};

// get data from location storage by key
export const getStorage = (key: string) => {
  const data = window.localStorage.getItem(key);
  console.log(data);

  if (data) {
    return JSON.parse(data);
  }
  return null;
};

// remove data from location storage by key
export const removeStorage = (key: string) => {
  window.localStorage.removeItem(key);
};
