import React, {Component} from 'react';
import './Gallery.css';

import galleryPhotos from "../../data/gallery-photos.json";

class Gallery extends Component {

  // builds photos elements for the gallery
  makeGallery() {
    return galleryPhotos.map(function (photoObj, index) {
      return <img className="gallery__photo" src={photoObj.src} key={index}/>;
    });
  }

  render() {
    return (
        <div className="gallery">
          {this.makeGallery()}
        </div>
    )
  }
}

export default Gallery;

