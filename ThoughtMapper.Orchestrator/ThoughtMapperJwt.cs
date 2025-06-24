using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace ThoughtMapper.Orchestrator
{
    public class ThoughtMapperJwt
    {
        public static void LocalIdentityServer(JwtBearerOptions options)
        {
            options.Authority = Constants.IdentiryServerUrl;
            options.Audience = Constants.DefaultAudience;
            options.RequireHttpsMetadata = false; // For dev only
        }

    }
}
