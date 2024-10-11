import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import {Outlet} from 'react-router-dom'
import {Header, Footer} from './components/index'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='bg-slate-500 w-screen'>
      <div className='w-full'>
          <Header/>
          <Outlet/>
          <Footer/>
      </div>
    </div>
  ) : null
}

export default App
