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
    public class SubjectController : Controller
    {
        private readonly ILogger<GroupController> _logger;
        private readonly ISubjectService _subjectService;
        
        public SubjectController(ILogger<GroupController> logger, ISubjectService subjectService)
        {
            _logger = logger;
            _subjectService = subjectService;
        }

        [HttpPost]
        public IActionResult AddSubject([FromBody] SubjectVm subjectVm)
        {
            int id = -1;

            try
            {
                id = _subjectService.AddSubject(subjectVm);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }

            return new JsonResult(id);
        }

        [HttpDelete]
        public IActionResult DeleteGroup(int subjectId)
        {
            try
            {
                _subjectService.DeleteSubject(subjectId);
            }
            catch
            {
                return NotFound();
            }
            return Ok();
        }

        [HttpGet]
        public IActionResult GetSubject(int subjectId)
        {
            var subject = _subjectService.GetSubject(subjectId);
            return new JsonResult(subject);
        }
    }
}