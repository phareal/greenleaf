import _navigation from "./inc/_navigation";
import React, {useEffect, useState} from "react";
import {useRouteMatch} from "react-router";
import firebase from "./../../helpers/firebaseHelpers";
import {Link} from "react-router-dom";

export function SingleProductPage(){

    const db = firebase.firestore();
    const storage = firebase.storage()

    const match = useRouteMatch('/product/:name');
    const [name,setName] = useState()
    const [misc,setMisc]= useState()
    const [description,setDescription] = useState()
    const [imageUrl,setImageUrl] = useState()
    const [products,setProducts]= useState([])

    useEffect(()=>{
        const ref = firebase.firestore().collection('products').doc(match.params.name);
        ref.get().then((doc) => {
            if (doc.exists) {
                const product = doc.data();
                 setName(product.name)
                 setMisc(product.misc)
                setDescription(product.description)
                setImageUrl(product.image_url)

            } else {
                console.log("No such document!");
                console.log(match.params.name)
            }
        });

        const fetchData = async () =>{
            const products = await db.collection('products').get()
            setProducts(products.docs.map(doc=>doc.data()))
        }

        fetchData();

    },[])
    return(
        <>
        <_navigation/>
            <div id="ro-main" className="ro-main clearfix">
                <div className="ro-section">
                    <div className="ro-product-page">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="ro-title">
                                        <h4>PRODUCT:</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row ro-product-wrapper">
                                <div className="col-md-5 col-sm-9 col-xs-12">
                                    <div className="ro-product-image">
                                        <div id="Ro_zoom_image" className="ro-image">
                                            <img
                                            src={imageUrl}
                                            data-zoom-image="assets/images/product-img-large.jpg" alt="Product Item"
                                            className="ro-zoom-image-0"/></div>
                                        <div className="ro-footer clearfix"><a href="cart.html">
                                            <div>ORDER</div>
                                        </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-1 col-sm-3 col-xs-12 ro-product-option-wrapper">
                                    <div data-mcs-theme="minimal-dark" id="Ro_gallery_0"
                                         style={{ overflow: 'visible'}}
                                         className="ro-product-option mCustomScrollbar _mCS_1 mCS-autoHide mCS_no_scrollbar"
                                    >

                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-12">
                                    <div className="ro-product-information">
                                        <div className="ro-head">
                                            <h4>Product name : {name}</h4>
                                        </div>
                                        <form className="ro-body">

                                            <div className="ro-quantity">
                                                <div>
                                                    <p>Other info : </p>
                                                </div>
                                                <div>

                                                </div>
                                            </div>
                                            <div className="ro-note clearfix">
                                                <p>{misc}</p>
                                            </div>
                                        </form>
                                        <div className="ro-footer">
                                            <h6>DESCRIPTION</h6>
                                            <p>
                                                {description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row ro-product-relate">
                                <div className="col-xs-12">
                                    <div className="ro-divide"></div>
                                </div>
                                <div className="col-xs-12">
                                    <h4>ALSO MAY YOU LIKE</h4>
                                </div>
                                <div className="ro-content clearfix">
                                    {products.map(product =>(
                                        <div className="col-md-2 col-sm-4 col-xs-6">
                                            <div className="ro-image"><a  href={"/product/"+product.name}>
                                                <div><img src={product.image_url} alt="Product Item"/></div>
                                            </a></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="ro-backtop" className=""><i className="icon-up"></i></div>
            </div>
            <footer className="ro-bg-dark ro-section ro-padding-top">
                <div className="container">
                    <div className="ro-main-footer">
                        <div className="row">
                            <div className="col-lg-5 col-md-4 col-sm-7 col-xs-12 ro-footer-item">
                                <h5>
                                    GreenLeaf Shopping
                                </h5>
                                <p>Make your choice and have our products<br/>08.077.160.881 </p>
                            </div>
                            <div className="col-lg-6 col-md-4 col-sm-5 col-xs-12 ro-footer-item">
                                <p>
                                    Are you are having issues placing order or you want to order in bulk? do you need more Info?
                                </p>
                                <p> Email us <br/>greenleafshopping247@gmail.com</p><br className="hidden-xs"/>
                            </div>
                        </div>
                    </div>
                    <div className="ro-foot-footer">
                        <h6>©  GreenLeaf Shopping 2021</h6>
                    </div>
                </div>
            </footer>
        </>

    )
}
