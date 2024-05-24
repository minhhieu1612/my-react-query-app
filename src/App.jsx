import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PostPage from "./pages/PostPage";

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <hr />
      <BrowserRouter>
        <header>
          <Link to="/" style={{ borderRight: '1px solid black', padding: '0 10px' }}>Home</Link>
          <Link to="/posts" style={{ padding: '0 10px' }}>Post</Link>
        </header>
        <hr />
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>}/>
          <Route path="/posts" element={<PostPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
