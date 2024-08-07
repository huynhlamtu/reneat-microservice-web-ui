import { Navigate, Route, Routes, useNavigate  } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { AuthPage } from './pages/AuthPage/AuthPage'
import { PageLayout } from './pages/Layouts/PageLayout/PageLayout'
import Profile from './pages/Profile/Profile'
import useAuthStore from './store/authStore'
import { useEffect, useState } from 'react'
import { getInfo } from "./api/auth"
import './styles/custom.scss';

function App() {
  const authUser = useAuthStore(state => state.user)
  const loginUser = useAuthStore(state => state.login);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data: userData } = await getInfo(authUser.uuid);
        localStorage.setItem('user-info', JSON.stringify(userData));
        loginUser(userData);
        setLoading(false);
      } catch (err) {
        navigate('/auth');
        setLoading(false);
      }
    };

    if (authUser && authUser.uuid) {
      fetchUserData(); // Call the async function
    }
  }, []);

  return (
    <PageLayout isLoading={loading}>
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
