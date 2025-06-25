internal static class PipelineExtensions
{
    public static WebApplication SetEnvironmentPipeline(this WebApplication app)
    {
        if (app.Environment.IsDevelopment())
        {
            app.MapOpenApi();
        }

        if (app.Environment.IsStaging())
        {
        }

        if (app.Environment.IsProduction())
        {
            app.UseHttpsRedirection();
        }

        return app;
    }
}
