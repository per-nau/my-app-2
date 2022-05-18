import React, {Component} from 'react'
import './App.css';
import Hero from './Hero';
import PostList from './PostList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
        <Hero/>
        <PostList/>
    </div>

  );
}

export default App;