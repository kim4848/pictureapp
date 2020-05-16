import React, { Component } from 'react';
import Picture from './picture';

export class PictureView extends Component { 

  render () {
    return (
      <div>
          <Picture images={[]} onUpdatedImages={e=>console.log(e)}></Picture>
       
      </div>
    );
  }
}
