// Store.js
import { createStore } from 'redux';
import posts from './Reducers';

const store = createStore(posts);

export default store;