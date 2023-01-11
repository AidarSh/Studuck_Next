import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  settingsWindow: false,
  window: false,
  sortselect: "По рейтингу",
  cityselect: "",
  armselect: "",
  hostelselect: "",
  stateselect: "",
  search: "",
  finallyBtn: false,
  fetchSearch: false,
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setData(state, action){
      state.dataVuz = action.payload
    },
    setSettingsWindow(state){
      state.settingsWindow = (!state.settingsWindow)
    },
    setOpenWindow(state){
      state.window = (!state.window)
    },
    setSort(state, action){
      state.sortselect = action.payload
    },
    setCity(state, action){
      state.cityselect = action.payload
      state.window = (!state.window)
    },
    setArm(state, action){
      if(state.armselect === ""){
        state.armselect = "True"
      }else if(state.armselect === "True"){
        state.armselect = ""
      }
    },
    setHostel(state, action){
      if(state.hostelselect === ""){
        state.hostelselect = "True"
      }else if(state.hostelselect === "True"){
        state.hostelselect = ""
      }
    },
    setState(state, action){
      if(state.stateselect === ""){
        state.stateselect = "True"
      }else if(state.stateselect === "True"){
        state.stateselect = ""
      }
    },
    setSearch(state, action){
      state.search = action.payload
    },
    setBtn(state){
      state.finallyBtn = (!state.finallyBtn)
    },
    setFetchSearch(state){
      state.fetchSearch = (!state.fetchSearch)
    },
    setReturn(state){
      state.cityselect = ""
      state.armselect = ""
      state.hostelselect = ""
      state.stateselect = ""
      state.finallyBtn = (!state.finallyBtn)
    },
  },
})

export const { setSettingsWindow, setSort, setOpenWindow, setCity, setArm, setHostel , setState, setBtn, setReturn, setFetchSearch, setSearch} = settingsSlice.actions

export default settingsSlice.reducer