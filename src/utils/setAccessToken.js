// Simulating cookie handling for a Vite project (you can use libraries like js-cookie or a custom implementation)
import Cookies from "js-cookie";

// A function to set the access token and optionally redirect
const setAccessToken = (token, option) => {
  // Set the token in cookies
  Cookies.set("accessToken", token);

  // If a redirect option is provided, use window.location to redirect
  if (option && option.redirect) {
    window.location.href = option.redirect;
  }
};

export default setAccessToken;
