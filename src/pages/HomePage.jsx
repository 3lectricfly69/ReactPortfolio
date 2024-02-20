// header, link React/dom/css/footer/
import React from "react";
// import Link from "react-router-dom";
import "../components/UI/Home.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// import ProfileList from '../components/ProfileList';
// import ProfileForm from '../components/ProfileForm';

const HomePage = () => {
    return (
        <div>
        <div className="OurFormula" ><h2>Be Interactive.</h2></div>
        <div className="DoIt2It" ><h3>Engage with oneself by cherishing this.</h3></div>
        </div>
    )
    }

export default HomePage

// const Home = () => {
// return (
//     <ul>
//         <li>Create Responsive Single-Page Applications</li>
//         <li>Make Completely Reusable Code</li>
//         <li>Pass Props and Manage State</li>
//         <li>Handle Events Without Expensive Trips to the DOM</li>
//     </ul>
//     );

// return (
//     <main>
//     <div className="flex-row justify-center">
//         <div
//         className="col-12 col-md-10 mb-3 p-3"
//         style={{ border: '1px dotted #1a1a1a' }}
//         >
//         <ProfileForm />
//         </div>

//         <div className="col-12 col-md-10 my-3">
//         {loading ? (
//             <div>Loading...</div>
//         ) : (
//             <ProfileList
//             profiles={profiles}
//             title="Here's the current roster of friends..."
//             />
//         )}
//         </div>
//     </div>
//     </main>
// );
// };

// here we destructure our props into their own distinct variables
// export default function welcome home({ loggedIn, setLoggedIn }) {
    // lets log out loggedIn variable to see it change in real time
//     console.log('welcome home -> loggedIn', loggedIn);

    // if we are loggedIn render one set of elements, and if not we render another
//     return (
//         <div className="d-flex justify-content-center mt-4"></div>
        // conditional ternary operator is checking to see if loggedIn is true. if so render the following:
//         {loggedIn ? (
//             <div className = "card text-center" style={{ width:480 }}>
//                 <div className = "card-body">
//                     <span role = "img" aria-label = "tada">
//         )}
//     )
// };