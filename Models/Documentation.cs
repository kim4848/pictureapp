using System;
using System.Collections.Generic;
using System.Globalization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
namespace pictureuploader.Models {

    public class Documentation {
        public Guid id { get; set; }
        public Info Info { get; set; }
        public List<dynamic> Images { get; set; }

    }

}