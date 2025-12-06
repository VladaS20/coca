import Swiper from 'swiper';
import 'swiper/css';

export const useAboutSlider = () => {
  new Swiper('.about__slider', {
    slidesPerView: 'auto',
    spaceBetween: 12,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      381: {
        spaceBetween: 32,
        centeredSlides: false,
      },
    },
  });
};

export const useTeamSlider = () => {
  new Swiper('.team__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      381: {
        centeredSlides: false,
      },
    },
  });
};
