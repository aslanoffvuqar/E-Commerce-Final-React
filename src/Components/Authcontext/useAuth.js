import { useState, useEffect } from 'react';
import { auth } from '../../Firebase/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
const useAuth = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);
  return user;
};
export default useAuth;