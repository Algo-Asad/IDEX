import actionName from './languageTypes'

const initialState = {
    lang: 'en'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionName.CHANGE_LANG:
            return {
                ...state,
                lang: action.payload
            }
        default:
            return state
    }
}
