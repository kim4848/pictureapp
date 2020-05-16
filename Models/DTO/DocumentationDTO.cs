using System;
using System.Collections.Generic;
using System.Globalization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
namespace pictureuploader.Models {

    public class DocumentationDTO {
        public Info Info { get; set; }
        public List<ImageInfoDTO> Images { get; set; }

    }

}