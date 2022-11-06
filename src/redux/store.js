import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducer/rootReducer'
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger';

// create store and add some logger
const store = createStore(rootReducer, 

composeWithDevTools(applyMiddleware(logger))
)

export default store