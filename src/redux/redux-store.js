import { applyMiddleware, combineReducers, createStore } from "redux";
import confettiReducer from "./confetti-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";


const reducers = combineReducers({
    confetti:confettiReducer
});

const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))

export default store