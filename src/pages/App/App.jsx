import './App.css';
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import HomePage from '../HomePage/HomePage'
import ServicesPage from '../ServicesPage/ServicesPage'
import AboutPage from '../AboutPage/AboutPage'
import NavBar from '../../components/NavBar/NavBar'
import SignUpPage from '../SignUpPage/SignUpPage';
import Footer from '../../components/Footer/Footer';

export default function App() {
  const user = getUser(); // Get the user object directly

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <footer><Footer /></footer>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      )}
      {/* Add a Link to the SignUpPage */}
      {!user && (
        <div className="text-center mt-4">
        </div>
      )}
    </main>
  );
}
