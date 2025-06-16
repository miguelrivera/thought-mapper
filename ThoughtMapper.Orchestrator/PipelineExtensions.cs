internal static class PipelineExtensions
{
    public static WebApplication SetPipeline(this WebApplication app)
    {
        if (app.Environment.IsDevelopment())
        {
            app.MapOpenApi();
        }

        app.UseHttpsRedirection();
        app.UseCors(Constants.CorsPolicyName);
        app.UseAuthentication();
        app.UseAuthorization();

        return app;
    }
}
