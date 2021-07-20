import {combineReducers} from 'redux'
import flashMessage from "./flashMessage";

const rootReducer = combineReducers({
    flashMessages: flashMessage
})

export default rootReducer;
