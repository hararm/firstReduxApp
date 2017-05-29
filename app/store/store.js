import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root';
import logMiddleware from '../middleware/log'
import apiMiddleware from '../middleware/api';
import {initialState} from '../state'

export default createStore(
	rootReducer,
	initialState,
	applyMiddleware(logMiddleware, apiMiddleware)
);
