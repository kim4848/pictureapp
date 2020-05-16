import React, { Component } from "react";
import Picture from "./picture";
import { Input, Button, Label } from "reactstrap";
import {SaveDoc} from "../../src/components/Client/DocClient"

const info = { address: "", sender: "", case: "", message: "" };

export class PictureView extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [], info: info };
  }

  onImagesUpdate = (imageList) => {
    this.setState({ images: this.state.images.concat(imageList) });
  };

  inputChanged = (e) => {
    this.state.info[e.target.name] = e.target.value;
    this.setState({ info: this.state.info });
  };
  onSendClick = async () => {

    var dokumentation={info:this.state.info,images:this.state.images}

    //TODO: Uploade obj

    console.log(dokumentation)

   await SaveDoc(dokumentation)


  };

  render() {
    return (
      <div>
        <Label>Adresse:</Label>
        <Input name="address" onChange={this.inputChanged}></Input>
        <Label>Afsender:</Label>
        <Input name="sender" onChange={this.inputChanged}></Input>
        <Label>Sag:</Label>
        <Input name="case" onChange={this.inputChanged}></Input>
        <Label>Besked:</Label>
        <Input name="message" onChange={this.inputChanged}></Input>
        <Picture images={[]} onUpdatedImages={this.onImagesUpdate}></Picture>
        <Button color="primary" onClick={this.onSendClick}>
          Send
        </Button>
        {this.state.images.map((x, key) => {
          {
            try {
              var lon = x.exifData.GPSLatitude[0].numerator + x.exifData.GPSLatitude[1].numerator / 60 + x.exifData.GPSLatitude[2].numerator / x.exifData.GPSLatitude[2].denominator / 3600;
              var lat = x.exifData.GPSLongitude[0].numerator + x.exifData.GPSLongitude[1].numerator / 60 + x.exifData.GPSLongitude[2].numerator / x.exifData.GPSLongitude[2].denominator / 3600;
              var source = "https://maps.google.com/?q=" + lon + "," + lat;
            } catch {
              console.log("Unable to read Geo Info");
            }
          }
          return (
            <div className="mb-3" key={key}>
              <img style={{ maxWidth: 300, maxHeight: 300 }} src={x.imageData}></img>

              {lon ? (
                <div>
                  <p>
                    LON: {lon} LAT: {lat}
                  </p>
                  <a href={source} target="_blank">
                    Show on map
                  </a>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }
}
