using System.Security.Claims;
using IdentityModel;
using Microsoft.AspNetCore.Http;
using StudyBuddy.Application.Interfaces;

namespace StudyBuddy.API.Service
{
    public class CurrentUserService : ICurrentUserService
    {
        public string Email { get; set; }
        public bool IsAuthenticated { get; set; }

        public CurrentUserService(IHttpContextAccessor httpContextAccessor)
        {
            var email = httpContextAccessor.HttpContext?.User?.FindFirstValue(JwtClaimTypes.Email);

            Email = email;
            IsAuthenticated = !string.IsNullOrEmpty(email);
        }
    }
}