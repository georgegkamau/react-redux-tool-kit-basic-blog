import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'tom boya' },
    { id: '1', name: 'dendan kimathi' },
    { id: '2', name: 'cheif wangu' },
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    }
})


export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;




