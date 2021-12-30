using System.Reflection;
using Microsoft.Extensions.DependencyInjection;
using StudyBuddy.Application.Interfaces;
using StudyBuddy.Application.Services;

namespace StudyBuddy.Application
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddApplication(this IServiceCollection services)
        {
            services.AddTransient<IForumService, ForumService>();
            services.AddTransient<IGroupService, GroupService>();
            services.AddTransient<IUserService, UserService>();

            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            return services;
        } 
    }
}