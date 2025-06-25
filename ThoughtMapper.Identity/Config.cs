using Duende.IdentityServer.Models;

namespace ThoughtMapper.Identity;

public static class Config
{
    public static IEnumerable<IdentityResource> IdentityResources =>
        [
            new IdentityResources.OpenId(),
            new IdentityResources.Profile(),
        ];

    public static IEnumerable<ApiScope> ApiScopes => [new ApiScope("thoughtmapper.api", "ThoughtMapper API")];

    public static IEnumerable<Client> Clients => [
        new Client
        {
            ClientId = "thoughtmapper-spa",
            ClientName = "ThoughtMapper Svelte SPA",
            AllowedGrantTypes = GrantTypes.Code,
            RequireClientSecret = false,
            RequirePkce = true,
            RedirectUris = { "http://localhost:5173/callback" },
            PostLogoutRedirectUris = { "http://localhost:5173/" },
            AllowedScopes = { "openid", "profile", "thoughtmapper.api" },
            AllowAccessTokensViaBrowser = true,
            AllowedCorsOrigins = { "http://localhost:5173" }
        }
    ];
}
