import React, { useEffect, useState } from "react";
import useRazorpay from "react-razorpay";
import axios from "axios";
import base_url from "../api/bootApi";
import swal from "sweetalert";
const Cart = ({ cartItems, removeItems, backToCourses,loginDetails,afterPayment,updateCourses}) => {
    const [loginData,setLoginData] = useState({
        username:"",
        password:""
    })
    const [Razorpay] = useRazorpay();
    var totalPrice = 0;
    const removeItem = (id) => {
        removeItems(id);
    };
    useEffect(()=>{
       
    },[]);
    const paymentStart = (username, password) => {
        const paymentData = {
            amount: totalPrice,
            info: "order_requested",
            username: username,
            password: password
        }
        axios.post(`${base_url}/payment/create_order`,paymentData).
            then((response) => {
                console.log(response);
                if (response.status === 200) {
                    console.log("inside created")
                    var options = {
                        key: "rzp_test_y84XqHSv5nPYer", // Enter the Key ID generated from the Dashboard
                        amount: response.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                        currency: "INR",
                        name: "M STudio",
                        description: "M Studio subscription",
                        //image: "D:\\sts\\sts workspace\\smartcontactmanager-1\\src\\main\\resources\\static\\image\\banner1.jpg",
                        "image": "http://localhost:3000/images/logo.png",
                        order_id: response.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                        handler: function (response) {
                            console.log(response);
                            console.log(response.razorpay_payment_id);
                            console.log(response.razorpay_order_id);
                            console.log(response.razorpay_signature);
                            updatePaymentOnServer(response.razorpay_payment_id,response.razorpay_order_id, 'paid',username, password);

                        },
                        "prefill": {
                            "name": "M Studio",
                            "email": "mstudio@gmail.com",
                            "contact": "9000090000"
                        },
                        "notes": {
                            "address": "M STudio & Beauty Academy"
                        },
                        "theme": {
                            "color": "#3399cc"
                        }
                    };
                    console.log(options.amount);
                    var rzp = new Razorpay(options);

                    rzp.on('payment.failed', function (response) {
                        console.log('here 1');
                        console.log(response.error.code);
                        console.log(response.error.description);
                        console.log(response.error.source);
                        console.log(response.error.step);
                        console.log(response.error.reason);
                        console.log(response.error.metadata.order_id);
                        console.log(response.error.metadata.payment_id);
                        alert("payment failed")
                        swal({
                            title: "Oops!",
                            text: "Something went wrong!",
                            icon: "error",
                            button: "Try Again!",
                        });
                    });
                    rzp.open();

                }

            }, (err) => {
                console.log(err);
                alert("something went wrong");
            }
            );

    };
    const updatePaymentOnServer =(razorpay_payment_id, razorpay_order_id,
     status1, username, password) =>{
            // var subscribedCourses = [{}];
            // subscribedCourses = cartItems
            const updateData = {
                razorpay_payment_id: razorpay_payment_id, 
                razorpay_order_id:razorpay_order_id,
                status1: status1,
			    username: username, 
                password: password,
                subscribedCourses:cartItems
            };
            axios.post(`${base_url}/payment/update_order`,updateData)
            .then((response) =>{
                afterPayment();
                updateCourses(response.data);
                console.log(response);
                swal({
                    title: "Good job!",
                    text: "Your payment is successfull!",
                    icon: "success",
                    button: "OK!",
                });
                
            },(err) =>{
                swal({
                    title: "Oops!",
                    text: "your payment is successfull but something went wrong on server! we will contact you later",
                    icon: "error",
                    button: "Try Again!",
                });
            })
        };
        
    return (
        <>
            <div className="cart1">
                <h1 class="text-center"><i class="fa-solid fa-cart-shopping"></i> Your Cart</h1>
                {/* <SetPrice updatePrice={updatePrice} coursePrice2={item.price}/> */}
                {

                    cartItems.length > 0 ? cartItems.map((item) => {
                        const { title, price } = item;
                        totalPrice += item.price;
                        return (<>
                            <div>
                                <span style={{ color: "white" }}>{title}</span>
                                <span style={{ color: "white" }}>--------------------------</span>
                                <span style={{ color: "white" }}>Rs.{price}</span>

                                <button className="removeItem btn btn-success" onClick={() => {
                                    removeItem(item.id);
                                }}>Remove</button>

                            </div>
                            <hr />
                        </>);


                    }) : (<h2>No items in the cart</h2>)}
                {/* // }{setCoursePrice(totalPrice)} */}
                {/* <div className="container">
                    <div className="row">
                        <div style={{width:"100%"}} className="col-md-4">
                        Total price : Rs.{totalPrice}
                        </div>
                        <div className="col-md-4">
                           
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-success" onClick = {backToCourses}>Back to Courses</button>
                        </div>
                    </div>
                </div> */}
                <span className="total_price">Total Price : Rs.{totalPrice}</span>
                {
                    totalPrice > 0 ? (<button className="btn btn-danger ms-3" onClick={()=>{
                        paymentStart(loginDetails.username,loginDetails.password);
                    }}>Proceed to checkout</button>) : null
                }

                <button className="btn btn-primary mt-3 back_to_courses" onClick={() => {
                    backToCourses()
                }}>Back to courses</button>
            </div>


        </>
    );
};
export default Cart;