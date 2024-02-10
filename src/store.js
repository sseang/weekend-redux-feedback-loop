// /* import REDUX & MIDDLE WARE **/
import { createStore, combineReducers, applyMiddleware } from 'redux';

// import logger
import logger from 'redux-logger';

// /* Add REDUCERS */
const feeling = (state = 0, action) => {
  // ...call from Form
  if (action.type === 'FEELING_COLUMN_ADD') {
    //return payload
    return action.payload;
  }
  // Reducers always return state (existing value) by default
  return state;
};

//rinse & repeat
const understand = (state = 0, action) => {
  // ...call from Form
  if (action.type === 'UNDERSTANDING_COLUMN_ADD') {
    //return payload
    return action.payload;
  }
  // Reducers always return state (existing value) by default
  return state;
};

//rinse & repeat
const support = (state = 0, action) => {
  // ...call from Form
  if (action.type === 'SUPPORT_COLUMN_ADD') {
    //return payload
    return action.payload;
  }
  // Reducers always return state (existing value) by default
  return state;
};

/* Create store */
const storeInstance = createStore(
  combineReducers({
    // reflection call,
    feeling,
    understand,
    support,
  }),
  // Setup our logger
  applyMiddleware(logger)
);

// //Add Provider.
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={storeInstance}>
//     <App />
//   </Provider>
// );
export default storeInstance;
