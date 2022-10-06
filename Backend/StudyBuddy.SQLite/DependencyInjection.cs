using Microsoft.Extensions.DependencyInjection;
using StudyBuddy.Domain.Interfaces;
using StudyBuddy.Infrastructure.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudyBuddy.SQLite
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services)
        {
            services.AddTransient<IForumRepository, ForumRepository>();
            services.AddTransient<IGroupRepository, GroupRepository>();
            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<ISubjectRepository, SubjectRepository>();

            return services;
        }
    }
}
