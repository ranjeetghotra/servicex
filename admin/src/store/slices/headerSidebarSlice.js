import { createSlice } from '@reduxjs/toolkit';



const headerSidebar = createSlice({
    name: 'headerSidebar',
    initialState: {
     isToggled:false,

    },
    reducers: {
        setToggled: (state, action) => {
          state.isToggled = action.payload
        },
    },
 
})

export const { setToggled } = headerSidebar.actions;
export default headerSidebar.reducer;
