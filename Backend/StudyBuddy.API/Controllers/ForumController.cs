using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using StudyBuddy.Application.Interfaces;
using StudyBuddy.Application.ViewModels;

namespace StudyBuddy.API.Controllers
{
    [ApiController]
    [Route("/[controller]/[action]")]
    public class ForumController : Controller
    {
        private readonly ILogger<ForumController> _logger;
        private readonly IForumService _forumService;

        public ForumController(ILogger<ForumController> logger, IForumService forumService)
        {
            _logger = logger;
            _forumService = forumService;
        }

        [HttpGet]
        public IActionResult GetPost(int postId)
        {
            return new JsonResult(new PostVm());
        }

        [HttpPost]
        public IActionResult AddPost(PostVm post)
        {
            return new JsonResult(1);
        }

        [HttpPost]
        public IActionResult EditPost(PostVm post)
        {
            return new JsonResult(post);
        }

        [HttpDelete]
        public IActionResult DeletePost(int postId)
        {
            return new JsonResult(postId);
        }
    }
}