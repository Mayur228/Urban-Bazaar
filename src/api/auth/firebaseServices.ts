import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";

import { auth } from "../../app/firebaseApp";

const provider = new GoogleAuthProvider();

export const authApi = {
    async loginWithGoogle() {
        const result = await signInWithPopup(
            auth,
            provider
        );

        return {
            uid: result.user.uid,
            name: result.user.displayName,
            email: result.user.email,
            photoURL: result.user.photoURL,
        };
    },

    async logout() {
        await signOut(auth);
    },
};