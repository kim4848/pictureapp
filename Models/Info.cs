using System;
using System.Collections.Generic;
using System.Globalization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
namespace pictureuploader.Models { 


public class Info{

    public Guid id { get; set; }
    public string Address { get; set; }
    public string Sender  { get; set; }
    public string Case { get; set; }
    public string Message { get; set; }

}

}