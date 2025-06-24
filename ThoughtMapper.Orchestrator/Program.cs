using Microsoft.EntityFrameworkCore;
using ThoughtMapper.Orchestrator;
using ThoughtMapper.Orchestrator.Data;

var builder = WebApplication.CreateBuilder(args);


builder.Services
    .AddCors(ThoughtMapperCors.Policy)
    .AddOpenApi()
    .AddAuthorization()
    .AddAuthentication(Constants.AuthScheme)
    .AddJwtBearer(Constants.AuthScheme, ThoughtMapperJwt.LocalIdentityServer);


builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

app.SetEnvironmentPipeline()
   .UseHttpsRedirection()
   .UseCors(Constants.CorsPolicyName)
   .UseAuthentication()
   .UseAuthorization();

app.Run();