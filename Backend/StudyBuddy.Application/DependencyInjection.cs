using System.Reflection;
using Microsoft.Extensions.DependencyInjection;

namespace StudyBuddy.Application
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddApplication(this IServiceCollection services)
        {
            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            return services;
        } 
    }
}