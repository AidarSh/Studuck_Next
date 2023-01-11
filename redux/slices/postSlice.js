import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    post: {
        items: [],
        status: "loading",
    },
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducer: {},
})

// export const { setOpenMenu, setCloseMenu } = postSlice.actions

export default postSlice.reducer