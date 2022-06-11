
const initialState = {value: "light"}

export default function themeReducer(state=initialState, action) {
    // switch (action.type) {
    //   case 'counter/incremented':
    //     return { value: state.value + 1 }
    //   case 'counter/decremented':
    //     return { value: state.value - 1 }
    //   default:
    //     return state
    // }
    switch (action.type) {
        case 'dark':
            return {value: 'light'}
        case 'light':
            return {value: 'dark'}
    }
    return state
}