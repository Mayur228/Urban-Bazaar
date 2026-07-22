export interface AuthUser {
    uid: string;
    name: string | null;
    email: string | null;
    photoURL: string | null;
}

export interface AuthState {
    user: AuthUser | null;
    loading: boolean;
    error: string | null;
}