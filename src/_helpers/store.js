import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../_reducers';
import { createLogger } from 'redux-logger';

const reduxStore = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware,
        createLogger
    )
);

export default reduxStore;