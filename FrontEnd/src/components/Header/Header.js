import React from 'react';
import { Link } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div>
          <Heading>FitGuage</Heading>
          <i>...fitness is assured</i>
        </div>
        <nav>
          <ul>


            <li><Link to="/Home">Home</Link></li>
            <li><a href="#features">Features</a></li>
            <li><Link to="/login">Login</Link></li>

            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';

// function Header() {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <header className="header">
//       <div className="container">
//         <div>
//           <h1>FitGuage</h1>
//           <i>...fitness is assured</i>
//         </div>
//         <nav>
//           <ul className="nav-list">
//             <li><a href="#hero">Home</a></li>
//             <li><a href="#features">Features</a></li>
//             <li>
//               <div className="dropdown">
//                 <button onClick={toggleDropdown} className="dropbtn">Menu</button>
//                 {dropdownOpen && (
//                   <div className="dropdown-content">
//                     <Link to="/login">Login</Link>
//                     <Link to="/signup">Sign Up</Link>
//                     <Link to="/goal">Goal</Link>
//                     <Link to="/workout">Workout</Link>
//                   </div>
//                 )}
//               </div>
//             </li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;
