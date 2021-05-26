import filterReducer from './filters';
import pizzaReducer from './pizzas';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  filters: filterReducer,
  pizzas: pizzaReducer,
});

export default rootReducer;
