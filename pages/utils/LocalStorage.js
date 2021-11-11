import { useEffect, useState } from "react";

const SetLocalStorage = (key, value) => {
  if (key) {
    try {
      const storedValue = JSON.stringify(value);
      window.localStorage.setItem(key, storedValue);
    } catch (error) {
      throw error;
    }
  }
};

const GetLocalStorageItem = (key) => {
  if (key) {
    try {
      const item = window.localStorage.getItem(key);
      const storedValue = JSON.parse(item);
      return storedValue;
    } catch (error) {
      throw error;
    }
  }
};

export { SetLocalStorage, GetLocalStorageItem };
