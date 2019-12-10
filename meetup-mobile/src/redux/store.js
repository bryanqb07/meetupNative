import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware';
import reducers from './reducers';
import { createLogger } from "redux-logger";

const middlewares = [
    promise
];

if(__DEV__){
    const logger = createLogger();
    middlewares.push(logger);
}

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducers, 
    undefined, 
    enhancers(applyMiddleware(...middlewares))
);
