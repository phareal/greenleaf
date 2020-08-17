import React, {useEffect, useState} from "react";



import '../../assets/front/styles/plugins.css'
import '../../assets/front/vendors/flexslider/flexslider.css'
import '../../assets/front/vendors/FancyBox/source/jquery.fancybox.css'
import '../../assets/front/vendors/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css'


import _navigation from "./inc/_navigation";
import HomeSlider from "./Home/slider";
import jquery from "jquery";
import firebase from './../../helpers/firebaseHelpers'
import ProductsShowcase from "./Home/productsShowcase";
import ShopNowPage from "./Home/ShopNowPage";





export default function Index (){

    const [notification,setNotification]= useState('');
    const [products,setProducts]= useState([])
    const db = firebase.firestore();

    useEffect(()=>{
        const fetchData = async () =>{
            const products = await db.collection('products').get()
            setProducts(products.docs.map(doc=>doc.data()))
        }

        fetchData();

    })

    return (
            <>
                <nav id="ro-main-nav" className="ro-main-nav-style-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-12 col-xs-10"><a href="index.html">
                            <img src="/assets/img/logo.jpg" alt="Aqua Spa" className="ro-brand" /></a></div>

                            <div className="col-md-9 col-sm-12 col-xs-2">
                                <ul className="ro-nav-content text-center">
                                    <li className="visible-xs"><a href="index.html">
                                        <img src="/assets/img/logo.jpg" alt="Aqua Spa"  alt="Aqua spa"/></a></li>
                                    <li><a href="index.html">HOME</a>
                                    </li>
                                    <li><a href="/">SHOP</a>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div id="ro-main" class="ro-main clearfix">
                    <HomeSlider/>
                    <ProductsShowcase/>
                    <ShopNowPage/>
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
