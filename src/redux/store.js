import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer/rootReducer'
import productSaga from './sagas/productSaga';

const sagaMiddleware = createSagaMiddleware();
// create store and add some logger
const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
)
sagaMiddleware.run(productSaga)
export default store;  