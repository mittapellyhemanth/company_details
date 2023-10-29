import React from "react";
import { MdAdminPanelSettings } from "react-icons/md";

import { BsPersonFillAdd } from "react-icons/bs";

import { Link } from "react-router-dom";

export default function Sidebar(){
   
   return (

    <div
        className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 "
        style={{
            justifyContent: "center",
            backgroundColor: "#e1f9f4",
            width:"18%"
        }}
    >
        <div
            className="d-flex flex-column align-items-center min-vh-100"
            style={{
                color: "#AAAAAA",
                paddingTop: "25px",
            }}
        >
            <div
                style={{
                    height: "100vh",
                    // width:"600px",
                       backgroundColor: "#e1f9f4",
                    padding: "0 10px",
                }}
            >
               
                <div>
                    <ul
                        className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                        id="menu"
                    >
                        <li className="nav-item">
                            <a
                                href="admins"
                                style={{ color: "#2289FF" }}
                                className="nav-link align-middle px-0"
                            >
                                <i className="fs-4 bi-house">
                                  
                                    <MdAdminPanelSettings />
                                </i>
                                <span className="ms-1 d-none d-sm-inline mx-2" >Admins</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link to='addAdmin' style={{color:"#AAAAAA"}} className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house">
                                    <BsPersonFillAdd />
                                </i>
                                <span className="ms-1 d-none d-sm-inline mx-2">
                                    Add Admin
                                </span>
                            </Link>
                        </li>
                        </ul>
                </div>
       
            </div>
        </div>
    </div>
   
)
}
