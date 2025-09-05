import React from 'react'

import Slider from "react-slick";
function slick (){
const SampleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="https://picsum.photos/id/1015/600/300" alt="Slide 1" />
      </div>
      <div>
        <img src="https://picsum.photos/id/1016/600/300" alt="Slide 2" />
      </div>
      <div>
        <img src="https://picsum.photos/id/1018/600/300" alt="Slide 3" />
      </div>
    </Slider>
  );
};

}
export default slick
