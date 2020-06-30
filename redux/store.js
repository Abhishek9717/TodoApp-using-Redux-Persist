import { createStore } from 'redux';
import { reducer } from './reducer';

//create store takes reducer and initial state as arguments but we can also pass initial state from reducer 
const store = createStore(reducer);

export default store;