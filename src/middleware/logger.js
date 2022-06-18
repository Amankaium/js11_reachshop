
export const myLogger = (store) => (next) => (action) => {
    console.log(`Was: ${store.getState().theme.currentTheme}`)
    const result = next(action)
    console.log(`Become: ${store.getState().theme.currentTheme}`)
    return result
}
