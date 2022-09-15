import {createSlice} from '@reduxjs/toolkit'

const initialState = []

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers:{
        add: (state, action) => {
            state.push(action.payload)
        },
        remove: (state, action) => {
            return state.filter((project) => !action.payload.id.includes(project.id))
        },
    }
})
export const {add, remove} = projectSlice.actions

export const selectProject = (state) => state.project

export default projectSlice.reducer;