import React, {useEffect, useState} from "react";
import AdminLayout from "./AdminLayout";
import firebase from "../../helpers/firebaseHelpers";
import {useRouteMatch} from "react-router";


export  default function SingleProduct(){

    const db = firebase.firestore();
    const storage = firebase.storage()

    const match = useRouteMatch('/admin/product/:name');
    const [name,setName] = useState()
    const [misc,setMisc]= useState()
    const [description,setDescription] = useState()
    const [imageUrl,setImageUrl] = useState()
    const [image,setImage]= useState([])



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


    },[])




    const  onImagesAdd =(url)=>{

        db.collection('images')
            .doc(name)
            .set({
                'image_url':url
            }).then(value => {
            window.location.reload()
        });

    }
    const relyImage = () => {

        for (let i = 0; i <image.length ; i++) {
            const upload =  storage.ref(`images/product/${name}/otherImages`).put(image[i])
            upload.on(
                "state_changed",
                snapshot=>{},
                error =>{
                    console.log(error)
                },()=>{
                    storage.ref("images/product/")
                        .child(name)
                        .child('/otherImages')
                        .getDownloadURL()
                        .then(url =>{
                            alert(url)
                            onImagesAdd(url)
                        })
                }
            )
        }


    }
    const handleFileChanges = (event)=>{
        setImage(event.target.files)

    }

    const setImagesForProduct = () =>{
        alert(image.length)
    }


    return (
        <AdminLayout>
            <div className="body_scroll">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-sm-12">
                            <h2>Product Detail</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html"><i
                                    className="zmdi zmdi-home"></i> Aero</a></li>
                                <li className="breadcrumb-item">eCommerce</li>
                                <li className="breadcrumb-item active">Product Detail</li>
                            </ul>
                            <button className="btn btn-primary btn-icon mobile_menu" type="button"><i
                                className="zmdi zmdi-sort-amount-desc"></i></button>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <button className="btn btn-primary btn-icon float-right right_icon_toggle_btn"
                                    type="button"><i className="zmdi zmdi-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row clearfix">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="body">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-4 col-md-12">
                                            <div className="preview preview-pic tab-content">
                                                <div className="tab-pane active" id="product_1"><img
                                                    src={imageUrl} className="img-fluid" alt=""/>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-xl-9 col-lg-8 col-md-12">
                                            <div className="product details">
                                                <h3 className="product-title mb-0">Product : {name}</h3>
                                                <hr/>
                                                    <p className="product-description">
                                                        {description}
                                                    </p>
                                                    <p className="product-description">
                                                        {misc}
                                                    </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="body">
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item"><a className="nav-link active" data-toggle="tab"
                                                                    href="#description">Images </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="body">
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="description">
                                            <input type="file" multiple onChange={handleFileChanges} />
                                        </div>
                                        <input type="button" onClick={relyImage}/>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="body">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}
