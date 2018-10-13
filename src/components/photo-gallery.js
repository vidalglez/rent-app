import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
/* <!-- PHOTO GALLERY --> */

const photos = [
  {
    src: '/img/Fachada.jpg',
    width: 1,
    height: 1,
    thumbnail: '/img/Fachada.jpg',
    caption: 'Protecciones de metal reforzado en puerta principal y ventanas de cada habitación. Cochera para 1 o 2 autos'
  },
  {
    src: '/img/Cocina.jpg',
    width: 1,
    height: 1,
    thumbnail: '/img/Cocina.jpg',
    caption: 'Planta baja - Cocina integral y puerta de metal reforzada para salida a patio'
  },
  {
    src: '/img/Sala.jpg',
    width: 1,
    height: 1,
    thumbnail: '/img/Sala.jpg',
    caption: 'Planta baja - Mosquitero interior ade mas de ventilas con protecciones de metal en el exterior'
  },
  {
    src: '/img/patio-externo.jpg',
    width: 1,
    height: 1,
    thumbnail: '/img/patio-externo.jpg',
    caption: 'Boiler con proteccion de metal ademas de lavadero. Amplio espacio para el exterior'
  },
  {
    src: '/img/HP.jpg',
    width: 1,
    height: 1,
    thumbnail: '/img/HP.jpg',
    caption: 'Planta alta - Amplia habitación princpal con dos closets. Protección de metal en ventana exterior'
  },
  {
    src: '/img/Hab_F.jpg',
    width: 1,
    height: 1,
    thumbnail: '/img/Hab_F.jpg',
    caption: 'Planta alta - Habitación secundaria con clóset'
  },
  {
    src: '/img/Hab_F1.jpg',
    width: 1,
    height: 1,
    thumbnail: '/img/Hab_F1.jpg',
    caption: 'Planta alta - Habitación secundaria protección de metal y mosquitero en ventana exterior'
  },
  {
    src: '/img/Bath_PA.jpg',
    width: 1,
    height: 1,
    thumbnail: '/img/Bath_PA.jpg',
    caption: 'Planta alta - Baño completo junto a habitación secundaria con cancel de aluminio y ventilas con protecciones de metal en el exterior'
  },
  {
    src: '/img/Bath_HP.jpg',
    width: 1,
    height: 1,
    thumbnail: '/img/Bath_HP.jpg',
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
          <h1 className="text-center">Galer&iacute;a de Fotos</h1>
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
