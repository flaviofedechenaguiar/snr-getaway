import { CookieJar } from "tough-cookie";

const KEY = "com.senior.token";

export const tokenMapper = function (jar: CookieJar): string {
  const { cookies } = jar.toJSON();
  const { value } = cookies.find((element) => element.key === KEY);
  const { access_token } = JSON.parse(decodeURIComponent(value));
  return access_token;
};
