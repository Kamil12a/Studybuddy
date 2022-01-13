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

        [HttpPost]
        public IActionResult AddGroup([FromBody] GroupVm group)
        {
            var id = _groupService.AddGroup(group);
            return new JsonResult(id);
        }

        [HttpPost]
        public IActionResult AddGroupProperty([FromBody] GroupPropertyVm groupProperty)
        {
            var id = _groupService.AddGroupPropertyVm(groupProperty);
            return new JsonResult(id);
        }

        [HttpDelete]
        public IActionResult DeleteGroup(int groupId)
        {
            try
            {
                _groupService.DeleteGroup(groupId);
            }
            catch
            {
                return NotFound();
            }
            return Ok();
        }

        [HttpDelete]
        public IActionResult DeleteGroupProperty(int groupPropertyId)
        {
            try
            {
                _groupService.DeleteGroupProperty(groupPropertyId);
            }
            catch
            {
                return NotFound();
            }
            return Ok();
        }

        [HttpGet]
        public IActionResult GetGroup(int groupId)
        {
            var group = _groupService.GetGroup(groupId);
            return new JsonResult(group);
        }

        [HttpGet]
        public IActionResult GetGroupProperty(int groupPropertyId)
        {
            var groupProperty = _groupService.GetGroupPropertyVm(groupPropertyId);
            return new JsonResult(groupProperty);
        }

        [HttpPost]
        public IActionResult EditGroup([FromBody] GroupVm group)
        {
            try
            {
                _groupService.UpdateGroup(group);
            }
            catch
            {
                return NotFound();
            }   
            return Ok();
        }

        [HttpPost]
        public IActionResult EditGroupProperty([FromBody] GroupPropertyVm groupProperty)
        {
            try
            {
                _groupService.UpdateGroupProperty(groupProperty);
            }
            catch
            {
                return NotFound();
            }
            return Ok();
        }

    }
}