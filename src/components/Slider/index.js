import React, { useState, useEffect, memo } from 'react'
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import { SliderContainer } from './style';

const Slider = (props) => {
  const [sliderSwiper, setSliderSwiper] = useState(null);
  const { bannerList } = props;

  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      // https://www.swiper.com.cn/api/autoplay/16.html
      let sliderSwiper = new Swiper('.slider-container', {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: { el: '.swiper-pagination' },
      });

      setSliderSwiper(sliderSwiper);
    }
  }, [bannerList.length, sliderSwiper]);

  return(
    <SliderContainer>
      {/* <div className="before"></div> */}
      <div className="slider-container">
        <div className="swiper-wrapper">
          {
            bannerList.map((slider, index) => {
              return (
                <div className="swiper-slide" key={index}>
                  <div className="slider-nav">
                    <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                  </div>
                </div>
              );
            })
          }
        </div>
        {/* 分页器。如果放置在swiper-container外面，需要自定义样式 */}
        <div className="swiper-pagination"></div>
      </div> 
    </SliderContainer>
  )
}

export default memo(Slider);
