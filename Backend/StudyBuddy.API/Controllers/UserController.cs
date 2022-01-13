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
            var user = _userService.GetUserById(userId);
            return new JsonResult(user);
        }
        
        [HttpGet]
        public IActionResult GetAllUsers()
        {
            var users = _userService.GetAllUsers();
            return new JsonResult(users);
        }

        [HttpGet]
        public IActionResult GetAllUsers(int pageSize, int pageNo, string searchString)
        {
            var users = _userService.GetAllUsers(pageSize, pageNo, searchString);
            return new JsonResult(users);
        }

        [HttpGet]
        public IActionResult GetUserProperty(int userPropertyId)
        {
            var userProperty = _userService.GetUserPropertyVm(userPropertyId);
            return new JsonResult(userProperty);
        }

        [HttpPost]
        public IActionResult AddUser([FromBody] UserVm userVm)
        {
            var id = _userService.AddUser(userVm);
            return new JsonResult(id);
        }

        [HttpPost]
        public IActionResult AddUserProperty([FromBody] UserPropertyVm userPropertyVm)
        {
            var id = _userService.AddUserPropertyVm(userPropertyVm);
            return new JsonResult(id);
        }
        
        [HttpPost]
        public IActionResult EditUser([FromBody] UserVm userVm)
        {
            _userService.UpdateUser(userVm);
            return Ok();
        }
        
        [HttpPost]
        public IActionResult EditUserProperty([FromBody] UserPropertyVm userPropertyVm)
        {
            _userService.UpdateUserProperty(userPropertyVm);
            return Ok();
        }
        
        [HttpDelete]
        public IActionResult DeleteUser(int userId)
        {
            _userService.DeleteUser(userId);
            return Ok();
        }

        [HttpDelete]
        public IActionResult DeleteUserAbsolute(int userId)
        {
            _userService.DeleteUserAbsolute(userId);
            return Ok();
        }

        [HttpDelete]
        public IActionResult DeleteUserProperty(int userPropertyId)
        {
            _userService.DeleteUserProperty(userPropertyId);
            return Ok();
        }

        [HttpDelete]
        public IActionResult DeleteUserPropertyAbsolute(int userId)
        {
            _userService.DeleteUserPropertyAbsolute(userId);
            return Ok();
        }
    }
}