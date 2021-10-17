import { CHANGE_SEARCH_FIELD } from "./components/constants.js"

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})