using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using StudyBuddy.Application.Interfaces;
using StudyBuddy.Application.ViewModels;
using StudyBuddy.Domain.Models;
using System.Web;

namespace StudyBuddy.API.Controllers
{
    [ApiController]
    [Route("/[controller]/[action]")]
    public class GroupController : Controller
    {
        private readonly ILogger<GroupController> _logger;
        private readonly IGroupService _groupService;
        
        public GroupController(ILogger<GroupController> logger, IGroupService groupService)
        {
            _logger = logger;
            _groupService = groupService;
        }

        [HttpPut]
        public IActionResult AddGroup([FromBody] GroupVm group)
        {
            return new JsonResult(group.Id);
        }

        [HttpPut]
        public IActionResult AddGroupProperty([FromBody] GroupPropertyVm gp)
        {
            return new JsonResult(gp.Id);
        }

        [HttpDelete]
        public IActionResult DeleteGroup(int groupId)
        {
            return new JsonResult(groupId);
        }

        [HttpDelete]
        public IActionResult DeleteGroupProperty(int groupPropertyId)
        {
            return new JsonResult(groupPropertyId);
        }

        [HttpGet]
        public IActionResult GetGroup(int groupId)
        {
            var group = new GroupVm(){
                Id = groupId,
                TutorId = 10,
                AdminId = 101
            };
            return new JsonResult(group);
        }

        [HttpGet]
        public IActionResult GetGroupProperty(int groupPropertyId)
        {
            var groupProperty = new GroupPropertyVm(){
                Id = groupPropertyId,
                PublishDate = System.DateTime.MinValue,
                ExpireDate = System.DateTime.MaxValue,
                Description = "Sample description",
                GroupId = 1
            };

            return new JsonResult(groupProperty);
        }

        [HttpPost]
        public IActionResult EditGroup([FromBody] GroupVm modelg)
        {
            return Ok();
        }

        [HttpPost]
        public IActionResult EditGroupProperty([FromBody] GroupPropertyVm modelgp)
        {
            return Ok();
        }

    }
}