import React from 'react'
import { useState,useEffect } from "react";
import FeaturesList from "./FeaturesList";

const Features = () => {

    const [features, setFeatures] = useState(FeaturesList);
    const [class2, setClass2] = useState("");
    const[updatedList,setUpdatedList] = useState([]);
    
    const [ready,setReady] = useState(true);
    const [changeReady,setChangeReady] = useState(false);
    const setVisibility = (id) => {
       
        // setChangeReady(false);
        const features1 =
            features.map((feature) => {
                console.log(features.length);
                if (feature.id === id) {
                    
                    return{
                        ...feature,
                        class1:'visible1',
                    };
                   
                   
                    
                    
                    // setClass2("not_visible");
    
                }
                else{
                    return feature;
                }
                
                
                // else{
                //     console.log("hello3");
                //     setClass2("not_visible");
                //     console.log("hello4");
                //     console.log(class2);
                //     feature.class1 = class2;
                // }
            })
            setFeatures(features1);
       
        
        
        
    }
    const setVisibility1 = (id) => {
        // setReady(false);
        const features1 = features.map((feature) => {
            console.log(features.length);
            if (feature.id === id) {
                
                return{
                    ...feature,
                    class1:'not_visible',
                };
               
               
                
                
                // setClass2("not_visible");

            }
            else{
                return feature;
            }
            
            
            // else{
            //     console.log("hello3");
            //     setClass2("not_visible");
            //     console.log("hello4");
            //     console.log(class2);
            //     feature.class1 = class2;
            // }
        })
        setFeatures(features1);
        // setChangeReady(true);
    }
    // useEffect(()=>{
    //     setReady(true);
    // },[changeReady])
    return (
        <>
            {console.log("hello5")}
            <section className="features">
                <div className="container">
                    <div className="row">
                        {
                            features.map((feature, index) => {
                                return (
                                    <>
                                        <div key={feature.id} className="col-lg-4 col-12"  >
                                            <div className="features-post">
                                                <div className="features-content">
                                                    <div className="content-show" >
                                                        <h4 style={{cursor:"pointer"}} onMouseOver={() => {
                                                        setVisibility(feature.id);
                                                    }}><i className={`fa ${feature.icon}`}></i>{feature.title}</h4>
                                                    </div>

                                                    {
                                                    
                                                        feature.class1.localeCompare("visible1") === 0 ? (
                                                            
                                                            <div className="content-hide visible1" onMouseLeave={()=>{
                                                                setVisibility1(feature.id)
                                                            }}>
                                                                <span>hello</span>
                                                                <p>Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero.</p>
                                                                <p className="hidden-sm">Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet.</p>
                                                                <div className="scroll-to-section"><a href="#section2">More Info.</a></div>
                                                            </div>
                                                        ) : (
                                                            
                                                            <div className="content-hide not_visible">
                                                                <span>hello1</span>
                                                                <p>Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero.</p>
                                                                <p className="hidden-sm">Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet.</p>
                                                                <div className="scroll-to-section"><a href="#section2">More Info.</a></div>
                                                            </div>
                                                        )
                                                    }






                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }



                    </div>
                </div>
            </section>

        </>
    );
};
export default Features;