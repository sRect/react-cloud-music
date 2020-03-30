import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '../application/Recommend/store';
import { reducer as singersReducer } from '../application/Singers/store/index';

// const testReducer = (state = 1, action) => {
//   switch (action.type) {
//     case 'INCREASE':
//       // return { ...state, count: state.count + 1 }
//       return state.set('count', state.get('count') + 1)
//     case 'DECREASE':
//       // return { ...state, count: state.count - 1 }
//       return state.set('count', state.get('count') - 1)
//     default:
//       return state
//   }
// }

const allReducer = {
  recommend: recommendReducer,
  singers: singersReducer,
}

const rootReducer = combineReducers(allReducer);
export default rootReducer;
