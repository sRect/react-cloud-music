import { fromJS } from 'immutable';

export const defaultState = fromJS({
  singerList: [],
  enterLoading: true,     // 控制进场Loading
  pullUpLoading: false,   // 控制上拉加载动画
  pullDownLoading: false, // 控制下拉加载动画
  pageCount: 0            // 这里是当前页数，我们即将实现分页功能
});