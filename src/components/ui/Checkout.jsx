import React, { useState } from 'react'

function Checkout()
{
                
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    var totalCartPrice = 0;
            
    const [checkoutInput, setCheckoutInput] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        province: '',
        zipcode: '',
    });
    const [error, setError] = useState([]);
            
            
    const handleInput = (e) => {
        e.persist();
        setCheckoutInput({...checkoutInput, [e.target.name]: e.target.value });
    }
            
    var orderinfo_data = {
        firstname: checkoutInput.firstname,
        lastname: checkoutInput.lastname,
        phone: checkoutInput.phone,
        email: checkoutInput.email,
        address: checkoutInput.address,
        city: checkoutInput.city,
        province: checkoutInput.province,
        zipcode: checkoutInput.zipcode,
        payment_mode: 'Paid by PayPal',
        payment_id: '',
    }
            
    const submitOrder = (e, payment_mode) => {
        e.preventDefault();
            
        var data = {
            firstname: checkoutInput.firstname,
            lastname: checkoutInput.lastname,
            phone: checkoutInput.phone,
            email: checkoutInput.email,
            address: checkoutInput.address,
            city: checkoutInput.city,
            province: checkoutInput.province,
            zipcode: checkoutInput.zipcode,
            payment_mode: payment_mode,
            payment_id: '',
        }
            
    var checkout_HTML = '';
    if(cart.length > 0)
    {
        checkout_HTML = <div>
            <div className="row">
            
            <div className="col-md-7">
                <div className="card">
                    <div className="card-header">
                    <h4>Basic Information</h4>
                </div>
                <div className="card-body">
            
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label> First Name</label>
                                 <input type="text" name="firstname" onChange={handleInput} value={checkoutInput.firstname} className="form-control" />
                                <small className="text-danger">{error.firstname}</small>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label> Last Name</label>
                                <input type="text" name="lastname" onChange={handleInput} value={checkoutInput.lastname} className="form-control" />
                                <small className="text-danger">{error.lastname}</small>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label> Phone Number</label>
                                    <input type="number" name="phone" onChange={handleInput} value={checkoutInput.phone} className="form-control" />
                                    <small className="text-danger">{error.phone}</small>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label> Email Address</label>
                                    <input type="email" name="email" onChange={handleInput} value={checkoutInput.email} className="form-control" />
                                    <small className="text-danger">{error.email}</small>
                                </div>
                            </div>
                             <div className="col-md-12">
                                <div className="form-group mb-3">
                                    <label> Full Address</label>
                                    <textarea rows="3" name="address" onChange={handleInput} value={checkoutInput.address} className="form-control"></textarea>
                                    <small className="text-danger">{error.address}</small>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-3">
                                    <label>City</label>
                                    <input type="text" name="city" onChange={handleInput} value={checkoutInput.city} className="form-control" />
                                    <small className="text-danger">{error.city}</small>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-3">
                                    <label>Province</label>
                                    <input type="text" name="province" onChange={handleInput} value={checkoutInput.province} className="form-control" />
                                    <small className="text-danger">{error.province}</small>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-3">
                                    <label>Zip Code</label>
                                    <input type="text" name="zipcode" onChange={handleInput} value={checkoutInput.zipcode} className="form-control" />
                                    <small className="text-danger">{error.zipcode}</small>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group text-end">
                                    <button type="button" className="btn btn-primary mx-1" onClick={ (e) => submitOrder(e, 'cod') }>Place Order</button>
            
                                </div>
                            </div>
                         </div>
            
                    </div>
                </div>
            </div>
            
            <div className="col-md-5">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th width="50%">Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                         </tr>
                    </thead>
                <tbody>
                    {cart.map( (item, idx) => {
                        totalCartPrice += item.product.selling_price * item.product_qty;
                        return (
                            <tr key={idx}>
                                <td>{item.product.name}</td>
                                <td>{item.product.selling_price}</td>
                                <td>{item.product_qty}</td>
                                 <td>{item.product.selling_price * item.product_qty}</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td colSpan="2" className="text-end fw-bold">Grand Total</td>
                        <td colSpan="2" className="text-end fw-bold">{totalCartPrice}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            </div>
        </div>
        }
    else
    {
        checkout_HTML = <div>
            <div className="card card-body py-5 text-center shadow-sm">
                <h4>Your Shopping Cart is Empty. You are in Checkout Page.</h4>
            </div>
        </div>
    }
            
    return (
        <div>
            
            <div class="modal fade" id="payOnlineModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Online Payment Mode</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                            <hr/>
                        </div>
                        </div>
                    </div>
                </div>
            
                <div className="py-3 bg-warning">
                    <div className="container">
                        <h6>Home / Checkout</h6>
                    </div>
                </div>
            
                <div className="py-4">
                    <div className="container">
                        {checkout_HTML}
                    </div>
                </div>
            
        </div>
        )
    }
}


export default Checkout;
            
