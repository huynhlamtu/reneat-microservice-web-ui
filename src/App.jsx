import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { AuthPage } from './pages/AuthPage/AuthPage'
import { PageLayout } from './pages/Layouts/PageLayout/PageLayout'
import Profile from './pages/Profile/Profile'

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/:username' element={<Profile />} />
      </Routes>
    </PageLayout>
  )
}

export default App
