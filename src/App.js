import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const friends = [ "Rafikul", "Saiful", "Shopon", "Halim", "Masum"];
  const products = [
    {name: 'shoriful ', job: 'asst:Coach ', salary: '9500 '},
   {name: 'rafikul ', job: 'baker ', salary: '1000 '},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            friends.map(friend => <li>{friend}</li>)
          }
          {
            products.map(product =><li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product =><Product product={product}></Product>)
        }
      {/* <Product product={products[0]}></Product> */}
      {/* <Product name={products[1].name} job={products[1].job} salary={products[1].salary}></Product> */}
        {/* <Product product={products[1]}></Product>
        <Person name="Shoriful Islam" job="Bekar"></Person>
        <Person name="Rafikul" job="Baker"></Person>
        <Person name="Saiful" job="baker"></Person> */}
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>User: {users.length} </h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
          
        }
      </ul>
    </div>
    )
 
}

function Counter(){
  // click hangler 2 vabe kora jai 1ta btn vitor r bairer ata
  const [count, setCount] = useState(10);
  // const hanlerClick = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={ () => setCount(count - 1)}>Descrese</button>
      <button onClick={ () => setCount(count + 1)}>Increse</button>
    </div>
  ) 
}
function Product(props){
  var personStyle={
    border: '1px solid yellow',
    margin: '10px',
    padding: '10px',
    backgroundColor: 'blue',
    borderRadius: '10px',
    width:'400px',
    height: '400px'
     }
     const {name, job, salary} = props.product;
  return (
    <div style={personStyle}>
      <h2>Name: {name}</h2>
      <h3>job: {job}</h3>
      <h1>salary: {salary}</h1>
      <button>Buy now</button>
    </div>
  )
}

function Person(props){
  var personStyle={
   border: '1px solid yellow',
   margin: '10px',
   padding: '10px',
   backgroundColor: 'green',
   borderRadius: '10px',
   width:'400px'
    }
return (
 <div style={personStyle}>
    <h1>Name: {props.name}</h1>
    <h3>His wife: {props.job} </h3>
  </div>
)
}
export default App;
