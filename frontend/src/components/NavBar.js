import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <Link to="/">
                                <span className="navbar-brand active" >ABC Hospital</span>
                    {/* <a className="navbar-brand"></a> */}
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav ml-auto">
                        <Link to="/">
                            <li className="nav-item">
                                <span className="nav-link" >Home</span>
                            </li>
                        </Link>
                        <Link to="/newUser">
                            <li className="nav-item">
                                <span className="nav-link" >New OP</span>
                            </li>
                        </Link>
                        <Link to="/listUsers">
                            <li className="nav-item">
                                <span className="nav-link" >Patients</span>
                            </li>
                        </Link>

                    </ul>
                </div>
            </nav>
        </>
    )
};

export default Navbar;