import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface SharedState {
    sources: string[];
    authors: string[];
}
  
// Initial state
const initialState: SharedState = {
    sources: [],
    authors: [],
};

export const SharedSlice = createSlice({
    name: 'shared',
    initialState,

    reducers: {
        reset: () => initialState,

        // Action to set the authentication status
        setSharedState(state, action: PayloadAction<SharedState>) {
            // console.log(action.payload.authors)
            state.sources = action.payload.sources;
            state.authors = action.payload.authors;
        },
    }
})

export const { reset, setSharedState } = SharedSlice.actions


export const getSources = (state: SharedState) => state.sources
export const getAuthors= (state: SharedState) => state.authors

export default SharedSlice.reducer