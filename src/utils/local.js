import cookies from "js-cookie";

import { isSafari } from "./browser";

export const getLocal = (key) => {
  if (!window || !key) return null;
  const result = window.localStorage.getItem(key);
  if (!result) return null;
  return JSON.parse(result);
};

export const setLocal = (key, data) => {
  if (!window || !key) return;
  window.localStorage.setItem(key, JSON.stringify(data));
};

export const removeLocalByKey = (key) => {
  if (!window || !key) return;
  window.localStorage.removeItem(key);
};

export const removeCookieByKey = (key) => {
  if (!window || !key) return;
  cookies.remove(key);
};

export const clearLocal = () => {
  window.localStorage.clear();
};

export const getSessionStorage = (key) => {
  if (typeof window === "undefined" || !key) return null;
  const result = window.sessionStorage.getItem(key);
  if (!result) return null;
  return JSON.parse(result);
};

export const setSessionStorage = (key, data) => {
  if (typeof window === "undefined" || !key || !data) return;

  return window.sessionStorage.setItem(key, JSON.stringify(data));
};

export const removeSessionStorage = (key) => {
  if (typeof window === "undefined") return;

  return window.sessionStorage.removeItem(key);
};

export const getCookie = (key) => {
  const result = cookies.get(key);
  if (result) {
    return JSON.parse(result);
  }

  return null;
}

export const setCookie = (key, value, expires = 31536000) => {
  const expiredTime = new Date(new Date().getTime() + expires * 1000);

  let secure = true;

  if (isSafari && import.meta.env.VITE_BASE_ENV === "develop") {
    secure = false;
  }
  return cookies.set(key, JSON.stringify(value), {
    expires: expiredTime,
    sameSite: "none",
    secure,
  });
}

export function expireCookie(key) {
  return cookies.remove(key);
}
