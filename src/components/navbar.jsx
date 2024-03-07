import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    useEffect(() => {
        const menuToggle = document.querySelector("#menuToggle");
        const desktopMenu = document.querySelector("#desktopMenu");

        const handleClick = () => {
            desktopMenu.classList.toggle("visible");
            menuToggle.classList.toggle("cross");
        };

        menuToggle.addEventListener("click", handleClick);

        return () => {
            menuToggle.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <header className="header">
            <div className="container header-content content-container">
                <div className="logo">
                    <h1>Chersilnt Ntervisi</h1>
                </div>
                <div className="menu-toggle" id="menuToggle">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <div className="nav-menu-container" id="desktopMenu">
                    <nav className="nav">
                        <ul className="nav-links">
                            <li>
                                <Link to="/react-portfolio/">Home</Link>
                            </li>
                            <li>
                                <Link to="/react-portfolio/education">Education</Link>
                            </li>
                            <li>
                                <Link to="/react-portfolio/experience">Work Experience</Link>
                            </li>
                            <li>
                                <Link to="/react-portfolio/certifications">Certification</Link>
                            </li>
                            <li>
                                <Link to="/react-portfolio/skills">Skills</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
