import {ADD_FLASH_MESSAGE, REMOVE_FLASH_MESSAGE} from "../constants";
import shortid from "shortid";

const flashMessages = (state = [], action = {}) => {
    switch (action.type) {
        case ADD_FLASH_MESSAGE:
            return [...state, {
                id: shortid.generate(),
                type: action.message.type,
                text: action.message.text
            }]
        case REMOVE_FLASH_MESSAGE:
            return [...state].filter((message) => message.id !== action.message.id);
        default:
            return state;
    }
}

export default flashMessages;
