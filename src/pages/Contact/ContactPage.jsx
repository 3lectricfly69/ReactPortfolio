// // header, link React/dom/css/footer/
// // import React from "react";
// import React, { useState } from 'react';
// // import { Header } from "../components/Header.jsx";
// // import { Navbar } from "../components/Navbar.jsx";
// // import { Footer } from "../components/Footer.jsx";
// // import { postDb, getDb, deleteDb } from './database';
// import "../components/UI/Contact.css";

//     const ContactPage = () => {
//       const [name, setName] = useState('');
//       const [email, setEmail] = useState('');
//       const [message, setMessage] = useState('');
    
//       const handleSubmit = (event) => {
//         event.preventDefault();
//         // Add your form submission logic here
//       };
    
//       const handleDelete = () => {
//         // Add your delete logic here
//         setName('');
//         setEmail('');
//         setMessage('');
//       };
    
//       return (
//         <div>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea
//                 id="message"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               ></textarea>
//             </div>
//             <button type="submit">Submit</button>
//           </form>
//           <button onClick={handleDelete}>Delete</button>
//         </div>
//       );
//     };
    
//     export default ContactPage;
