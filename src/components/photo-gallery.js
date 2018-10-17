import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
/* <!-- PHOTO GALLERY --> */

const photos = [
  {
    src: '/img/thumbs/Fachada.jpg',    
    width: 1,
    height: 1,    
    caption: 'Protecciones de metal reforzado en cada ventana. Cochera para 1 o 2 autos'
  },
  {
    src: '/img/thumbs/Puerta.jpg',    
    width: 1,
    height: 1,    
    caption: 'Protecciones de metal reforzado en puerta principal'
  },
  {
    src: '/img/thumbs/Cocina3.jpg',
    width: 1,
    height: 1,
    caption: 'Planta baja - Cocina integral y puerta de metal reforzada para salida a patio'
  },
  {
    src: '/img/thumbs/Sala.jpg',
    width: 1,
    height: 1,    
    caption: 'Planta baja - Mosquitero al interior de la ventana con protecciones de metal en el exterior'
  },
  {
    src: '/img/thumbs/Patio.jpg',
    width: 1,
    height: 1,
    caption: 'Boiler con protección de metal ademas de lavadero. Amplio espacio para el exterior'
  },
  {
    src: '/img/thumbs/HP.jpg',
    width: 1,
    height: 1,
    caption: 'Planta alta - Amplia habitación princpal con dos clósets. Protección de metal en ventana exterior'
  },
  {
    src: '/img/thumbs/VentanaHab.jpg',
    width: 1,
    height: 1,
    caption: 'Planta alta - Habitación secundaria con mosquitero y protección de metal en ventana exterior'
  },
  {
    src: '/img/thumbs/HF.jpg',
    width: 1,
    height: 1,
    caption: 'Planta alta - Habitación secundaria con clóset'
  },
  {
    src: '/img/thumbs/Bath_PA.jpg',
    width: 1,
    height: 1,
    caption: 'Planta alta - Baño completo junto a habitación secundaria con cancel de aluminio y ventilas con protecciones de metal en el exterior'
  },
  {
    src: '/img/thumbs/BathHP.jpg',
    width: 1,
    height: 1,
    caption: 'Planta alta - Baño completo exclusivo para habitación principal con cancel de aluminio y ventilas con protecciones de metal en el exterior'
  }
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
          <h3 className="text-center">Galer&iacute;a de Fotos</h3>
          <p className="text-center">Revisa cada detalle mas a fondo</p>

          <Gallery photos={photos} onClick={this.openLightbox} />
          <Lightbox
            images={photos}
            backdropClosesModal={true}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
            imageCountSeparator={' de '}
          />
        </div>
      </section>
    );
  }
}

export default PhotoGallery;
