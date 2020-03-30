import React, { memo, useState } from 'react';
import Horizen from '../../baseUI/horizen-item';
import { categoryTypes, alphaTypes } from '../../api/config';
import { NavContainer } from './style';

const Singers = () => {
  let [category, setCategory] = useState('');
  let [alpha, setAlpha] = useState('');

  let handleUpdateAlpha = (val) => {
    setAlpha(val);
  }

  let handleUpdateCatetory = (val) => {
    setCategory(val);
  }

  return (
    <NavContainer>
      <Horizen
        list={categoryTypes}
        title={"分类 (默认热门):"}
        handleClick={handleUpdateCatetory}
        oldVal={category}
      ></Horizen>
      <Horizen
        list={alphaTypes}
        title={"首字母:"}
        handleClick={val => handleUpdateAlpha(val)}
        oldVal={alpha}
      ></Horizen>
    </NavContainer>
  )
}

export default memo(Singers)
