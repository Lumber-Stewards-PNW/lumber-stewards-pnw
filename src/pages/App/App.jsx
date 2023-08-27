import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import LumberPage from '../LumberPage/LumberPage';
import AboutPage from '../AboutPage/AboutPage';
import NavBar from '../../components/NavBar/NavBar'

export default function App() {
  const [ user, setUser ] = useState(getUser())

  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/lumber" element={<LumberPage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/orders" element={<OrderHistoryPage />} /> */}
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


