import Swiper from 'swiper';
import 'swiper/css';

export const useAboutSlider = () => {
  new Swiper('.about__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};
