import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [posts, setPosts] = useState([]);
  const [data, setData] = useState([]);
  const [model, setModel] = useState("model");
  const [id, setId] = useState("id");

  const handleSelect = e => {
    setModel(e.target.value);
  }

  const handleInput = e => {
    setId(e.target.value);
  }

  const handleSubmit = async e => {
    e.preventDefault();
    let endpoint = 'http://localhost:8000/store/';
    endpoint = id === 'all' ? endpoint + model: endpoint + model + '/' + id
    const result = await axios(endpoint);    
    setData(Array.isArray(result.data) ? result.data : [result.data])
  }

  // useEffect(() => {
  //   async function getPosts() {
  //     // const result = await axios('https://jsonplaceholder.typicode.com/posts');
  //     const result = await axios('http://localhost:8000/store/products');
  //   // setPosts(result.data);
  //   setProducts(result.data);
  //   }

  //   getPosts();
  // }, []);

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
      <Form.Select aria-label="Default select example" name="model" onChange={handleSelect}>
        <option>Select model</option>
        <option value="products">Products</option>
        <option value="collections">Collections</option>
      </Form.Select>
      </Col>
      <Col>
      <Form.Control type="text" name="id" placeholder="Enter the id or 'all'" onChange={handleInput}/>
      </Col>
      <Col>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Col>
      </Row>
    </Form>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {data.map(datum => 
          <tr key={datum.id}>
            <td>{datum.id}</td>
            <td>{datum.title}</td>            
          </tr>
        )}
      </tbody>
    </Table>
  </>
  );
}

export default App;
