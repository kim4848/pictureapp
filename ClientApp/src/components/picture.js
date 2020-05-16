import React, { Component } from "react";
import ImageUploader from "react-images-upload";

export class Picture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUri: [],
      removedPictures: [],
      images: [],
    };
    this.onDrop = this.onDrop.bind(this);
    this.handleTakePhoto = this.handleTakePhoto.bind();
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

  handleTakePhoto = (dataUri, name, type) => {
    this.resizeImage(dataUri.target.result);
  };

  resizeImage = (data) => {
    var img = document.createElement("img");

    img.onload = () => {
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
      this.handleImageList(dataurl);
    };

    img.src = data;
  };

  clearImage() {
    this.nameField.current.state.files = [];
    this.nameField.current.state.pictures = [];
  }

  onDrop(picture) {
    console.log(picture);
    var uniquepictures = picture.filter(this.onlyUnique);

    uniquepictures.forEach((x) => {
      const reader = new FileReader();
      reader.onload = (e) => this.handleTakePhoto(e, x.name, x.type);
      reader.readAsDataURL(x);
    });
    this.clearImage();
  }

  onSizeChanged = (e) => {
    var size = 0;

    if (e.target.name === "Length") {
      console.log(this.state.Width);
      size = this.state.Width * e.target.value;
    } else {
      size = this.state.Length * e.target.value;
    }

    console.log(size);

    var sizeText = size + " m2";

    if (isNaN(size)) {
      this.setState({ [e.target.name]: e.target.value });
    } else {
      var weight = this.calculateWeight(size, this.state.Height);

      this.setState({ [e.target.name]: e.target.value, Size: Math.round(size, -1), SizeText: sizeText.toString(), Weight: weight });
    }
  };

  handleImageList = (data) => {
    var images = this.props.images;
    var exists = images.indexOf(data);
    if (exists >= 0) {
      console.log("already exists");
    } else {
      images.push({ id: "", imageName: data });
      this.props.onUpdatedImages(images);
    }
  };

  render() {
    return <ImageUploader ref={this.nameField} withIcon={false} buttonText="Tilføj billeder" maxFileSize="15242880" onChange={this.onDrop} imgExtension={[".jpg", "jpeg", ".gif", ".png", ".gif"]} withLabel={false} fileContainerStyle={this.controlStyles} />;
  }
}

export default Picture;
