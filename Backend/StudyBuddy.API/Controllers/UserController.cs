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
        public IActionResult GetAllUsersOrdered(int pageSize, int pageNo)
        {
            var users = _userService.GetAllUsers(pageSize, pageNo);
            return new JsonResult(users);
        }

        [HttpGet]
        public IActionResult GetAllUsersFiltered(int pageSize, int pageNo, string searchString)
        {
            var users = _userService.GetAllUsers(pageSize, pageNo, searchString);
            return new JsonResult(users);
        }

        [HttpPost]
        public IActionResult AddUser([FromBody] NewUserVm userVm)
        {
            var id = _userService.AddUser(userVm);
            return new JsonResult(id);
        }
        
        [HttpPost]
        public IActionResult EditUser([FromBody] NewUserVm userVm)
        {
            _userService.UpdateUser(userVm);
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
    }
}