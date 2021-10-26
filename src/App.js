import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const result = await axios('https://jsonplaceholder.typicode.com/posts');
    setPosts(result.data);
    }

    getPosts();
  });

  return (
    <div>
      <Button variant="primary">버튼</Button>
      <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
