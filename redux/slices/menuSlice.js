import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setOpenMenu(state){
      state.value = true
    },
    setCloseMenu(state){
      state.value = false
    },
  },
})

export const { setOpenMenu, setCloseMenu } = menuSlice.actions

export default menuSlice.reducer