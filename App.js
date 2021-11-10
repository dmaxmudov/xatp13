import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './xapt13Components/SignIn';
import Profile from './xapt13Page/Profile';
import {ToastContainer} from "react-toastify";
import Sign from './xapt13Components/Sign';
import SignUp from './xapt13Components/SignUp';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      
      <ToastContainer/>
    </BrowserRouter>
    </>
  );
}

export default App;
