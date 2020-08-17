import React from "react";
import AdminLayout from "./AdminLayout";
import firebase from "./../../helpers/firebaseHelpers";


export default function ConfigurationPage() {

    return (
        <AdminLayout>
            <div className="body_scroll">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-sm-12">
                            <h2>Page configuration</h2>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <button className="btn btn-primary btn-icon float-right right_icon_toggle_btn"
                                    type="button"><i className="zmdi zmdi-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="header">
                                    <h2><strong>Page </strong> Content</h2>
                                    <ul className="header-dropdown">
                                        <li className="dropdown"><a href="javascript:void(0);"
                                                                    className="dropdown-toggle" data-toggle="dropdown"
                                                                    role="button" aria-haspopup="true"
                                                                    aria-expanded="false"> <i
                                            className="zmdi zmdi-more"></i> </a>
                                            <ul className="dropdown-menu dropdown-menu-right slideUp">
                                                <li><a href="javascript:void(0);">Edit</a></li>
                                                <li><a href="javascript:void(0);">Delete</a></li>
                                                <li><a href="javascript:void(0);">Report</a></li>
                                            </ul>
                                        </li>
                                        <li className="remove">
                                            <a role="button" className="boxs-close"><i className="zmdi zmdi-close"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">


                                    <p>
                                        Text for the notification
                                    </p>

                                    <form action="">
                                        <div className="row clearfix">
                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <label>Content</label>

                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-line">
                                                <textarea rows="4" className="form-control no-resize"
                                                          placeholder="Please type what you want...">

                                                </textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <button className={"btn btn-default"} type={"submit"}>Define</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )

}
