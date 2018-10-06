import React, { Component } from 'react';
import $ from 'jquery';
import '../styles/app.scss';

export default class Header extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <header>
                {/* Hidden menu */}
                <div className="bg-dark collapse" id="navbarHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-md-7 py-4">
                                <h4 className="text-white">About</h4>
                                <p className="text-muted">
                                    Family owned business for all your Heating &amp; Cooling needs. Hot water heaters, Boilers, Residential and Commercial.
                                </p>
                            </div>
                            <div className="col-sm-4 offset-md-1 py-4">
                                <h4 className="text-white">Contact</h4>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="https://www.facebook.com/beachampshotcold/" target="_blank" className="text-white">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="mailto:info@beauchampsheatingcooling.com" className="text-white">info@beauchampsheatingcooling.com</a>
                                    </li>
                                    <li>
                                        <span className="text-white">(989) 486-9505</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Always visible */}
                <div className="navbar navbar-dark bg-dark box-shadow">
                    <div className="container d-flex justify-content-between container-override">
                        <a href="#" className="navbar-brand d-flex align-items-left">
                            <span className="navbar-logo logoColor.red">Beauchamps&nbsp;</span>
                            <span className="navbar-logo logoColor.yellow">Heating&nbsp;</span>
                            <span className="navbar-logo logoColor.light-blue">&amp;&nbsp;</span>
                            <span className="navbar-logo logoColor.dark-blue">Cooling</span>
                        </a>
                        <button className="navbar-toggler align-items-center" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="true" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}