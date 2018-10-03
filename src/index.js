import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './components/footer';
import PhotoGallery from './components/photo-gallery';
import Header from './components/header';
import Slider from './components/showcase-slider';

import './styles.css';

const App = () => (
  <div>
    <Header />
    <Slider />
    <PhotoGallery />
    <Footer />
  </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);