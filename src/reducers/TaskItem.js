import ITEM_MOVED from '../actions';

const taskItem = (taskItems = [], action) => {
  switch (action.type) {
  case ITEM_MOVED:  
    taskItems.map((item) => {
      if (index !== action.index) { return item }
  
      return {
        ...action.item
      }        
    });
  
    return state
  }
}