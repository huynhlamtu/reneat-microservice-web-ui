export const showError = (error) => {
  // Default error message
  let errorMessage = error;

  if (error && typeof error !== 'string') {
    // Checking for Firebase specific errors
    if (error && error.code && error.code === "auth/weak-password") {
      errorMessage = "Weak password, please input stronger password";
    } else if (error && error.code && error.code === "auth/email-already-in-use") {
      errorMessage = "This email is already in use. Please use a different email.";
    } else {
      errorMessage = "Something wrong."
    }
  }

  return typeof errorMessage == 'string' ? errorMessage : JSON.stringify(errorMessage)
}