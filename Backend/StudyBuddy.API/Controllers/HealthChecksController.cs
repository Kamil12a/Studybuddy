using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.UI.V4.Pages.Internal; //StudyBuddy.API.Models for ErrorModel
using Microsoft.AspNetCore.Mvc;

namespace StudyBuddy.API.Controllers
{
    [ApiController]
    [Route("api/hc")]
    public class HealthChecksController : ControllerBase
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        public async Task<ActionResult<string>> GetAsync()
        {
            return "HealthChecksController is not implemented yet";
        }
    }
}