import { CookieJar } from "tough-cookie";

const KEY = "com.senior.pau.token";

export const tokenMapper = function (jar: CookieJar): string {
  const { cookies } = jar.toJSON();
  const { value } = cookies.find((element) => element.key === KEY);
  const { access_token } = JSON.parse(JSON.parse(value));
  return access_token;
};
