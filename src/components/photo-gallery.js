import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
/* <!-- PHOTO GALLERY --> */

const photos = [
  { src: '/img/kitchen.jpg', width: 1, height: 1 },
  { src: '/img/room-main.jpg', width: 1, height: 1 },
  { src: '/img/room-secondary.jpg', width: 1, height: 1 }
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
/*
const PhotoGallery = () => (    
    <section id="galley" className="py-5">
        <div className="container">
            <h1 className="text-center">Galer&iacute;a de Fotos</h1>
            <p className="text-center">Revisa cada detalle mas a fondo</p>
            <div className="row mb-4">
                <div className="col-md-4">
                    <a href="/img/fachada-externa.jpg" data-toggle="lightbox" data-gallery="img-gallery"
                        data-height="560" data-width="560">
                        <img src="/img/fachada-externa.jpg" alt="" className="img-fluid" />
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="/img/bathroom-palta.jpg" data-toggle="lightbox" data-gallery="img-gallery"
                        data-height="560" data-width="560">
                        <img src="/img/bathroom-palta.jpg" alt="" className="img-fluid" />
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="/img/bathroom-ppal.jpg" data-toggle="lightbox" data-gallery="img-gallery"
                        data-height="560" data-width="560">
                        <img src="/img/bathroom-ppal.jpg" alt="" className="img-fluid" />
                    </a>
                </div>
            </div>            
        </div>
    </section>
);*/
/*
class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: this.props.images,
      
    };

    //this.onCurrentImageChange = this.onCurrentImageChange.bind(this);
  }

  render() {
    return (
        <div style={{
            display: "block",
            minHeight: "1px",
            width: "100%",
            border: "1px solid #ddd",
            overflow: "auto"}}>
           
            <Gallery
                images={this.state.images}
                enableLightbox={true}
                enableImageSelection={false}
                
                
            />
        </div>
    );
  }
}
*/
/*
<section id="galley" className="py-5">
        <div className="container">
          <h1 className="text-center">Galer&iacute;a de Fotos</h1>
          <p className="text-center">Revisa cada detalle mas a fondo</p>
          
          <Gallery
            images={this.state.images}
            enableLightbox={true}
            enableImageSelection={false}
            currentImageWillChange={this.onCurrentImageChange}
          />
          
        </div>
      </section>

*/
/*
PhotoGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      srcset: PropTypes.array,
      caption: PropTypes.string,
      thumbnailWidth: PropTypes.number.isRequired,
      thumbnailHeight: PropTypes.number.isRequired
    })
  ).isRequired
};

PhotoGallery.defaultProps = {
  images: [
    {
      src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
      thumbnail:
        'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      caption: 'After Rain (Jeshu John - designerspics.com)'
    },
    {
      src: 'https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg',
      thumbnail:
        'https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 183,
      caption: '37H (gratispgraphy.com)'
    },
    {
      src: 'https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg',
      thumbnail:
        'https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg',
      thumbnailWidth: 271,
      thumbnailHeight: 320,
      caption: 'Orange Macro (Tom Eversley - isorepublic.com)'
    }
  ]
};
*/

export default PhotoGallery;
