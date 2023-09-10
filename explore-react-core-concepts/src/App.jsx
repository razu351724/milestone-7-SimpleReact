import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'


function App() {
  // const [count, setCount] = useState(0)
const actors = [ 'sakib', 'shoriful Raj', 'Jasim', 'Rubel'];

const books = [
  {id: 1, name: 'physics', price: 100},
  {id: 1, name: 'Math', price: 120},
  {id: 1, name: 'Chemistry', price: 130},
  {id: 1, name: 'Biology', price: 150}
]

const singers = [
  {id: 1, name: 'Dr.Mahfuzur Rahman', age: 68},
  {id: 2, name: 'Eva Rahman', age: 38},
  {id: 3, name: 'Shuvro Dev', age: 58},
  {id: 4, name: 'Pritom', age: 28}
]

  return (
    <>
      
      <h3>Vite + React</h3>

      {}

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <Actor name="razu sheikh"> </Actor>
      {actors.map(actor => <Actor name={actor}></Actor>)}

      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Core concepts" isDone={true}></Todo>
      <Todo task="Try Jsx" isDone={false}></Todo> */}

      {/* <Person></Person>
      <Device name="Laptop" price="55"></Device>
      <Device name="mobile" price="17"></Device>
      <Sturent grade="razu" roll='19' ></Sturent>
      <Developer></Developer>
      <Paktice></Paktice> */}
      
    </>
  )
}

function Device(props){
  // console.log(props)
  return <h2>This device: {props.name} price: {props.price} </h2>
}

function Person(){
  const age = 25;
  const money = 20;
  const person = {name: 'sakib', age: 12};
  return <h3>I am  {person.name} with age: {age + money}</h3>
}

const {grade, roll} = {grade: '10', roll: '19' }
function Sturent({grade=0, roll=0}) {
  console.log(grade, roll)
  return (
  <div className='student'>
    <h3>This is a student</h3>
    <p>Name:{grade} </p>
    <p>roll:{roll}</p>
  </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h5>DEVO devo</h5>
      <p>Coding:</p>
    </div>
  )
}


function Paktice(){
  return ( 
  <div style={{
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }}>
    <h3>Razu is a good student</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit repudiandae placeat </p>
  </div>
  )
}
export default App
