using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using StudyBuddy.Application.Interfaces;
using StudyBuddy.Application.ViewModels;

namespace StudyBuddy.API.Controllers
{
    [ApiController]
    [Route("/[controller]/[action]")]
    public class UserController : Controller
    {
        private readonly ILogger<UserController> _logger;
        private readonly IUserService _userService;
        public UserController(ILogger<UserController> logger, IUserService userService)
        {
            _logger = logger;
            _userService = userService;
        }
        
        [HttpGet]
        public IActionResult GetUserById(int userId)
        {
            return new JsonResult(new UserVm());
        }
        
        [HttpGet]
        public IActionResult GetAllUsers()
        {
            return new JsonResult(new ListUserForListVm());
        }

        [HttpGet]
        public IActionResult GetAllUsers(int pageSize, int pageNo, string searchString)
        {
            return new JsonResult(new ListUserForListVm());
        }

        [HttpGet]
        public IActionResult GetUserProperty(int userPropertyId)
        {
            return new JsonResult(new UserPropertyVm());
        }

        [HttpPost]
        public IActionResult AddUser([FromBody] UserVm userVm)
        {
            return new JsonResult(1);
        }

        [HttpPost]
        public IActionResult AddUserProperty([FromBody] UserPropertyVm userPropertyVm)
        {
            return new JsonResult(1);
        }
        
        [HttpPost]
        public IActionResult EditUser([FromBody] UserVm userVm)
        {
            return Ok();
        }
        
        [HttpPost]
        public IActionResult EditUserProperty([FromBody] UserPropertyVm userPropertyVm)
        {
            return Ok();
        }
        
        [HttpDelete]
        public IActionResult DeleteUser(int userId)
        {
            return Ok();
        }

        [HttpDelete]
        public IActionResult DeleteUserAbsolute(int userId)
        {
            return Ok();
        }

        [HttpDelete]
        public IActionResult DeleteUserProperty(int userPropertyId)
        {
            return Ok();
        }

        [HttpDelete]
        public IActionResult DeleteUserPropertyAbsolute(int userId)
        {
            return Ok();
        }
    }
}