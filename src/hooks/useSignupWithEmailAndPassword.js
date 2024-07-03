import useShowToast from './useShowToast'
import useAuthStore from '../store/authStore'
import { register } from '../api/auth'


const useSignupWithEmailAndPassword = () => {
  const loginUser = useAuthStore(state => state.login)
  let error = null
  let loading = false

  const showToast = useShowToast()

  const signup = async (inputs) => {
    if (!inputs.email || !inputs.password || !inputs.first_name || !inputs.last_name|| !inputs.username) {
      showToast("Error", "Please fill all the fields", "error")
      return
    }
    
    try {
      const res = await register(inputs)

      if (error) {
        showToast("Error", error, "error");
      } else {
        localStorage.setItem("user-info", JSON.stringify(res.data))
        loginUser(res.data)
      }
    } catch (error) {
      if (error.responsex) {
        const errorCode = error.response.data.code;
        const errorMessage = error.response.data.message;
  
        if (errorCode === 2017 && errorMessage === "Username already existed") {
          showToast("Error", "Username already existed", "error");
        } else {
          showToast("Error", errorMessage, "error");
        }
      } else {
        showToast("Error", "An unexpected error occurred", "error");
      }
    }
  }

  return { loading, error, signup }
}

export default useSignupWithEmailAndPassword