import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sortselect: "По рейтингу",
  sortWindow: false,
}

export const settingsSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortWindow(state){
      state.sortWindow = (!state.sortWindow)
    },
    setSort(state, action){
      state.sortselect = action.payload
      state.sortWindow = (!state.sortWindow)
    },
  },
})

export const { setSort, setSortWindow } = settingsSlice.actions

export default settingsSlice.reducer