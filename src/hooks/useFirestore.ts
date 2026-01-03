// src/hooks/useFirestore.ts
import { useEffect, useState } from 'react';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';
import { db, auth } from '../firebase/config';
import type {AppState} from '../types';

export const useFirestore = () => {
    const [syncing, setSyncing] = useState(false);
    const [user, setUser] = useState(auth.currentUser);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return unsubscribe;
    }, []);

    const saveToFirestore = async (state: AppState) => {
        if (!user) return;

        setSyncing(true);
        try {
            await setDoc(doc(db, 'users', user.uid), {
                ...state,
                updatedAt: new Date().toISOString()
            });
        } catch (error) {
            console.error('Error saving to Firestore:', error);
        } finally {
            setSyncing(false);
        }
    };

    const subscribeToFirestore = (
        onUpdate: (state: AppState) => void
    ) => {
        if (!user) return () => {};

        const unsubscribe = onSnapshot(
            doc(db, 'users', user.uid),
            (doc) => {
                if (doc.exists()) {
                    const data = doc.data() as AppState;
                    onUpdate(data);
                }
            },
            (error) => {
                console.error('Error subscribing to Firestore:', error);
            }
        );

        return unsubscribe;
    };

    return { saveToFirestore, subscribeToFirestore, syncing, user };
};