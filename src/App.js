import React from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import { Container } from '@material-ui/core';
import logger from 'redux-logger';
import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import rootReducer from './reducers'
import KanbanBoard from './containers/KanbanBoard';

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);

function App() {
  console.log(store.getState());
  
  return (
    <Container>
      <Provider store={store}>
        <KanbanBoard></KanbanBoard>
      </Provider> 
    </Container>
  );
}

export default App;
