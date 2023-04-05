import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';


export const Header = () => {
    const { isAuthenticated, username } = useContext(AuthContext);
    return (
        /* <!-- ======= Header ======= --> */
        <header id="header" className="fixed-top ">
            <div className="container d-flex align-items-center justify-content-lg-between">

                <h1 className="logo me-auto me-lg-0"><a href="/">Cars Hype<span></span></a></h1>
                {/* <!-- Uncomment below if you prefer to use an image logo -->
                <!-- <a href="index.html" className="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>-->  */}

                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <li><a className="nav-link scrollto active" href="/">Home</a></li>
                        <li className="dropdown"><a href="/"><span>How Car Works</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li className="dropdown"><a href="/"><span>Engines</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="https://auto.howstuffworks.com/engine.htm">How Car Engines Work</a></li>
                                        <li><a href="https://auto.howstuffworks.com/diesel.htm">How Clutches Work</a></li>
                                        <li><a href="https://auto.howstuffworks.com/inside-engines-roundup.htm">HowStuffWorks Engines Page</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown"><a href="/"><span>Transmission</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="https://auto.howstuffworks.com/transmission.htm">How Manual Transmissions Work</a></li>
                                        <li><a href="https://auto.howstuffworks.com/clutch.htm">How Diesel Engines Work</a></li>
                                        <li><a href="https://auto.howstuffworks.com/automatic-transmission.htm">How Automatic Transmissions Work</a></li>
                                        <li><a href="https://auto.howstuffworks.com/auto-parts/towing/towing-capacity/information/torque-converter.htm">How Torque Converters Work</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown"><a href="/"><span>Drive Train</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="https://auto.howstuffworks.com/auto-parts/brakes/brake-types/brake.htm">How Brakes Work</a></li>
                                        <li><a href="https://auto.howstuffworks.com/differential.htm">How Differentials Work</a></li>
                                        <li><a href="https://auto.howstuffworks.com/tire.htm">How Tires Work</a></li>
                                        <li><a href="https://auto.howstuffworks.com/four-wheel-drive.htm">How Four-Wheel Drive Works</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown"><a href="/"><span>Accessories</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="https://auto.howstuffworks.com/convertible.htm">How Convertibles Work</a></li>
                                        <li><a href="https://auto.howstuffworks.com/cruise-control.htm">How Cruise Control Systems Work</a></li>
                                        <li><a href="https://auto.howstuffworks.com/fuel-gauge.htm">How Fuel Gauges Work</a></li>
                                        <li><a href="https://auto.howstuffworks.com/car-driving-safety/safety-regulatory-devices/odometer.htm">How Odometers Work</a></li>
                                        <li><a href="https://auto.howstuffworks.com/power-door-lock.htm">How Power Door Locks Work</a></li>
                                        <li><a href="https://auto.howstuffworks.com/power-window.htm">How Power Windows Work</a></li>
                                        <li><a href="https://auto.howstuffworks.com/fuel-gauge.htm">How Remote Entry Works</a></li>
                                        <li><a href="https://auto.howstuffworks.com/remote-entry.htm">How Fuel Gauges Work</a></li>
                                        <li><a href="https://auto.howstuffworks.com/turbo.htm">How Turbochargers Work</a></li>
                                        <li><a href="https://auto.howstuffworks.com/turn-signal.htm">How Turn Signals Work</a></li>
                                        <li><a href="https://auto.howstuffworks.com/wiper.htm">How Windshield Wipers Work</a></li>

                                    </ul>
                                </li>

                            </ul>
                        </li>

                        <li><a className="nav-link scrollto" href="/articles">Articles</a></li>
                        <li><a className="nav-link scrollto " href="/tunedcars">Tuned Cars</a></li>
                        <li><a className="nav-link scrollto" href="/about">About</a></li>
                        <li><a className="nav-link scrollto" href="/contact">Contact</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
                {/* <!-- .navbar --> */}

                <div>
 
                    {isAuthenticated && (
                        <>
                            {/* <span className="username">{username}</span> */}
                            <a href="/profile" className="username">{username}</a>
                            <a href="/logout" className="get-started-btn scrollto">Log Out</a>
                        </>
                    )}
                    {!isAuthenticated && (
                    <>
                    <a href="/login" className="get-started-btn scrollto">Log In</a>
                    <a href="/register" className="get-started-btn scrollto">Register</a>
                    </>
                    )}
                </div>


            </div>
        </header>
        /* <!-- End Header --> */
    );
}