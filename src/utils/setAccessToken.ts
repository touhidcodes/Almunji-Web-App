import Cookies from "js-cookie";

interface SetTokenOptions {
  redirect?: string;
}

const setAccessToken = (token: string, option?: SetTokenOptions): void => {
  Cookies.set("accessToken", token);

  if (option?.redirect) {
    window.location.href = option.redirect;
  }
};

export default setAccessToken;
