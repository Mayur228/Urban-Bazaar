import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../../app/firebaseApp";

import { store } from "../../app/store";

import { setUser } from "./authSlice";

export function authListener() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            store.dispatch(
                setUser({
                    uid: user.uid,
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                })
            );
        } else {
            store.dispatch(setUser(null));
        }
    });
}