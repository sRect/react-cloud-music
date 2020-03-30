import * as actionTypes from './constants';
import { fromJS } from 'immutable';
import { getBannerRequest, getRecommendListRequest } from '../../../api/request';

export const changeBannerList = data => {
  return {
    type: actionTypes.CHANGE_BANNER,
    data: fromJS(data)
  }
}

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS(data)
});

export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
});

export const getBannerList = () => {
  return dispatch => {
    getBannerRequest()
      .then(data => {
        dispatch(changeBannerList(data.banners));
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const getRecommendList = () => {
  return dispatch => {
    getRecommendListRequest()
      .then(data => {
        dispatch(changeRecommendList(data.result));
        dispatch(changeEnterLoading(false)); // 改变 loading
      })
      .catch(err => {
        console.log(err);
      })
  }
}
