import {ADD_FLASH_MESSAGE, REMOVE_FLASH_MESSAGE} from "../constants";

export const addFlashMessage = (message) => {
    return {
        type: ADD_FLASH_MESSAGE,
        message
    }
}

export const removeFlashMessage = (message) => {
    return {
        type: REMOVE_FLASH_MESSAGE,
        message
    }
}
