import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

export default createStore(user_reducer, {}, applyMiddleware(promiseMiddleware()));