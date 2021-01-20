import { fb } from 'service';
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [authUser, setAuthUser] = useState(); // undefined | firebase.User | null

  useEffect(() => {
    const unsubscribe = fb.auth.onAuthStateChanged(user => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return {
    authUser,
  };
};
