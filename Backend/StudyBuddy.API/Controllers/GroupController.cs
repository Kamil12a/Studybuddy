using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using StudyBuddy.Application.Interfaces;
using StudyBuddy.Application.ViewModels;
using System.Web;

namespace StudyBuddy.API.Controllers
{
    [ApiController]
    [Route("/[controller]")]
    public class GroupController : Controller
    {
        private readonly ILogger<GroupController> _logger;
        private readonly IGroupService _groupService;
        
        public GroupController(ILogger<GroupController> logger, IGroupService groupService)
        {
            _logger = logger;
            _groupService = groupService;
        }

        // [HttpGet]
        // public IActionResult AddGroup()
        // {
        //     return new JsonResult(new Application.ViewModels.GroupVm());
        // }
    dupa
        [HttpPost]
        public IActionResult AddGroup([FromBody] GroupVm model)
        {
            int id = _groupService.AddGroup(model);
            return new JsonResult(id);
        }

        [HttpGet]
        public IActionResult GetGroup(int groupId)
        {
            var group = _groupService.GetGroup(groupId);
            return new JsonResult(group);
        }


    }
}