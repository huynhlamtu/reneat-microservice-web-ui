import useShowToast from './useShowToast'
import useAuthStore from '../store/authStore'
import { register } from '../api/auth'
import { get } from 'lodash'


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
      const errorMessage = get(error, 'response.data.message', "An unexpected error occurred")
      showToast("Error", errorMessage, "error");
    }
  }

  return { loading, error, signup }
}

export default useSignupWithEmailAndPassword