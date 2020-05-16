using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
namespace pictureuploader.Models {
    public class ImageInfo {

        public Guid id { get; set; }
        public string ImageName { get; set; }
        public ExifData ExifData { get; set; }
    }
}