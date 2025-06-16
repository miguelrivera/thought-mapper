import { UserManager } from "oidc-client-ts";

export const oidcConfig = {
  authority: "https://localhost:5001", // IdentityServer URL
  client_id: "thought-mapper-spa",
  redirect_uri: "http://localhost:5173/callback",
  post_logout_redirect_uri: "http://localhost:5173/",
  response_type: "code",
  scope: "openid profile thoughtmapper.api",
};

export const userManager = new UserManager(oidcConfig);