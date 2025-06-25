using Microsoft.AspNetCore.Cors.Infrastructure;

namespace ThoughtMapper.Orchestrator
{
    public class ThoughtMapperCors
    {
        public static void Policy(CorsOptions options)
        {
            options.AddPolicy(Constants.CorsPolicyName, policy => policy
                .WithOrigins(Constants.SpaUrl)
                .AllowAnyHeader()
                .AllowAnyMethod());

        }
    }
}
