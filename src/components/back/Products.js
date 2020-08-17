
import React, {useEffect, useState} from "react";
import AdminLayout from "./AdminLayout";
import firebase from "./../../helpers/firebaseHelpers";




function ProductsPage(){

    const db = firebase.firestore();
    const storage = firebase.storage()

    const [name,setname]= useState('');
    const [description,setdescription]= useState('');
    const [misc,setMisc]= useState(0);
    const [quantity,setquantity]= useState(0);
    const [products,setProducts]= useState([])
    const [image,setImage]= useState()
    const [secimage,setSecImage]= useState()
    const [imageUrl,setImageUrl]= useState('')


    useEffect(()=>{
         //load products
        const fetchData = async () =>{
            const products = await db.collection('products').get()
            setProducts(products.docs.map(doc=>doc.data()))
        }

        fetchData();

    },[])


    const onChangeNamed =(event)=>{
        setname(event.target.value)
    }

    const onDescriptionChanged = (event)=>{
        setdescription(event.target.value)
    }
    const onMiscChanged=(event)=>{
        setMisc(event.target.value)
    }

    const onFileChanged= (event)=>{
        setImage(event.target.files[0])
    }
    const onSecondFileChanged= (event)=>{
        setSecImage(event.target.files[0])
    }


    const addProducts = () => {
      const upload =  storage.ref(`images/productPreviews/${image.name}`).put(image)
        upload.on(
            "state_changed",
            snapshot=>{},
            error =>{
                console.log(error)
            },()=>{
                storage.ref("images/productPreviews/")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url =>{
                        alert(url)
                        onProductsAdd(url)
                    })
            }
        )
    }



    const  onProductsAdd =(url)=>{

        db.collection('products')
            .doc(name)
            .set({
                'description': description,
                'name': name,
                'misc':misc,
                'image_url':url,
            }).then(value => {
            window.location.reload()
        });

    }


    return (

        <AdminLayout>
            <div className="body_scroll">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-sm-12">
                            <h2>Product List</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html"><i
                                    className="zmdi zmdi-home"></i> Aero</a></li>
                                <li className="breadcrumb-item">eCommerce</li>
                                <li className="breadcrumb-item active">Product List</li>
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
                    <form method={"post"} onSubmit={addProducts}>
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="alert alert-warning" role="alert">
                                    <strong>Add products</strong>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true"><i className="zmdi zmdi-close"></i></span>
                                    </button>
                                </div>
                                <div className="card">
                                    <div className="body">
                                        <h2 className="card-inside-title">Add a new products</h2>
                                        <div className="row clearfix">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <input type="text" name={"name"} onChange={onChangeNamed} className="form-control" placeholder="Name"/>
                                                </div>
                                                <div className="form-group">
                                                         <textarea rows="4" onChange={onDescriptionChanged} className="form-control no-resize"
                                                                   placeholder="Please type the description">

                                                    </textarea>

                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                             <textarea rows="4" onChange={onMiscChanged} className="form-control no-resize"
                                                                       placeholder="Please type the prices and the quantity">

                                                    </textarea>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="header">
                                        <h2>Add  <strong>Image for the product</strong></h2>
                                    </div>
                                    <div className="body">
                                        <input type="file"   onChange={onFileChanged}/>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="header">
                                        <h2>Add  <strong>Second</strong></h2>
                                    </div>
                                    <div className="body">
                                        <input type="file"   onChange={onSecondFileChanged}/>
                                    </div>
                                </div>
                            </div>
                            <input type={"submit"} className={"btn btn-success"}  value={"Submit"}/>
                        </div>

                    </form>

                    <div className="row clearfix">
                        <div className="col-lg-12">
                            <div className="alert alert-warning" role="alert">
                                <strong>Products lists</strong>
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true"><i className="zmdi zmdi-close"></i></span>
                                </button>
                            </div>
                            <div className="card">
                                <div className="table-responsive">
                                    <table
                                        className="table table-hover product_item_list c_table theme-color mb-0 footable footable-1 footable-paging footable-paging-center breakpoint-lg"
                                    >
                                        <thead>
                                        <tr className="footable-header">


                                            <th className="footable-sortable" style={{
                                                display:"table-cell"
                                            }}>Product
                                                Image<span className="fooicon fooicon-sort"></span></th>
                                            <th className="footable-sortable" style={{
                                                display:"table-cell"
                                            }}>Product
                                                Name<span className="fooicon fooicon-sort"></span></th>
                                            <th data-breakpoints="sm xs" className="footable-sortable"
                                                style={{
                                                    display:"table-cell"
                                                }}>Description<span
                                                className="fooicon fooicon-sort"></span></th>
                                            <th data-breakpoints="xs" className="footable-sortable"
                                                style={{
                                                    display:"table-cell"
                                                }}>Misc<span
                                                className="fooicon fooicon-sort"></span></th>
                                            <th data-breakpoints="xs" className="footable-sortable"
                                                style={{
                                                    display:"table-cell"
                                                }}>Actions<span
                                                className="fooicon fooicon-sort"></span></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {products.map(product=>(
                                            <tr>
                                                <td className="footable-first-visible" style={{
                                                    display:"table-cell"
                                                }}>
                                                    <img
                                                        src={product.image_url} width="48" /></td>

                                                <td style={{
                                                    display:"table-cell"
                                                }}><h5>{product.name}</h5></td>
                                                <td style={{
                                                    display:"table-cell"
                                                }}><span className="text-muted">{product.description}</span>
                                                </td>
                                                <td style={{
                                                    display:"table-cell"
                                                }}>{product.misc}</td>
                                                <td className="footable-last-visible" style={{
                                                    display:"table-cell"
                                                }}>
                                                    <a href={"/admin/product/"+product.name}
                                                       className="btn btn-default waves-effect waves-float btn-sm waves-green"><i
                                                        className="zmdi zmdi-eye"></i></a>
                                                </td>
                                            </tr>


                                        ))}


                                        </tbody>
                                        <tfoot></tfoot>
                                    </table>
                                </div>
                            </div>
                            <div className="card">
                                <div className="body">
                                    <ul className="pagination pagination-primary m-b-0">
                                        <li className="page-item"><a className="page-link" href="javascript:void(0);"><i
                                            className="zmdi zmdi-arrow-left"></i></a></li>
                                        <li className="page-item active"><a className="page-link"
                                                                            href="javascript:void(0);">1</a></li>
                                        <li className="page-item"><a className="page-link"
                                                                     href="javascript:void(0);">2</a></li>
                                        <li className="page-item"><a className="page-link"
                                                                     href="javascript:void(0);">3</a></li>
                                        <li className="page-item"><a className="page-link"
                                                                     href="javascript:void(0);">4</a></li>
                                        <li className="page-item"><a className="page-link" href="javascript:void(0);"><i
                                            className="zmdi zmdi-arrow-right"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default ProductsPage
