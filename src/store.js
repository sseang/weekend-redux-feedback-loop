// /* import REDUX & MIDDLE WARE **/
import { createStore, combineReducers, applyMiddleware } from 'redux';

// import logger
import logger from 'redux-logger';

// /* Add REDUCERS */
const feeling = (state = '', action) => {
  // ...call from Form
  if (action.type === 'FEELING_COLUMN_ADD') {
    //return payload
    return action.payload;
  }
  // Reducers always return state (existing value) by default
  return state;
};

//rinse & repeat
const understanding = (state = '', action) => {
  // ...call from Form
  if (action.type === 'UNDERSTANDING_COLUMN_ADD') {
    //return payload
    return action.payload;
  }
  // Reducers always return state (existing value) by default
  return state;
};

//rinse & repeat
const support = (state = '', action) => {
  // ...call from Form
  if (action.type === 'SUPPORT_COLUMN_ADD') {
    //return payload
    return action.payload;
  }
  // Reducers always return state (existing value) by default
  return state;
};

//rinse & repeat
const comments = (state = '', action) => {
  // ...call from Form
  if (action.type === 'COMMENT_COLUMN_ADD') {
    //return payload
    return action.payload;
  }
  // Reducers always return state (existing value) by default
  return state;
};
// //combine?
// const reflection = (state = '', action) => {
//   // ...call from Form
//   if (action.type === 'FEELING_COLUMN_ADD') {
//     //return payload
//     return action.payload;
//   }
//   if (action.type === 'UNDERSTANDING_COLUMN_ADD') {
//     //return payload
//     return action.payload;
//   }
//   if (action.type === 'SUPPORT_COLUMN_ADD') {
//     //return payload
//     return action.payload;
//   }
//   if (action.type === 'COMMENT_COLUMN_ADD') {
//     //return payload
//     return action.payload;
//   }
//   // Reducers always return state (existing value) by default
//   return state;
// };
/* Create store */
const storeInstance = createStore(
  combineReducers({
    //reflection call,
    //reflection,
    feeling,
    understanding,
    support,
    comments,
  }),
  // Setup our logger
  applyMiddleware(logger)
);

export default storeInstance;
