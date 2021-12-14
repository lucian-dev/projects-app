import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";
import { projectAuth, projectFirestore } from "../firebase/config";

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsLoading(true);

    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      // update online status
      await projectFirestore
        .collection("users")
        .doc(res.user.uid)
        .update({ online: true });

      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        setIsLoading(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return { login, error, isLoading };
};
