// // import logo from './logo.svg';
// // import './App.css';
// import React from "react";
// import app from "./firebase"; // just importing will initialize it

// function App() {
//   return (
//     <div style={{ textAlign: "center", marginTop: "100px" }}>
//       <h1>Firebase Connected ✅</h1>
//       <p>Check console to verify</p>
//     </div>
//   );
// }

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// export default App;

// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import StorageViewer from "./StorageViewer";
// import storageviewer from "./storageVeiwer"; // Import the storage viewer component
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>Welcome to Firebase Auth App 🔐</h1>

        {/* Navigation Links */}
        <div style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "20px" }}>Login</Link>
          <Link to="/register" >Register</Link>
          {/* <link to="/storage">View Products</link> */}
          <Link to="/storage" style={{ marginLeft: "20px" }}>View Product Images</Link>
        </div>

        {/* Route Handling */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/storage" element={<StorageViewer />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

