import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//embedding an element with JSX
const name = 'Beesanne'
const embeddedElement = <h1> Hello, {name} </h1>

//embedding a functioni
function formatName(user) {
  return user.firstName + ' ' + user.lastName + '';
}

//create a name object that has a first and last name 
const user = {
  firstName: 'John',
  lastName: 'Smith'
}

const functionElement = (
  // <h1> Hello, {formatName(user)}  </h1>
  <h1> Hello {tenNames(user)}</h1>
);

//Create the function that will format the name and print out the name 10 times
function tenNames(user) {
  const list = []
  const name = user.firstName + ' ' + user.lastName + ' ';
  for (let i = 1; i < 10; i++) {
    list[i] = name
  }
  return list
}


//componenets:
function Welcome(fart) {
  return <h1> hello, {fart.cool}</h1>
}
const element = <Welcome cool="beesanne!" />


//creating a component
function Avatar(fart) {
  return (
    <img className='Avatar'
      src={fart.author.avatarUrl} />
  )
}

function Comment(fart) {
  return (
    <div className='Comment'>
      <div className='UserInfo'>
        <Avatar user={fart.author} />
      </div>
    </div>
  )
}



const root = ReactDOM.createRoot(
  document.getElementById('root')
);


root.render(<Comment avatarUrl =
  "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg"/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
