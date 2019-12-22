import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

import planetsReducer from './planets-reducer'
import downloadReducer from "./download-reducer";
import apodReducer from "./apod-reducer";

let reducers = combineReducers({
    planets: planetsReducer,
    download: downloadReducer,
    apod: apodReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;