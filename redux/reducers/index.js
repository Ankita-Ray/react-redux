import { combineReducers } from 'redux';
import todo from './todo';
import visibilityFilters from './visibilityFilters';
export default combineReducers({todo,visibilityFilters});
