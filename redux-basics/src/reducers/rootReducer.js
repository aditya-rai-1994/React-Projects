// this is root reducer ! it is the store manager for all the reducers
// 1.to make root reducer , get a method from redux called combine redcuer
import { combineReducers} from "redux";
// 2.get each individual reducer
import frozen from "./frozen";
import meatReducer from "./meatReducer";
import produceReducer from "./produceReducer";
// 3.call combine reducer and hand it an object
// each key in combinereducer will be pirce of state in the redux store
// each value, will be value of that piece of state  in th redux store
const rootReducer = combineReducers({
    frozenReducer: frozen,
    meat: meatReducer,
    produce: produceReducer,
})
export default rootReducer;