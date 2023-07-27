import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Main_page from "./Pages/Main_page.jsx";
import Create_post from "./Pages/Post_page_creation.jsx";
import Post_expand from "./Pages/Post_page_display.jsx";
import Profile from "./Pages/Profile_page.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <App />
    <Routes>
      <Route exact path="/" element={<Main_page />}></Route>
      <Route exact path="/profile" element={<Profile />}></Route>
      <Route exact path="/post" element={<Post_expand />}></Route>
      <Route exact path="/post/upload" element={<Create_post/>}></Route>
    </Routes>
  </BrowserRouter>
)
