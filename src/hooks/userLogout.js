import { useState } from 'react';
import useShowToast from "./useShowToast"
import useAuthStore from "../store/authStore"
import { get } from 'lodash'

const userLogout = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [error, setError] = useState(null);

  const showToast = useShowToast()
  const logoutUser = useAuthStore(state => state.logout)

  const handleLogout = async () => {
    setIsLoggingOut(true);
    setError(null);
    try {
      localStorage.removeItem('user-info')
      logoutUser()
    } catch (error) {
      const errorMessage = get(error, 'response.data.message', "An unexpected error occurred")
      showToast("Error", errorMessage, "error");
    } finally {
      setIsLoggingOut(false);
    }
  }
  return { handleLogout, isLoggingOut, error }
}

export default userLogout