import React, {useEffect, useState} from "react";
import firebase from "../../../helpers/firebaseHelpers";
import {Link} from "react-router-dom";


export default function ProductsShowcase(){


    const [products,setProducts]= useState([])
    const db = firebase.firestore();

    useEffect(()=> {
        const fetchData = async () => {
            const products = await db.collection('products').get()
            setProducts(products.docs.map(doc => doc.data()))
        }

        fetchData();
    },[]);

    return(
        <>
            <div id="membership" className="ro-section ro-padding-top ro-section-membership">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="ro-hr-heading ro-section-heading">Products</h3>
                            <p className="ro-caption"></p>

                            <div className="ro-membership-wrapper clearfix ro-section-mb">
                                {products.map(product=>(
                                    <div className="col-md-4 col-sm-6 col-xs-12">
                                        <div className="ro-membership-item"><a href="#">


                                            <div>
                                                <h5>{product.name}</h5>
                                                <div className="ro-price"><img
                                                    src={product.image_url} alt="membership1-img"/>
                                                    <div className="ro-overlay">
                                                        <div className="ro-cell-vertical-wrapper">
                                                            <div className="ro-cell-middle">
                                                               <p>{product.misc}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="ro-option">
                                                    <li></li>
                                                    <li>{product.description.substring(0,100)}</li>
                                                    <li></li>
                                                </ul>
                                                <Link to={"/product/"+product.name} className="ro-btn-bd-1">VIEW</Link>
                                            </div>



                                        </a></div>
                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>
                </div>
            </div>

            </>




    )
}
