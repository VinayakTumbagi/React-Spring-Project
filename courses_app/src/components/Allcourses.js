import React, { useState,useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios"
import { toast } from "react-toastify";

const Allcourses = () =>{

    useEffect(()=>{
        document.title=("All courses")
    },[]);

    //function to call server
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                // console.log(response)
                console.log(response.data)
                toast.success("Courses have been loaded",{
                    position:"bottom-right"
                })
                setCourses(response.data)
            },
            (error)=>{
                console.log(error)
                toast.error("Something went wrong")
            }
        )
    }

    //calling course function
    useEffect(()=>{
        getAllCoursesFromServer();
    },[])

    const[courses,setCourses] = useState([ ])

    return(
        <div>
            <h1>All Courses</h1>

            {
                courses.length>0 ? courses.map((item)=>
                    <Course key={item.id} course={item}/>
                ) : "No courses"

            }
        </div>
    )
}

export default Allcourses;