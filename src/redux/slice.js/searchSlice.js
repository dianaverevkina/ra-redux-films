import { createSlice } from "@reduxjs/toolkit";

const initialState = '';

const searchSlice = createSlice({
  name: 'searchQuery',
  initialState,
  reducers: {
    changeSearchField(state, action) {
      state = action.payload;
    }
  }
})

// export const 



export default searchSlice.reducer;