import { combineReducers } from 'redux';

import taskItems from './InitialTaskItems';

const rootReducer = combineReducers({
  taskItems
})

export default rootReducer;