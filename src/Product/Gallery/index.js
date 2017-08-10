import React, {Component} from 'react';
import './Gallery.css';

const galleryPhotos = [
  {
    "src": "images/bitmap_4.jpg",
    "src2x": "../images/bitmap_4@2x.jpg 2x",
    "src3x": "../images/bitmap_4@3x.jpg 3x"
  },
  {
    "src": "images/bitmap_4.jpg",
    "src2x": "../images/bitmap_4@2x.jpg 2x",
    "src3x": "../images/bitmap_4@3x.jpg 3x"
  },
  {
    "src": "images/bitmap_2.jpg",
    "src2x": "../images/bitmap@2x.jpg 2x",
    "src3x": "../images/bitmap@3x.jpg 3x"
  },
  {
    "src": "images/bitmap_3.jpg",
    "src2x": "../images/bitmap_3@2x.jpg 2x",
    "src3x": "../images/bitmap_3@3x.jpg 3x"
  }
];

export default () => {
    return (

        <div className="gallery">
          {
            galleryPhotos.map(function(photoObj, index) {
              return <img className="gallery__photo" src={photoObj.src} key={index}/>;
            })
          }
        </div>
    )
}

