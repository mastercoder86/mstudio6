import React, { useState, useEffect } from 'react'
import axios from 'axios';
import base_url from '../api/bootApi';
import swal from 'sweetalert';
const Contact = () => {
    const [register1, setRegister1] = useState("");
    const [errs, setErrs] = useState([]);
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [query, setQuery] = useState({
        name: "",
        email: "",
        message: ""
    })
    useEffect(() => {
        setRegister1("registered");
    }, []);
    useEffect(() => {
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
        if (errs.includes("Message cannot be empty")) {
            setErrors((prevErr) => ({
                ...prevErr,
                message: "Message cannot be empty"
            }));
            setRegister1("registered");

        }
        else {
            setErrors((prevErr) => ({
                ...prevErr,
                message: ""
            }));
        }
        if (errs.includes("bad_cred")) {
            swal("Incomplete Credentials!", "Please fill in your credentials correctly!", "error");
        }
        if (errs.includes("no errors")) {

            setRegister1("registered")
            setQuery({
                name: "",
                email: "",
                message: ""
            });
            swal("Good Job!", "Your query is sent successFully", "success");


        }
    }, [errs]);
    const formHandler = (e) => {
        sendQuery(query);
        e.preventDefault();
    };
    const sendQuery = (data) => {
        setRegister1("sending");
        setErrors({
            name: "",
            email: "",
            message: ""
        });
        axios.post(`${base_url}/query`, data)
            .then((response) => {
                setErrs(response.data);
            }, (err) => {
                console.log(err)
            })
    };
    return (
        <>
            <section className="section contact" data-section="section6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Let’s Keep In Touch</h2>
                            </div>
                        </div>
                        <div className="col-md-6">





                            <form id="contact" onSubmit={formHandler}>
                                <div className={register1}>
                                    Sending your query...please wait...
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <fieldset>
                                            <input name="name" type="text"
                                                className="form-control" id="name"
                                                placeholder="Your Name"
                                                value={query.name}
                                                onChange={(e) => {
                                                    setQuery({ ...query, name: e.target.value })
                                                }} />
                                            <p>{errors.name}</p>
                                        </fieldset>
                                    </div>
                                    <div className="col-md-6">
                                        <fieldset>
                                            <input name="email" type="email"
                                                className="form-control" id="email"
                                                placeholder="Your Email"
                                                value={query.email}
                                                onChange={(e) => {
                                                    setQuery({ ...query, email: e.target.value })
                                                }} />
                                            <p>{errors.email}</p>
                                        </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                        <fieldset>
                                            <textarea name="message" rows="6"
                                                className="form-control" id="message"
                                                placeholder="Your message..."
                                                value={query.message}
                                                onChange={(e) => {
                                                    setQuery({ ...query, message: e.target.value })
                                                }}>

                                            </textarea>
                                            <p>{errors.message}</p>
                                        </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="button">Send Message Now</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <div id="map">
                                <iframe src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="422px" style={{ border: 0 }} allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
export default Contact;