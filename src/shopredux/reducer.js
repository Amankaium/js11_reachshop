
const initialState = {value: "light"}

export default function themeReducer(state=initialState, action) {
    switch (action.type) {
        case 'dark':
            return {value: 'light'}
        case 'light':
            return {value: 'dark'}
    }
    return state
}