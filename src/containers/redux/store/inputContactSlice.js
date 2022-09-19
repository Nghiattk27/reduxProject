import { createSlice } from '@reduxjs/toolkit'

export const inputContactSlice = createSlice({
    name: 'inputContact',
    initialState: {
        value: "",
    },
    reducers: {
        change: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { change } = inputContactSlice.actions

export const selectInputContact = (state) => state.inputContact.value

export default inputContactSlice.reducer