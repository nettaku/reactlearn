import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [posts, setPosts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      // const result = await axios('https://jsonplaceholder.typicode.com/posts');
      const result = await axios('http://localhost:8000/store/products');
    // setPosts(result.data);
    setProducts(result.data);
    }

    getPosts();
  }, []);

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => 
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.unit_price}</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default App;
