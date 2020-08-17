import React from 'react';
import Index from "./components/front";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Admin from "./components/back";
import ProductsPage from "./components/back/Products";
import OrdersPage from "./components/back/Orders";
import ConfigurationPage from "./components/back/ConfigurationPage";

import * as firebase from 'firebase';
import {SingleProductPage} from "./components/front/singleProduct";
import SingleProduct from "./components/back/SingleProduct";




function App() {
    return (

        <Router>
            <Switch>
                <Route exact path={"/"}>
                    <Index/>
                </Route>
                <Route exact path={"/product/:name"}>
                    <SingleProductPage/>
                </Route>
                <Route  exact path={"/admin"}>
                    <Admin/>
                </Route>
                <Route path={"/admin/products"}>
                    <ProductsPage/>
                </Route>
                <Route path={"/admin/product/:name"}>
                    <SingleProduct/>
                </Route>
                <Route path={"/admin/orders"}>
                    <OrdersPage/>
                </Route><Route path={"/admin/orders"}>
                    <OrdersPage/>
                </Route>
                <Route path={"/admin/content"}>
                    <ConfigurationPage/>
                </Route>


            </Switch>
        </Router>

    );
}

export default App;
