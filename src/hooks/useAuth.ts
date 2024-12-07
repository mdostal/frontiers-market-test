import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useStore } from '../store/useStore';

export const useAuth = () => {
  const { user, setUser, createGuestUser } = useStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          id: firebaseUser.uid,
          isGuest: false,
          displayName: firebaseUser.displayName,
          email: firebaseUser.email,
          photoURL: firebaseUser.photoURL,
        });
      } else if (!user) {
        // If no Firebase user and no existing user (including guest), create a guest user
        createGuestUser();
      }
    });

    return () => unsubscribe();
  }, []);

  return { user };
};