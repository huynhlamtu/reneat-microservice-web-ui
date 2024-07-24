import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { AuthPage } from './pages/AuthPage/AuthPage'
import { PageLayout } from './pages/Layouts/PageLayout/PageLayout'
import Profile from './pages/Profile/Profile'
import useAuthStore from './store/authStore'

function App() {
  const authUser = useAuthStore(state => state.user)

  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={authUser ? <HomePage /> : <Navigate to={"/auth"} />} />
        <Route path='/auth' element={!authUser ? <AuthPage /> : <Navigate to={"/"} />} />
        <Route path='/:username' element={<Profile />}/>
        {/* <Route path='/:username' element={authUser ? <Profile /> : <Navigate to={"/auth"} />}/> */}
      </Routes>
    </PageLayout>
  )
}

export default App
