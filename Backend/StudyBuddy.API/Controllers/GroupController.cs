using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using StudyBuddy.Application.Interfaces;
using System.Web;

namespace StudyBuddy.API.Controllers
{
    // [ApiController]
    // [Route("/api/[controller]")]
    public class GroupController : Controller
    {
        private readonly ILogger<GroupController> _logger;
        private readonly IGroupService _groupService;
        
        public GroupController(ILogger<GroupController> logger, IGroupService groupService)
        {
            _logger = logger;
            _groupService = groupService;
        }

        [HttpGet]
        public IActionResult AddGroup()
        {
            return new JsonResult(1);
            var group = _groupService.AddGroup(new Application.ViewModels.GroupVm());
            return new JsonResult(group);
        }

        [HttpGet]
        public IActionResult GetGroup(int groupId)
        {
            var group = _groupService.GetGroup(groupId);
            return new JsonResult(group);
        }


    }
}