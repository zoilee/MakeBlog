import React, { Children, useContext } from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';
import Layout from './pages/Layout';
import Main from './pages/Main';
import Post from './pages/Post';
import About from './pages/About';
import Contact from './pages/Contact';
import Git from './pages/Git';
import AnimatedCursor from 'react-animated-cursor';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './pages/Login';


import View from './pages/View';
import Members from './pages/Members';

import { AuthProvider, AuthContexth, AuthContext } from './context/AuthContext';

/** 관리자 */
import PostWrite from './pages/admin/PostWrite';




/** 인증 상태에 따라 라우팅 제어 */
const PrivateRoute = ({children, adminOnly = false})=>{
  const { isAuthenticated, user} = useContext(AuthContext);

  if(!isAuthenticated){ // 로그인 안되어 있으면 로그인 페이지
    return <Navigate to="/login" replace/>
  }

  if(adminOnly && user.role === 'admin'){
    return <Navigate to="/postwrite" replace/>
  }

  return children
}

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <AnimatedCursor
          innerSize={25}
          outerSize={30}
          color='255, 127, 0'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={2}
        />
        <Router>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Main/>}/>
              <Route path="post" element={<Post/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="git" element={<Git/>}></Route>
              <Route path="contact" element={<Contact/>}/>
              <Route path="view/:post" element={<View/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="postwrite" element={
                <PrivateRoute adminOnly={true}>
                  <PostWrite/>
                </PrivateRoute>
              }/>
            </Route>
          </Routes>

        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  )
}

export default App