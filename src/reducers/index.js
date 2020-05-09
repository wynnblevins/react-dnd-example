import { combineReducers } from 'redux';

import taskItems from './TaskItems';

const rootReducer = combineReducers({
  taskItems
})

export default rootReducer;