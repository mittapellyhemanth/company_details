import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../Styles/Sidebar.css";
// {label:'Add Admin', to:'/addAdmin',icon: <BsPersonFillAdd />}
export default function Sidebar({ children }) {
  // console.log(children);
  const [isActive, setIsactive] = useState(false);
  const handleClick = () => {
    setIsactive(true);
  };
  return (
    <>
      <div className="side-container">
        <div className="  sider">
          <div className=" ">
            <div>
              <div>
                <ul
                  className="nav  flex-column  align-items-sm-start"
                  id="menu"
                >
                  <div className="nav-div">
                    <li className="nav-item">
                      {children.map((child, idx) => (
                        <Link
                          key={idx}
                          to={child.to}
                          className="link-text"
                          onClick={() => handleClick}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="side-content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

// <Link
// to="admins"
// style={{ color: "#2289FF" }}
// className="nav-link align-middle px-0"
// >
// <i className="fs-4 bi-house">
//   <MdAdminPanelSettings />
// </i>
// <span className="ms-1 d-none d-sm-inline mx-2">
//   Admins
// </span>
// </Link>
// </li>
// <li className="nav-item">
// <Link
// to="addAdmin"
// style={{ color: "#AAAAAA" }}
// className="nav-link align-middle px-0"
// >
// <i className="fs-4 bi-house">
//   <BsPersonFillAdd />
// </i>
// <span className="ms-1 d-none d-sm-inline mx-2">
//   Add Admin
// </span>
// </Link>
