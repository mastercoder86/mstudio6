import React from 'react'
import { useState } from "react";

import base_url from "../api/bootApi";
import axios from "axios";
const Developer = () => {
    const [course, setCourse] = useState({
        id: '',
        mainImage: '',
        title: '',
        description: '',
        subImage: ''
    });
    const handleForm = (e) => {
        addCourseOnServer(course);
        setCourse({
            id: '',
            mainImage: '',
            title: '',
            description: '',
            subImage: '',
            price: 0
        });
        e.preventDefault();
    }
    const addCourseOnServer = (data) => {
        axios.post(`${base_url}/courses`, data)
            .then((response) => {
                console.log(response);
            }, (err) => {
                console.log("Error: " + err);
            })
    };
    return (
        <>
            <form id="developer" onSubmit={handleForm}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <fieldset>
                                <input name="name" type="number"
                                    className="form-control"
                                    placeholder="id" required=""
                                    value={course.id}
                                    onChange={(e) => {
                                        setCourse({
                                            ...course,
                                            id: e.target.value
                                        })
                                    }} />
                            </fieldset>
                        </div>
                        <div className="col-md-12">
                            <fieldset>
                                <input type="file" className="form-control-file"
                                    name="mainImage"

                                    onChange={(e) => {
                                        setCourse({
                                            ...course,
                                            mainImage: e.target.files[0].name
                                        })
                                    }} />
                            </fieldset>
                        </div>
                        <div className="col-md-12">
                            <fieldset>
                                <input name="password" type="text"
                                    className="form-control"
                                    placeholder="Enter title" required=""
                                    value={course.title}
                                    onChange={(e) => {
                                        setCourse({
                                            ...course,
                                            title: e.target.value
                                        })
                                    }} />
                            </fieldset>
                        </div>
                        <div className="col-md-12">
                            <fieldset>
                                <textarea className="form-control"
                                    name="description1"
                                    rows="5" cols="5"
                                    placeholder="Enter course description"
                                    value={course.description}
                                    onChange={(e) => {
                                        setCourse({
                                            ...course,
                                            description: e.target.value
                                        })
                                    }}
                                ></textarea>
                            </fieldset>
                        </div>
                        <div className="col-md-12">
                            <fieldset>
                                <input type="file"
                                    className="form-control-file"
                                    name="subImage"

                                    onChange={(e) => {
                                        setCourse({
                                            ...course,
                                            subImage: e.target.files[0].name
                                        })
                                    }} />
                            </fieldset>
                        </div>
                        <div className="col-md-12">
                            <fieldset>
                                <input name="password" type="number"
                                    className="form-control"
                                    placeholder="Enter price" required=""
                                    value={course.price}
                                    onChange={(e) => {
                                        setCourse({
                                            ...course,
                                            price: e.target.value
                                        })
                                    }} />
                            </fieldset>
                        </div>
                        <div className="col-md-12">
                            <fieldset>
                                <button type="submit" id="form-submit" className="btn btn-success">Submit</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};
export default Developer;