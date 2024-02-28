import React, { useRef } from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import base_url from "../api/bootApi";
import Login from './Login';
import Cart from './Cart';
import swal from 'sweetalert';
import userEvent from '@testing-library/user-event';
const Courses = () => {
    const headers = {
        'Cache-Control': 'no-cache',
        'Accept-Language': 'en',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
        //"Authorization": "Basic dXNlcjowM2VhN2JhYS1mMTQ0LTQ5YWMtOGFhMy02NDE4YWJiNzdhMTk=",
       
    };
    
    const config = {
        headers
    };
    const [courses, setCourses] = useState([]);
    const [loginDetails, setLoginDetails] = useState({});
    const [courses3,setCourses3] = useState([]);
    const [courses2, setCourses2] = useState([]);
    const [changeCourse,setChangeCourse] = useState(false);
    const [showSubscribe, setShowSubscribe] = useState(true);
    const [showAddToCart, setShowAddToCart] = useState(false);
    const [showAddedToCart, setShowAddedToCart] = useState(false);
    const [loginDisplay, setLoginDisplay] = useState(false);
    const [disableSubscribe, setDisableSubscribe] = useState(false);
    const [disableAddToCart, setDisableAddTocart] = useState(false);
    const [addToCart, setAddToCart] = useState(false);
    const [displayName, setDisplayName] = useState(false);
    const [displayCart, setDisplayCart] = useState(false);
    const [cartToggle, setCartToggle] = useState(false);
    const [greetName, setGreetName] = useState("");
    const [cartItems, setCartItems] = useState([]);
    const [nitems, setNitems] = useState(0);
    const getAllCourses = () => {
        axios.get(`${base_url}/courses`,config)
            .then((response) => {
                setCourses(response.data);
                console.log(response);
            },
                (err) => {
                    console.log("error : " + err);
                })
    };



    const subscribeClick = () => {
        setLoginDisplay(true);
        setDisableSubscribe(true);
        setShowSubscribe(false);
    };
    const loginHide = () => {
        setLoginDisplay(false);
        setDisableSubscribe(false);
        setShowSubscribe(true);
    };
    const displayAddToCart = () => {
        setAddToCart(true);
        setShowSubscribe(false);
        setDisableSubscribe(false);
    };
    const greeting = (name) => {
        console.log(name);
        setGreetName(name);
        setDisplayName(true);
    };
    const addItem = (id) => {
        const courses1 = courses.map((course) => {

            if (course.id === id) {
                console.log("reached");
                return {
                    ...course,
                    addedToCart: true,
                };
                



                // setClass2("not_visible");

            }
            else {
                return course;
            }



        })
        setCourses(courses1);
        console.log("id :" + id);

        var addedCourse = courses.filter(c => c.id === id);
        console.log(addedCourse[0]);
        const nextCourse = [
            ...cartItems, 
            addedCourse[0]
            // {
            //     // id: addedCourse[0].id,
            //     // title: addedCourse[0].title,
            //     // price: addedCourse[0].price
            //     // ...addedCourse[0],
            //     // title1:"hello"
            // }
        ];
        setCartItems(nextCourse);
        console.log(cartItems);

        setNitems(prevVal => prevVal + 1);
        setAddToCart(false);
        setShowAddedToCart(true);
        
        setChangeCourse(true);
        courses.map(c=>{
            console.log(c.addedToCart);
        })
       
    }
    
    const removeItems = (id) => {
        const courses1 = courses.map((course) => {

            if (course.id === id) {
                console.log("reached");
                return {
                    ...course,
                    addedToCart: false,
                };
                



                // setClass2("not_visible");

            }
            else {
                return course;
            }



        })
        setCourses(courses1);
        setCartItems(cartItems.filter(c => c.id !== id));
        setNitems(prevValue => prevValue-1);
    }
    const showCart = () => {
        setCartToggle(true);
        setDisplayCart(true);
        setAddToCart(false);
        setDisableAddTocart(true);
        console.log("inside cart");
        console.log(displayCart);
        setShowAddedToCart(false);
    };
    const backToCourses = () =>{
        setDisplayCart(false);
        setDisableAddTocart(false);
        setShowAddedToCart(true);
    };
    const getLoginDetails = (loginDetails) =>{
        setLoginDetails(loginDetails);
    }
    const updateCourses = (coursess)=>{
        console.log(coursess);
        setCourses3(coursess);
        console.log(courses3);
    };
    const afterPayment =()=>{
        setCartItems([]);
        setNitems(0);
        setDisplayCart(false);
        setDisableAddTocart(false);
        setAddToCart(true);
    };
    // useEffect(()=>{
    //     console.log(loginDetails);
    // },[loginDetails]);
    useEffect(() => {
        cartToggle ? setDisplayCart(true) : setDisplayCart(false);
    }, [cartToggle]);

    useEffect(() => {
        getAllCourses();

    }, []);
    useEffect(() => {
       setCourses2(courses);
    },[courses]);
    useEffect(() => {
        const updatedCourses=courses.map(c1=>{
            courses3.map(c2=>
                {if(c1.id === c2.id){
                    c1.enrolled=true;
                }})
                return c1});
                setCourses(updatedCourses);
     },[courses3]);
    return (

        <section className="section courses" data-section="section4">
            {displayName ? (<><button className="cart" onClick={() => {
                showCart();
            }}>Go to cart <i class="fa-solid fa-cart-shopping"></i> {nitems}</button><div className="greeting">Hi {greetName}</div></>) : null}
            {displayCart ? (<Cart cartItems={cartItems} removeItems={removeItems} backToCourses={backToCourses} loginDetails={loginDetails} updateCourses={updateCourses} afterPayment={afterPayment}/>) : null}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-heading">
                            <h2>Choose Your Course</h2>
                        </div>
                    </div>
                    <div className="cointainer">
                        <div className="row">

                            {loginDisplay ? (<Login loginHide={loginHide} displayAddToCart={displayAddToCart} greeting={greeting} getLoginDetails={getLoginDetails} updateCourses={updateCourses} />) : null}


                            {courses.map((course) => {
                                const { id, title, description, mainImage, subImage,price } = course;
                                return (
                                    <div className="col-md-3 mt-2">

                                        <div className="card" style={{ width: "18rem" }}>
                                            <img src={`../../images/${mainImage}`} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{title}</h5>
                                                <p className="card-text">{description}</p>
                                                {showSubscribe ? (<button className="btn btn-primary mx-3"
                                                    onClick={() => {
                                                        subscribeClick();
                                                    }}>
                                                    Subscribe</button>) : null}
                                                {disableSubscribe ? (<button className="btn btn-primary mx-3"

                                                    disabled
                                                >
                                                    Subscribe</button>) : null}
                                                {addToCart ? course.enrolled ? (<span className="text-success">enrolled</span>):(<button className="addToCartBtn" onClick={() => {
                                                    addItem(id);
                                                }}>Add To Cart</button>) : null}
                                                {disableAddToCart ? course.enrolled ? (<span className="text-success">enrolled</span>): course.addedToCart ? (<span className="text-danger">added to cart</span>):(<button className="addToCartBtn"
                                                    disabled

                                                >Add To Cart</button>) : null}
                                                { showAddedToCart ? course.enrolled ? (<span className="text-success">enrolled</span>) : course.addedToCart ? (<span className="text-danger">added to cart</span>):(<button className="addToCartBtn" onClick={() => {
                                                    addItem(id);
                                                }}>Add To Cart</button>):null}

                                                <img src={`../../images/${subImage}`} className="subimage" alt="..." />

                                                <span>Rs.{price}</span>
                                            </div>
                                        </div>
                                    </div>

                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </section>


    );
};
export default Courses;