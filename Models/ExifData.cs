using System;
using System.Collections.Generic;
using System.Globalization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
namespace pictureuploader.Models {
    public partial class ExifData {

        public Guid id { get; set; }

        [JsonProperty ("Make")]
        public string Make { get; set; }

        [JsonProperty ("Model")]
        public string Model { get; set; }

        [JsonProperty ("Orientation")]
        public long Orientation { get; set; }

        [JsonProperty ("XResolution")]
        public long XResolution { get; set; }

        [JsonProperty ("YResolution")]
        public long YResolution { get; set; }

        [JsonProperty ("ResolutionUnit")]
        public long ResolutionUnit { get; set; }

        [JsonProperty ("Software")]
        public string Software { get; set; }

        [JsonProperty ("DateTime")]
        public string DateTime { get; set; }

        [JsonProperty ("ExifIFDPointer")]
        public long ExifIfdPointer { get; set; }

        [JsonProperty ("GPSInfoIFDPointer")]
        public long GpsInfoIfdPointer { get; set; }

        [JsonProperty ("ExposureTime")]
        public double ExposureTime { get; set; }

        [JsonProperty ("FNumber")]
        public double FNumber { get; set; }

        [JsonProperty ("ExposureProgram")]
        public string ExposureProgram { get; set; }

        [JsonProperty ("ISOSpeedRatings")]
        public long IsoSpeedRatings { get; set; }

        [JsonProperty ("ExifVersion")]
        public string ExifVersion { get; set; }

        [JsonProperty ("DateTimeOriginal")]
        public string DateTimeOriginal { get; set; }

        [JsonProperty ("DateTimeDigitized")]
        public string DateTimeDigitized { get; set; }

        [JsonProperty ("undefined")]
        public double Undefined { get; set; }

        [JsonProperty ("ComponentsConfiguration")]
        public string ComponentsConfiguration { get; set; }

        [JsonProperty ("ShutterSpeedValue")]
        public double ShutterSpeedValue { get; set; }

        [JsonProperty ("ApertureValue")]
        public double ApertureValue { get; set; }

        [JsonProperty ("BrightnessValue")]
        public double BrightnessValue { get; set; }

        [JsonProperty ("ExposureBias")]
        public long ExposureBias { get; set; }

        [JsonProperty ("MeteringMode")]
        public string MeteringMode { get; set; }

        [JsonProperty ("Flash")]
        public string Flash { get; set; }

        [JsonProperty ("FocalLength")]
        public double FocalLength { get; set; }

        [JsonProperty ("SubjectArea")]
        public long[] SubjectArea { get; set; }

        [JsonProperty ("MakerNote")]
        public long[] MakerNote { get; set; }

        [JsonProperty ("FlashpixVersion")]
        public string FlashpixVersion { get; set; }

        [JsonProperty ("ColorSpace")]
        public long ColorSpace { get; set; }

        [JsonProperty ("PixelXDimension")]
        public long PixelXDimension { get; set; }

        [JsonProperty ("PixelYDimension")]
        public long PixelYDimension { get; set; }

        [JsonProperty ("SensingMethod")]
        public string SensingMethod { get; set; }

        [JsonProperty ("SceneType")]
        public string SceneType { get; set; }

        [JsonProperty ("ExposureMode")]
        public long ExposureMode { get; set; }

        [JsonProperty ("WhiteBalance")]
        public string WhiteBalance { get; set; }

        [JsonProperty ("FocalLengthIn35mmFilm")]
        public long FocalLengthIn35MmFilm { get; set; }

        [JsonProperty ("SceneCaptureType")]
        public string SceneCaptureType { get; set; }

        [JsonProperty ("GPSLatitudeRef")]
        public string GpsLatitudeRef { get; set; }

        [JsonProperty ("GPSLatitude")]
        public double[] GpsLatitude { get; set; }

        [JsonProperty ("GPSLongitudeRef")]
        public string GpsLongitudeRef { get; set; }

        [JsonProperty ("GPSLongitude")]
        public long[] GpsLongitude { get; set; }

        [JsonProperty ("GPSAltitudeRef")]
        public long GpsAltitudeRef { get; set; }

        [JsonProperty ("GPSAltitude")]
        public double GpsAltitude { get; set; }

        [JsonProperty ("GPSSpeedRef")]
        public string GpsSpeedRef { get; set; }

        [JsonProperty ("GPSSpeed")]
        public double GpsSpeed { get; set; }

        [JsonProperty ("GPSImgDirectionRef")]
        public string GpsImgDirectionRef { get; set; }

        [JsonProperty ("GPSImgDirection")]
        public double GpsImgDirection { get; set; }

        [JsonProperty ("GPSDestBearingRef")]
        public string GpsDestBearingRef { get; set; }

        [JsonProperty ("GPSDestBearing")]
        public double GpsDestBearing { get; set; }

        [JsonProperty ("thumbnail")]
        public Thumbnail Thumbnail { get; set; }
    }

    public partial class Thumbnail { }
}