import { createSlice } from '@reduxjs/toolkit'
import {LIGHT, DARK} from '../shopredux/constants'

const initialState = {
    currentTheme: LIGHT
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeCurrentTheme: (state) => {
      state.currentTheme = state.currentTheme === LIGHT ? DARK : LIGHT
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeCurrentTheme } = themeSlice.actions

export default themeSlice.reducer