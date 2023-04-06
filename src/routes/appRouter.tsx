import React,{useState} from 'react';
import {Login, Dashboard} from '@pages/admin/index';
import { ProtectedRoute} from '@routes/index'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const AppRouter = () => {
    const [isSignedIn] = useState(true);
  return (
   <Router>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route
            path="/dashboard"
            element={
              <ProtectedRoute isSignedIn={isSignedIn}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
    </Routes>
   </Router>
  )
}

export default AppRouter;