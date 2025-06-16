
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddServices();

var app = builder
    .Build()
    .SetPipeline()
    .SetRoutes();

app.Run();