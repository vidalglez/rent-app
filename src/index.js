import React from 'react';
import ReactDOM from 'react-dom';

import Details from './components/details'
import Footer from './components/footer';
import PhotoGallery from './components/photo-gallery';
import Header from './components/header';
import Slider from './components/showcase-slider';
import SimpleGoogleMap from './components/simple-google-map';

import './styles.css';

const App = () => (
  <div>    
    <Header />
    <Slider />
    <PhotoGallery />
    <SimpleGoogleMap />
    <Details />
    <Footer />    
  </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);