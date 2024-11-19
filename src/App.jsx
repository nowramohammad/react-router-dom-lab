import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MailboxForm from "./components/MailboxForm";
import MailboxList from "./components/MailboxList";
import MailboxDetails from "./components/MailboxDetails";




const App = () => {
 const [mailboxes, setMailboxes]= useState([]);
 const addBox = (newMailbox) => {
  const newMailboxWithId = {
    ...newMailbox,
    _id: mailboxes.length+ 1,
  };
  setMailboxes([...mailboxes, newMailboxWithId]);
 };
 return (
  <Router>
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>}/>
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />


      </Routes>
    </div>
  </Router>
 );
};
export default App;
