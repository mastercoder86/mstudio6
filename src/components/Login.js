import React, { useEffect, useState } from "react";
import axios from "axios";
import base_url from "../api/bootApi";
import swal from "sweetalert";
const Login = ({loginHide,displayAddToCart,greeting,getLoginDetails,updateCourses}) => {
    const [courses,setCourses] =useState([]);
    const [loginDetails,setLoginDetails] = useState({
        username:"",
        password:""
    })
    const [cred,setCred] = useState({
        credentials:"",
        name:""
    });
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const formHandler = (e) => {
        sendLoginDetails(user);
        e.preventDefault();
    };
    
    useEffect(()=>{
        getLoginDetails(loginDetails);
    },[loginDetails])
    const sendLoginDetails = (data) => {
        axios.post(`${base_url}/login`,data).then((response) => {
            console.log(response.data);
            setCred({
                credentials: response.data.credentials,
                name: response.data.name

            });
            setLoginDetails({
                username: response.data.username,
                password: response.data.password
            });
            setCourses(response.data.subscribedCourses);
        },(err) => {
            console.log(err);
        });
    };
    const registerClick = () => {
        loginHide();
    };
    const closeLogin = () => {
        loginHide();
    };
    useEffect(() => {
        console.log("cred");
        if(cred.credentials === "bad credentials"){
            swal("Invalid Credentials!", "Please fill in your credentials correctly!", "error");
        }
        else if(cred.credentials === "good credentials"){
            loginHide();
            displayAddToCart();
            greeting(cred.name);
            console.log(courses);
            updateCourses(courses);
        
        }
    },[cred]);
    return (
        <>
            <div className="login text-center">
            <i class="fa-solid fa-right-to-bracket login1"></i>
            <button type="button" className="btn btn-success mt-2 closeLogin" onClick={closeLogin}><i class="fa-solid fa-xmark"></i></button>
            <h1>Login Form</h1>
                <form id="loginform" onSubmit={formHandler}>
                    <div className="container">
                        <div className="row">

                            <div className="col-md-12">
                                <fieldset>
                                    <input name="email" type="text"
                                        className="form-control" id="email1"
                                        placeholder="Your Email"
                                        value={user.email}
                                        onChange={(e) => {
                                            setUser({ ...user, email: e.target.value })
                                        }} />

                                </fieldset>
                            </div>
                            <div className="col-md-12">
                                <fieldset>
                                    <input name="password" type="password"
                                        className="form-control mt-3" id="password1"
                                        placeholder="Enter password"
                                        value={user.password}
                                        onChange={(e) => {
                                            setUser({ ...user, password: e.target.value })
                                        }}
                                    />

                                </fieldset>
                            </div>


                            <div className="col-md-12">
                                <fieldset>
                                    <button type="submit" className="btn btn-success mt-2">Login</button>
                                    <a className="regLink" href="#register" onClick={()=>{
                                        registerClick()
                                    }}>Register</a>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    );
};
export default Login;