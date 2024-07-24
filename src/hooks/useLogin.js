import { useState } from 'react';
import { login } from '../api/auth';
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';
import { get } from 'lodash'

const useLogin = () => {
  const showToast = useShowToast();
  const loginUser = useAuthStore(state => state.login);

  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (credentials) => {
    setIsLoggingIn(true);
    setError(null);
    try {
      const response = await login(credentials);
      localStorage.setItem('user-info', JSON.stringify(response.data));
      loginUser(response.data);
    } catch (error) {
      const errorMessage = get(error, 'response.data.message', "An unexpected error occurred")
      showToast("Error", errorMessage, "error");
    } finally {
      setIsLoggingIn(false);
    }
  };

  return { handleLogin, isLoggingIn, error };
};

export default useLogin;