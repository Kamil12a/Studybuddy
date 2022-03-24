using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using StudyBuddy.API.Service;
using StudyBuddy.Application;
using StudyBuddy.Application.Interfaces;
using StudyBuddy.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudyBuddy.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddApplication();
            services.AddInfrastructure();

            services.AddDbContext<Context>(options =>
                options.UseSqlServer(
                    Configuration.GetConnectionString("DefaultConnection")));

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { 
                    Title = "StudyBuddy.API", 
                    Version = "v1",
                    Description = "A simple web application",
                    TermsOfService = new Uri("https://RegulaminUzyciaLicencja.com"),
                    Contact = new OpenApiContact
                    {
                        Name = "Kamil",
                        Email = string.Empty,
                        Url = new Uri("https://google.com")
                    },
                    License = new OpenApiLicense
                    {
                        Name = "Used License",
                        Url = new Uri("https://example.com")
                    }
                });
                c.ResolveConflictingActions (apiDescriptions => apiDescriptions.First ());
            });

            services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
            }));

            services.AddMemoryCache(); //
            services.AddControllers() //
                .AddControllersAsServices(); //
            services.AddHttpClient(); //
            services.AddMvc()
                .AddXmlDataContractSerializerFormatters(); //

            //IdentityServer by Duszyński
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", policy => policy.AllowAnyOrigin());
            });

            services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>(); //One accessor for all users, sessions and requests

            services.AddScoped(typeof(ICurrentUserService), typeof(CurrentUserService));

            services.AddAuthentication("Bearer")
                .AddJwtBearer("Bearer", options => 
                {
                    options.Authority = "https://localhost:5005";
                    options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters()
                    {
                        ValidateAudience = false //don't validate tokens from other APIs
                    };
                });
            
            services.AddAuthorization(options =>
            {
               options.AddPolicy("ApiScope", policy =>
               {
                   policy.RequireAuthenticatedUser();
                   policy.RequireClaim("scope", "api1");
               });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddFile("Logs/myLog-{Date}.txt");
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => 
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "StudyBuddy.API v1");
                    c.RoutePrefix = string.Empty;
                });
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("MyPolicy");

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers().RequireAuthorization("ApiScope");
            });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
