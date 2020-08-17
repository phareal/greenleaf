
import React from "react";
import {Link} from "react-router-dom";


export default function _navigation(){
    return (
        <nav id="ro-main-nav" className="ro-main-nav-shop">
            <div className="container">
                <div className="ro-brand"><a href="index.html">
                    <img src="/assets/img/logo.jpg" alt="Aqua Spa"/></a>
                </div>
                <div className="ro-nav-content-wrapper">
                    <div className="row">
                        <div className="col-md-4 hidden-sm hidden-xs">
                            <div className="ro-hotline pull-left">Hotline:&nbsp;<span className="ro-color-main">08.077.160.881</span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <ul className="ro-nav text-center">
                                <li><a href={"/"}>HOME</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
