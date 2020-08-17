import React from "react";
import {Link} from "react-router-dom";

export default function Sidebar(){
    return (
        <aside id="leftsidebar" className="sidebar">
            <div className="menu">
                <ul className="list">
                    <li>
                        <div className="user-info">
                            <a className="image" href="profile.html">
                                <img src="img/profile.png" alt="User"/></a>
                            <div className="detail">
                                <h4>Michael</h4>
                                <small>Super Admin</small>
                            </div>
                        </div>
                    </li>
                    <li className="active open">
                        <Link to={"/"}>
                            <i class="zmdi zmdi-long-arrow-return"></i>
                            <span>Go to website</span>
                        </Link>
                    </li>

                        <li className="active open">
                            <Link to={"/admin"}>
                                <i className="zmdi zmdi-home"></i><span>Dashboard</span>
                            </Link>
                        </li>

                    <li>
                        <Link to={"/admin/products"} className="menu-toggle">
                            <i className="zmdi zmdi-format-list-bulleted"></i>
                            <span>Products</span>
                        </Link>

                    </li>
                    <li>
                        <Link to={"/admin/orders"} className="menu-toggle">
                            <i className="zmdi zmdi-shopping-cart"></i><span>Orders</span></Link>
                    </li>
                    <li>
                        <Link to={"/admin/content"} className="menu-toggle">
                            <i className="zmdi zmdi-settings zmdi-hc-spin"></i><span>
                            Page content</span>
                        </Link>
                    </li>


                </ul>
            </div>
        </aside>
    )
}
