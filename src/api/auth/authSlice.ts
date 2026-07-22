import { createSlice } from "@reduxjs/toolkit";

import type { AuthState } from "./authType";

import {
    loginWithGoogle,
    logout,
} from "./authThunk";

const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",

    initialState,

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder

            // Login Started
            .addCase(
                loginWithGoogle.pending,
                (state) => {
                    state.loading = true;
                    state.error = null;
                }
            )

            // Login Success
            .addCase(
                loginWithGoogle.fulfilled,
                (state, action) => {
                    state.loading = false;
                    state.user = action.payload;
                }
            )

            // Login Failed
            .addCase(
                loginWithGoogle.rejected,
                (state, action) => {
                    state.loading = false;
                    state.error =
                        action.payload as string;
                }
            )

            // Logout Success
            .addCase(
                logout.fulfilled,
                (state) => {
                    state.user = null;
                }
            );
    },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;