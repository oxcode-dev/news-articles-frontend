import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type UserDataProps = {
    first_name: string,
    last_name: string,
    name: string,
    email: string,
    id: string,
}

export interface AuthState {
    authenticated: boolean;
    user?: UserDataProps | null;
    token?: string | null,
}
  
// Initial state
const initialState: AuthState = {
    authenticated: false,
    user: null,
    token: null,
};

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        reset: () => initialState,

        // Action to set the authentication status
        setAuthState(state, action: PayloadAction<AuthState>) {
            state.authenticated = action.payload.authenticated;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
    }
})

export const { reset, setAuthState } = AuthSlice.actions


export const getUserToken = (state: AuthState) => state.token
export const getUser = (state: AuthState) => state?.user || null
export const isAuthenticated = (state: AuthState) => state.authenticated
export const isLogged = (state: AuthState) => !!state.token


export default AuthSlice.reducer