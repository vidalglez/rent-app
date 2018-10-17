import React from 'react';
import ReactDOM from 'react-dom';

import Details from './components/details'
import Explore from './components/explore';
import Footer from './components/footer';
import MapContainer from './components/google-map';
import Header from './components/header';
import PhotoGallery from './components/photo-gallery';
import Slider from './components/showcase-slider';


import './styles.css';

const App = () => (
  <div>    
    <Header />
    <Slider />
    <Explore />
    <PhotoGallery />
    <MapContainer />
    <Details />
    <Footer />    
  </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);