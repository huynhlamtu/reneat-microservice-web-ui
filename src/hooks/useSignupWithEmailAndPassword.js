import { auth, fireStore } from '../filebase/firebase'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { doc, setDoc } from 'firebase/firestore'
import useShowToast from './useShowToast'
import useAuthStore from '../store/authStore'

const useSignupWithEmailAndPassword = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth)

  const loginUser = useAuthStore(state => state.login)

  const showToast = useShowToast()

  const signup = async (inputs) => {
    if (!inputs.email || !inputs.password || !inputs.fullname || !inputs.username) {
      showToast("Error", "Please fill all the fields", "error")
      return
    }
    
    try {
      const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)

      if (error) {
        console.error("Registration error:", error);    
        showToast("Error", error, "error");
      } else if (newUser) {
        const userDocument = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: inputs.username,
          fullname: inputs.fullname,
          bio: "",
          profilePicUrl: '',
          followers: [],
          followings: [],
          posts: [],
          createdAt: Date.now(),
        }

        await setDoc(doc(fireStore, "users", newUser.user.uid), userDocument)
        localStorage.setItem("user-info", JSON.stringify(userDocument))
        loginUser(userDocument)
      }
    } catch (error) {
      console.error("Registration error:", error);    
      showToast("Error", error, "error");
    }
  }

  return { loading, error, signup }
}

export default useSignupWithEmailAndPassword