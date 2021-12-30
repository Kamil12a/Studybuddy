using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Web;

namespace StudyBuddy.API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class GroupController : Controller
    {
        private readonly ILogger<GroupController> _logger;
        private readonly IGroupService _groupService;
        public GroupController(ILogger<GroupController> logger, IGroupService groupService)
        {
            _logger = logger;
        }

        [HttpGet]
        public GetGroup(int groupId)
        {
            var client = _clientService.GetClient(clientId);
            return View(client);
        }

        []
    }
}