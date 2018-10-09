import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
/* <!-- PHOTO GALLERY --> */

const photos = [
  { src: '/img/Fachada.jpg', width: 1, height: 1 },
  { src: '/img/Cocina.jpg', width: 1, height: 1 },  
  { src: '/img/Sala.jpg', width: 1, height: 1 },  
  { src: '/img/patio-externo.jpg', width: 1, height: 1 },
  { src: '/img/HP.jpg', width: 1, height: 1 },
  { src: '/img/Hab_F.jpg', width: 1, height: 1 },
  { src: '/img/Hab_F1.jpg', width: 1, height: 1 },
  { src: '/img/Bath_PA.jpg', width: 1, height: 1 },
  { src: '/img/Bath_HP.jpg', width: 1, height: 1 }
];

class PhotoGallery extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  render() {
    return (
      <section id="gallery" className="py-5">
        <div className="container">
          <h1 className="text-center">Galer&iacute;a de Fotos</h1>
          <p className="text-center">Revisa cada detalle mas a fondo</p>

          <Gallery photos={photos} onClick={this.openLightbox} />
          <Lightbox
            images={photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />
        </div>
      </section>
    );
  }
}


export default PhotoGallery;
