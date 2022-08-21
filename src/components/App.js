import React from 'react'


import './App.css';
import Header from './Header';
import AddContact from "./AddContact";
import contactCard from "./contactCard";
import ContactList from "./ContactList";

function App() {
  const contacts=[
    {
      id:1,
      name:"Yuvi",
      email:"yuvi@gmail.com",
    },
    {
      id:2,
      name:"Rahul",
      email:"rahul@gmail.com",
    }
  ]
  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
