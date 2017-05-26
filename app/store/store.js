import {createStore} from 'redux';
import {initialState} from '../state.js';
import rootReducer from 'reducers/root.js';

export default createStore(rootReducer, initialState);
