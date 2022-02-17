import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, 
    applyMiddleware(addLoggingToDispatch));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

const addLoggingToDispatch = store => next => action => {
  console.log(store.getState());
  console.log(action);
  next(action);
  console.log(store.getState())
};

// const applyMiddlewares = (store, ...middlewares) =>{
// let dispatch = store.dispatch;
// middlewares.forEach(ele =>{
//   dispatch = ele(store)(dispatch);

// })
// return Object.assign({}, store, {dispatch})
// }

export default configureStore;
