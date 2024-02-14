// header, link React/dom/css/footer/
import { React } from "react";
import { Header } from "../components/Header.jsx";
import { Navbar } from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.jsx";
// import { postDb, getDb, deleteDb } from './database';
import "../components/UI/Contact.css";

const form = document.getElementById('contact-form');

    // Adds deleteCard() to the global scope so each card has access to it.
    window.deleteCard = (e) => {
    // Grabs the id from the button element attached to the contact card
        let id = parseInt(e.id);
    
      // Delete the card
    deleteDb(id);
    
      // Reload the DOM
    fetchCards();
    };
    
    form.addEventListener('submit', (event) => {
      // handle the form data
    event.preventDefault();
    const name = form.elements['name'].value;
    const home = form.elements['home-phone'].value;
    const cell = form.elements['cell-phone'].value;
    const email = form.elements['email'].value;
    
      // Post form data to IndexedDB
    postDb(name, home, cell, email);
    
      // Submit the form
    form.reset();
    
      // Reload the DOM
    fetchCards();
    });
    
    const fetchCards = async () => {
    // Grab card data from IndexedDB
    const result = await getDb();
    
    let card = ` `;
    
      // Loop through the data and create the contact card
    for (let data of result) {
        console.log(data);
        card += `
        <div className="card card-rounded col-md-3 m-2">
        <div className="card-header card-rounded">
            <h1>${data.name}</h1>
        </div>
        <div className="card-body">
            <p>Home Phone: ${data.home_phone}</p>
            // <p>Cell Phone: ${data.cell_phone}</p>
            <p>Email: ${data.email}</p>
        </div>
        <div className="flex-row justify-flex-end p-1">
            <button className="btn btn-sm btn-danger" id="${data.id}" onclick="deleteCard(this)">Delete</button>
        </div>
        </div>
        `;
    }
    
      // Setting innerHTML as card variable
    document.getElementById('card-group').innerHTML = card;
    };
    
    // Fetch cards upon being loaded.
    fetchCards();