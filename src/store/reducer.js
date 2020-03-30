import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '../application/Recommend/store';

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
}

const rootReducer = combineReducers(allReducer);
export default rootReducer;
