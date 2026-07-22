import { createAsyncThunk } from "@reduxjs/toolkit";

import { authApi } from "./firebaseServices";

export const loginWithGoogle =
    createAsyncThunk(
        "auth/loginWithGoogle",
        async (_, thunkAPI) => {
            try {
                return await authApi.loginWithGoogle();
            } catch (error) {
                console.error("Google Login Failed:", error);
                return thunkAPI.rejectWithValue(
                    "Google Login Failed"
                );
            }
        }
    );

export const logout =
    createAsyncThunk(
        "auth/logout",
        async (_, thunkAPI) => {
            try {
                await authApi.logout();
            } catch (error) {
                return thunkAPI.rejectWithValue(
                    "Logout Failed"
                );
            }
        }
    );