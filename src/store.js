import { createStore } from 'redux';
import counterSomething from './components/services/reducres/counterReducer';
const store = createStore(counterSomething);
export default store

