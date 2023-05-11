import React, {useEffect, useState} from "react";
import {products as p} from "../data/ProductData.js";
import {useDispatch, useSelector} from "react-redux";
import {addCart, loadProduct} from "../store/Action";

export default function ProductList(data) {
    const products = useSelector(state => state.products);
    const cart = useSelector(state => state.cart)
    const dispatch= useDispatch();
    useEffect(() => {
        dispatch(loadProduct(p));
    })

    return (<div>
            <p>Số sản phẩm trong giở hàng: {cart.length}</p>
            <div className="row">
                {products.map(product => (
                    <Product id={product.id} name={product.name} img={product.img} des={product.des}
                             price={product.price}></Product>
                ))}
            </div>
        </div>
    );
}

function Product(data) {
    const [product,setProduct] = useState(data);

    const dispatch= useDispatch();
    function clickAdd() {
        dispatch(addCart(product));
    }

    return (
            <div className="col col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                    <img className="card-img-top" src={product.img}
                         alt="Card image cap"/>
                    <div className="card-body">
                        <h4 className="card-title"><a>{product.name}</a></h4>
                        <p className="card-text">{product.des}</p>
                        <a className="btn btn-outline-danger">{product.price}</a>
                        <a className="btn btn-primary" onClick={clickAdd}>Button</a>
                    </div>
                </div>
            </div>
        );
}
