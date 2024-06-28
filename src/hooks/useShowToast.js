import { useToast } from '@chakra-ui/react'

const useShowToast = () => {
  const toast = useToast()

  const showToast = (title, description, status) => {
    // Default error message
    let errorMessage = description;

    if (typeof description !== 'string') {
      // Checking for Firebase specific errors
      if (description.code === "auth/email-already-in-use") {
        errorMessage = "This email is already in use. Please use a different email.";
      } else if (description && description.code && description.code === "auth/weak-password") {
        errorMessage = "Weak password, please input stronger password";
      } else {
        errorMessage = "Something wrong."
      }
    }

    toast({
      title,
      description: JSON.stringify(errorMessage),
      status,
      duration: 3000,
      isClosable: true,
    })
  }

  return showToast
}

export default useShowToast

