import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import dashboardReducer from '../reducers/dashboardReducer'
const middleware = [thunk]

export const store = createStore(
  combineReducers({
    dashboardReducer,
  }),
  applyMiddleware(...middleware)
)
