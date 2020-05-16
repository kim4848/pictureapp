using System;
using System.Collections.Generic;
using System.Linq;
using pictureuploader.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using pictureuploader.Models;

namespace pictureuploader.Controllers {
    [ApiController]
    [Route ("[controller]")]
    public class DocumentationController : ControllerBase {
        private readonly ILogger<DocumentationController> _logger;
        private readonly DBService dBService;

        public DocumentationController (ILogger<DocumentationController> logger, DBService dBService) {
            this.dBService = dBService;
            _logger = logger;
        }

        [HttpPost]
        public async System.Threading.Tasks.Task<IActionResult> PostAsync (DocumentationDTO documentation) {
            await dBService.AddDocAsync(documentation);
            return Ok (documentation);

        }

    }
}