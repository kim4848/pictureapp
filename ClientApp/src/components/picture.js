import React, { Component } from "react";
import ImageUploader from "react-images-upload";
import EXIF from "exif-js";

export class Picture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUri: [],
      removedPictures: [],
      images: [],
    };
    this.onDrop = this.onDrop.bind(this);
    this.resizeImage = this.resizeImage.bind();
    this.myRef = React.createRef();
    this.nameField = React.createRef();
  }

  controlStyles = {
    borderStyler: "none",
    boxShadow: "0 0",
    justifyContent: "right",
    alignItems: "right",
    display: "block",
  };
  componentDidMount() {
    this.clearImage();
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  resizeImage = (data, exifData) => {

    var data=data.target.result

    if (exifData) {
      console.log(exifData);      
    } else {
      console.log("No EXIF data found in image '" + data.name + "'.");
    }

    var img = document.createElement("img");

    img.onload = () => {
      console.log("load")
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      var MAX_WIDTH = 600;
      var MAX_HEIGHT = 600;
      var width = img.width;
      var height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }
      canvas.width = width;
      canvas.height = height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      var dataurl = canvas.toDataURL("image/png");
      this.handleImageList({data: dataurl,exifData:exifData} );
    };
    console.log("set data",data)
    img.src = data;
  };

  clearImage() {
    this.nameField.current.state.files = [];
    this.nameField.current.state.pictures = [];
  }

  onDrop(picture) {
    console.log(picture);
    var uniquepictures = picture.filter(this.onlyUnique);
    var resizeImage = this.resizeImage;

    uniquepictures.forEach((x) => {
      EXIF.getData(picture[0], function () {
        console.log("exif");
        var exifData = EXIF.pretty(this);

        console.log( JSON.stringify( EXIF.getAllTags(this)))

        const reader = new FileReader();
        reader.onload = (e) => resizeImage(e, EXIF.getAllTags(this));
        reader.readAsDataURL(x);
      });
    });
    this.clearImage();
  }

  handleImageList = (data) => {
    var images = this.props.images;
    var exists = images.indexOf(data);
    if (exists >= 0) {
      console.log("already exists");
    } else {
      images.push({ id: "", imageData: data.data,exifData:data.exifData });
      console.log("Handle before update")
      this.props.onUpdatedImages(images);
    }
  };

  render() {
    return <ImageUploader ref={this.nameField} withIcon={false} buttonText="Tilføj billeder" maxFileSize={15242880} onChange={this.onDrop} imgExtension={[".jpg", "jpeg", ".gif", ".png", ".gif"]} withLabel={false} fileContainerStyle={this.controlStyles} />;
  }
}

export default Picture;
