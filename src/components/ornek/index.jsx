import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

function App() {
  useEffect(() => {
    new Swiper('.swiper-container', {
      loop: true,
      effect: 'fade',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide"><img src="https://cdn.shopify.com/s/files/1/0735/8726/1737/files/h1-slide-show-3.jpg?v=1679891172&width=1500" alt="Slide 1" /></div>
        <div className="swiper-slide"><img src="https://cdn.shopify.com/s/files/1/0735/8726/1737/files/h1-slide-show-3.jpg?v=1679891172&width=1500" alt="Slide 2" /></div>
        <div className="swiper-slide"><img src="https://cdn.shopify.com/s/files/1/0735/8726/1737/files/h1-slide-show-3.jpg?v=1679891172&width=1500" alt="Slide 3" /></div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
}

export default App;

