using System.Reflection;
using Microsoft.Extensions.DependencyInjection;

namespace StudyBuddy.Application
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services)
        {
            return services;
        } 
    }
}