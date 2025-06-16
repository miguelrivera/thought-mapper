using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Cors.Infrastructure;

internal static class ServiceExtensions
{
    private static void SetCorsPolicy(CorsOptions options)
    {
        options.AddPolicy(Constants.CorsPolicyName, policy => policy
            .WithOrigins(Constants.SpaUrl)
            .AllowAnyHeader()
            .AllowAnyMethod());
    }

    private static void SetBearerOptions(JwtBearerOptions options)
    {
        options.Authority = Constants.IdentiryServerUrl;
        options.Audience = Constants.DefaultAudience;
        options.RequireHttpsMetadata = false; // For dev only
    }

    public static IServiceCollection AddServices(this IServiceCollection services)
    {
        services.AddOpenApi();
        services.AddAuthentication(Constants.AuthScheme).AddJwtBearer(Constants.AuthScheme, SetBearerOptions);
        services.AddAuthorization();
        services.AddCors(SetCorsPolicy);

        return services;
    }
}
