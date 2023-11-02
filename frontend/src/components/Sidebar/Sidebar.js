import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../Styles/Sidebar.css";
// {label:'Add Admin', to:'/addAdmin',icon: <BsPersonFillAdd />}
export default function Sidebar({ children }) {
  // console.log(children);
  return (
    <>
      <div className="side-container">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0  sider">
          <div className="d-flex flex-column align-items-center min-vh-100">
            <div>
              <div>
                <ul
                  className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                  id="menu"
                >
                  <li className="nav-item">
                    {children.map((child, idx) => (
                      <Link
                        key={idx}
                        to={child.to}
                        style={{ color: "#2289FF" }}
                        className="nav-link align-middle px-0"
                      >
                        <i className="fs-4 bi-house">{child.icon}</i>
                        <span className="ms-1 d-none d-sm-inline mx-2">
                          {child.label}
                        </span>
                      </Link>
                    ))}
                  </li>
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
