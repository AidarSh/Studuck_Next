import { configureStore } from '@reduxjs/toolkit'
import menu from './slices/menuSlice'
import settings from './slices/settingsSlice'
import sort from './slices/sortSlice'
import post from './slices/postSlice'

export const store = configureStore({
  reducer: { 
    menu,
    sort,
    post,
    settings
  },
})