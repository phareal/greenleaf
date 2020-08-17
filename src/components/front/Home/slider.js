
import React from "react";

export default function HomeSlider(){

    return (
        <>
            <div className={"ro-section"}>
                <div className="ro-section-main-header">
                    <div id="ro-header-background-slider">
                        <ul className="slides">
                            <li className=""
                                style={{
                                    width:100+'%',
                                    float:"left",
                                    marginRight:-100+'%',
                                    position:'relative',
                                    opacity:0,
                                    display:'block',
                                    zIndex:1,
                                }}
                            >
                                <img src="assets/img/dddd.jpg" alt="Home background" draggable="false"/></li>
                            <li style={{
                                width:100+'%',
                                float:"left",
                                marginRight:-100+'%',
                                position:'relative',
                                opacity:0,
                                display:'block',
                                zIndex:2,
                            }}
                                className="flex-active-slide"><img src="assets/img/dddd.jpg" alt="Home background"
                                                                   draggable="false"/></li>
                            <li style={{
                                width:100+'%',
                                float:"left",
                                marginRight:-100+'%',
                                position:'relative',
                                opacity:0,
                                display:'block',
                                zIndex:1,
                            }}
                                className=""><img src="assets/img/dddd.jpg" alt="Home background" draggable="false"/>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="ro-section ro-main-section-about-1 ro-bg-lightgray">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="ro-content">
                                <h3 className="ro-hr-heading">ABOUT US</h3>
                                <p className="text-center">AQUA started as an ambitious idea to promoting the economy
                                    and foot traffic in<br className="hidden-xs"/>up-and-coming neighborhoods. As the
                                        business flourish our efforts has been successfully supported by the same<br
                                            className="hidden-sm hidden-xs"/>community we love, and it has been a
                                            wonderful journey as we strive to provide the highest level<br
                                                className="hidden-xs"/>of service to our
                                                supporters.<br/><span>* * *</span><br/>Blooming in the in the harsh
                                                    conditions of rocky hills, Lilac flowers are beautiful and fragrant;
                                                    a perfect symbol for<br className="hidden-sm hidden-xs"/>New York
                                                        dwellers who faces and overcomes challenges everyday.</p>
                                <div className="ro-image">
                                    <img src="assets/img/logo2.png" alt="about"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>


    );
}
