// import React from "react";
// import { Link } from "react-router-dom";

// function Footer() {
//   return (
//     <>
//       <div className="container-fluid footer">
//         <h3 className="text-center pt-5">
//           Aiva - Your personal voice assistant
//         </h3>

//         <div className="row d-flex justify-content-center align-items-center">
//         <div className="col-lg-4 col-md-4 col-sm-12">
//             <h6>Turn your voice into action I guess</h6>
//         </div>

//         <div className="col-lg-2 col-md-2 col-sm-12">
//             <Link>Hello</Link>
//         </div>
//         <div className="col-lg-2 col-md-2 col-sm-12">
//             <Link>Hello</Link>
//         </div>
//         <div className="col-lg-2 col-md-2 col-sm-12">
//             <Link>Hello</Link>
//         </div>
//         <div className="col-lg-2 col-md-2 col-sm-12">
//             <Link>Hello</Link>
//         </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Footer;

import React from "react";

function Footer() {
  return (
    <>
      <div className="container-fluid footer">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
          <p className="col-md-4 mb-0  ">© 2025 Aiva</p>

         

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <a href="#" className="nav-link px-2">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2  ">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2  ">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2  ">
                About
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default Footer;
