import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    errorMessage: '',
    labs:[]
}

export const getLabs = createAsyncThunk(
    'project/getLabs',
    async (data, { rejectWithValue }) => {
        const response = await fetch('https://632709c6ba4a9c47532f7eed.mockapi.io/lab',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const jsonData = await response.json()
        if (response.status !== 200 || response.status >= 300) {
            return rejectWithValue(jsonData)
        }
        return jsonData
    }
)

export const addLabs = createAsyncThunk(
    'project/addLab',
    async (data, { rejectWithValue }) => {
        const response = await fetch('https://632709c6ba4a9c47532f7eed.mockapi.io/lab',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const jsonData = await response.json()
        if (response.status !== 201 || response.status >= 300) {
            return rejectWithValue(jsonData)
        }
        return jsonData
    }
)


export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers:{
    },
    extraReducers: (builder) => {
        builder.addCase(addLabs.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(addLabs.fulfilled, (state,action) => {
            state.isLoading = false;
            state.labs.push(action.payload)
        })
        builder.addCase(addLabs.rejected, (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload.message
        })
        builder.addCase(getLabs.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getLabs.fulfilled, (state,action) => {
            state.isLoading = false;
            state.labs = action.payload
        })
        builder.addCase(getLabs.rejected, (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload.message
        })
    }
})

export const selectProject = (state) => state.project.labs

export default projectSlice.reducer;