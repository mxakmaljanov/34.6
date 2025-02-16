import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AddPost from './Components/AddPost';
import PostList from './Components/PostList';
import Details from'./Components/Details'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/add" element={<AddPost />} />
        <Route path="/posts/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
