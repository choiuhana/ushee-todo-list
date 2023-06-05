import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface AccountState {
    login_type: string | null;

    token: string | null;
}

// Define the initial state using that type
const initialState: AccountState = {
    login_type: null,

    token: null,
};

export const accountSlice = createSlice({
    name: "account",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setLoginType: (state, action: PayloadAction<string>) => {
            state.login_type = action.payload;
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        resetAll: (state) => {
            Object.assign(state, initialState);
        },
    },
});

export const { setLoginType, setToken, resetAll } = accountSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAccount = (state: RootState) => state.accountReducer;

export default accountSlice.reducer;
