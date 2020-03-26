import React, { memo } from 'react';
import Slider from '../../components/Slider'

const Recommend = () => {
  //mock 数据
  const bannerList = [1, 2, 3, 4].map(item => {
    return { imageUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg" }
  });

  return (
    <Slider bannerList={bannerList} />
  )
}

export default memo(Recommend)
