import React from 'react'
const Navbar = () => {
    return (
        <div className="bg-yellow border-bottom-dark fixed-top ">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <strong>Medium</strong>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#">Our Story</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Member Shib</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Write</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ">Sign In</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link btn btn-dark text-light ms-5">Get Started</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar