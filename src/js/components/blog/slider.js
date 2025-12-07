import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useBlogSlider = () => {
  new Swiper('.blog__slider', {
    slidesPerView: 'auto',
    spaceBetween: 12,
    loop: true,
    breakpoints: {
      381: {
        spaceBetween: 32,
        centeredSlides: false,
      },
    },
  });
};

export const useArticlesSlider = () => {
  new Swiper('.articles__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    navigation: {
      prevEl: '.articles__btn--prev',
      nextEl: '.articles__btn--next',
    },
  });
};
