using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using StudyBuddy.Application.Interfaces;
using StudyBuddy.Application.ViewModels;
using StudyBuddy.Domain.Models;
using System;
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
        public IActionResult AddGroup([FromBody] NewGroupVm group)
        {
            int id = -1;

            try
            {
                id = _groupService.AddGroup(group);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }

            return new JsonResult(id);
        }

        [HttpPost]
        public IActionResult AddUserToGroup(int groupId, int userId)
        {
            var success = _groupService.AddUserToGroup(groupId, userId);
            return new JsonResult(success);
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

        [HttpGet]
        public IActionResult GetAllGroups()
        {
            var groups = _groupService.GetAllGroups();
            return new JsonResult(groups);
        }

        [HttpGet]
        public IActionResult GetAllGroupsOrdered(int pageSize, int pageNo)
        {
            var groups = _groupService.GetAllGroups(pageSize, pageNo);
            return new JsonResult(groups);
        }

        [HttpGet]
        public IActionResult GetAllGroupsFiltered(int pageSize, int pageNo, string searchString)
        {
            var groups = _groupService.GetAllGroups(pageSize, pageNo, searchString);
            return new JsonResult(groups);
        }

        [HttpGet]
        public IActionResult GetGroup(int groupId)
        {
            var group = _groupService.GetGroupById(groupId);
            return new JsonResult(group);
        }

        [HttpPost]
        public IActionResult EditGroup([FromBody] EditGroupVm group)
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
    }
}