import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import base_url from "../api/bootApi";
import swal from "sweetalert";


const Register = () => {
    const regBtnRef = useRef(null);
    const [days1, setDays1] = useState();
    const [hours1, setHours1] = useState();
    const [minutes1, setMinutes1] = useState();
    const [seconds1, setSeconds1] = useState();
    const [errs, setErrs] = useState([]);
    const [register1, setRegister1] = useState("registered");
    let date1 = new Date();
    let date2 = new Date("03/01/2024");
    let updateTimer = null;
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: ""
    });
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: ""
    });
    const formHandler = (e) => {
        register(user);

        // setErrors({...errors,
        // name:"hello10"});
        // console.log(errors.name);
        e.preventDefault();
    }
    const register = (data) => {
        setErrors({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            phone: ""
        });
        setRegister1("registering");
        axios.post(`${base_url}/register`, data)

            .then((response) => {
                console.log(response.data);
                setErrs(response.data);
                if (errs.includes("Name cannot be empty")) {
                    console.log("hello23");
                }


            }, (err) => {
                console.log("err :" + err);
            })
    }
    useEffect(() => {
        console.log("hello20");

        console.log(errors.name);

        if (errs.includes("Name cannot be empty")) {
            setErrors((prevErr) => ({
                ...prevErr,
                name: "Name cannot be empty"
            }));
            setRegister1("registered");

        }
        else {
            setErrors((prevErr) => ({
                ...prevErr,
                name: ""
            }));
        }
        if (errs.includes("Password cannot be empty")) {
            setErrors((prevErr) => ({
                ...prevErr,
                password: "Password cannot be empty"
            }));
            setRegister1("registered");
        }
        else {
            setErrors((prevErr) => ({
                ...prevErr,
                password: ""
            }));
        }
        console.log(errors);

        if (errs.includes("Please enter valid email address")) {
            setErrors((prevErr) => ({
                ...prevErr,
                email: "Please enter valid email address"
            }));
            setRegister1("registered");
        }
        else {
            setErrors((prevErr) => ({
                ...prevErr,
                email: ""
            }));
        }
        if (errs.includes("Please enter valid mobile number")) {
            setErrors((prevErr) => ({
                ...prevErr,
                phone: "Please enter valid mobile number"
            }));
            setRegister1("registered");
        }
        else {
            setErrors((prevErr) => ({
                ...prevErr,
                phone: ""
            }));
            setRegister1("registered");
        }
        if (errs.includes("password problem")) {
            swal("Passwords don't match!", "Please type the same password in password and confirm password fields!", "error");
        }
        if (errs.includes("bad_cred")) {
            swal("Incomplete Credentials!", "Please fill in your credentials correctly!", "error");
        }



        if (errs.includes("no errors")) {

            setRegister1("registered")
            setUser({
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                phone: ""
            });
            swal("Good Job!", "You are successfully registered", "success");


        }
    }, [errs]);
    useEffect(() => {

        let diff_in_time = date2.getTime() - date1.getTime();
        let diff_in_days = (diff_in_time / (1000 * 3600 * 24));
        let diff_in_days_str = diff_in_days.toString();
        let days = Number(diff_in_days_str.split(".")[0]);
        let diff_in_hours = Number(diff_in_days_str.substring(diff_in_days_str.indexOf(
            "."))) * 24;
        let diff_in_hours_str = diff_in_hours.toString();
        let hours = Number(diff_in_hours_str.split(".")[0]);
        let diff_in_minutes = Number(diff_in_hours_str.substring(diff_in_hours_str.indexOf(
            "."))) * 60;
        let diff_in_minutes_str = diff_in_minutes.toString();
        let minutes = Number(diff_in_minutes_str.split(".")[0]);
        let diff_in_seconds = Number(diff_in_minutes_str.substring(diff_in_minutes_str.indexOf(
            "."))) * 60;
        let diff_in_seconds_str = diff_in_seconds.toString();
        let seconds = Number(diff_in_seconds_str.split(".")[0]);
        console.log(days, hours, minutes, seconds);
        setDays1(days);
        setHours1(hours);
        setMinutes1(minutes);
        setSeconds1(seconds);
        //
        console.log(seconds1);
       
       
      
    }, []);
    
    const myTimer = () =>{
        
    }
    useEffect(() =>{
        const interval = setInterval(()=>{
            console.log(seconds1);
        // console.log("timer");
        if(seconds1 === 0){
            console.log("seconds0");
            setSeconds1(59);
        }
        else{
            setSeconds1(current=>current-1);
        }
        },1000)},[]);
    useEffect(()=>{
        console.log(seconds1);
        
        if(seconds1===-1){
            setSeconds1(59);
            if(minutes1===-1){
                setMinutes1(59);
            }
            else{
                setMinutes1(current=>current-1);
            }
            
        }
    },[seconds1])
    useEffect(()=>{
        if(minutes1===-1){
            if(hours1===-1){
                setHours1(23);
            }
            else{
                setHours1(current=>current-1);
            }
            
        }
    },[minutes1])
    useEffect(()=>{
        if(hours1===-1){
            if(days1===-1){
                clearInterval(updateTimer);
            }
            else{
                setDays1(current=>current-1);
            }
            
        }
    },[hours1])
    return (
        <>
            <section className="section coming-soon" data-section="section3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-xs-12">
                            <div className="continer centerIt">
                                <div>
                                    <h4>Take <em>any online course</em> and win Rs.326 for your next className</h4>
                                    <div className="counter">

                                        <div className="days">
                                            <div className="value">{days1}</div>
                                            <span>Days</span>
                                        </div>

                                        <div className="hours">
                                            <div className="value">{hours1}</div>
                                            <span>Hours</span>
                                        </div>

                                        <div className="minutes">
                                            <div className="value">{minutes1}</div>
                                            <span>Minutes</span>
                                        </div>

                                        <div className="seconds">
                                            <div className="value">{seconds1}</div>
                                            <span>Seconds</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 reg">
                            <div className={register1}>
                                Registering...please wait
                            </div>
                            <div className="right-content">
                                <div className="top-content">
                                    <h6>Register your free account and <em>get immediate</em> access to online courses</h6>
                                </div>
                                <form id="contact" onSubmit={formHandler}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <fieldset>
                                                <input name="name" type="text"
                                                    className="form-control" id="name"
                                                    placeholder="Your Name"
                                                    value={user.name}
                                                    onChange={(e) => {
                                                        setUser({ ...user, name: e.target.value })

                                                    }} />
                                                <p>{errors.name}</p>
                                            </fieldset>
                                        </div>
                                        <div className="col-md-12">
                                            <fieldset>
                                                <input name="email" type="text"
                                                    className="form-control" id="email"
                                                    placeholder="Your Email"
                                                    value={user.email}
                                                    onChange={(e) => {
                                                        setUser({ ...user, email: e.target.value })
                                                    }} />
                                                <p>{errors.email}</p>
                                            </fieldset>
                                        </div>
                                        <div className="col-md-12">
                                            <fieldset>
                                                <input name="password" type="password"
                                                    className="form-control" id="password"
                                                    placeholder="Enter password"
                                                    value={user.password}
                                                    onChange={(e) => {
                                                        setUser({ ...user, password: e.target.value })
                                                    }}
                                                />
                                                <p>{errors.password}</p>
                                            </fieldset>
                                        </div>
                                        <div className="col-md-12">
                                            <fieldset>
                                                <input name="confirmPassword" type="password"
                                                    className="form-control" id="confirmPasssword"
                                                    placeholder="Reenter password"
                                                    value={user.confirmPassword}
                                                    onChange={(e) => {
                                                        setUser({ ...user, confirmPassword: e.target.value })
                                                    }}
                                                />
                                                <p>{errors.confirmPassword}</p>
                                            </fieldset>
                                        </div>
                                        <div className="col-md-12">
                                            <fieldset>
                                                <input name="phone-number"
                                                    type="type"
                                                    className="form-control"
                                                    id="phone-number"
                                                    placeholder="Your Phone Number"
                                                    value={user.phone}
                                                    onChange={(e) => {
                                                        setUser({ ...user, phone: e.target.value })
                                                    }}
                                                />
                                                <p>{errors.phone}</p>
                                            </fieldset>
                                        </div>
                                        <div className="col-md-12">
                                            <fieldset>
                                                <button ref={regBtnRef} type="submit" id="form-submit" className="button">Get it now</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};
export default Register;