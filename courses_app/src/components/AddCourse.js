import { Button } from "reactstrap";
import React, { Fragment, useEffect, useState } from "react";
import { Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios"
import base_url from "../api/bootapi";
import Course from "./Course";
import { toast } from "react-toastify";


const AddCourse = () => {

    useEffect(()=>{
        document.title=("Add course")
    },[]);


    const [course,setCourse]=useState({})

    const handleForm=(e)=>{
    console.log(course)
    postDataToServer(course)
    e.preventDefault();
   }

   //creating function to post data to server
   const postDataToServer=(data)=>{
    axios.post(`${base_url}/courses`,data).then(
        (response)=>{
            console.log(response)
            toast.success("Course added successfully")
        },
        (error)=>{
            console.log(error)
            toast.error("Something went wrong")
        }
    )
   }


    return <Fragment>
        <h1 className="text-center mt-5"> Fill Course Details</h1>
        <Form onSubmit={handleForm}>
            <FormGroup>
                <label for="userId">Course Id</label>
                <Input type="text" placeholder="Enter here" name="userId" id="userId" 
                onChange={(e)=>{
                    setCourse({...course,id: e.target.value})
                }}/>
            </FormGroup>

            <FormGroup>
                <label for="title">Course Title</label>
                <Input type="text" placeholder="Enter title here" name="title" id="title"
                onChange={(e)=>{
                    setCourse({...course,title: e.target.value})
                }}
                />
            </FormGroup>

            <FormGroup>
                <label for="desc">Course Description</label>
                <Input type="textarea" placeholder="Enter description here" style={{height:200}} name="desc" id="desc"
                onChange={(e)=>{
                    setCourse({...course,description: e.target.value})
                }}
                />
            </FormGroup>
            <Container>
                <Button type="submit" color="success me-3">Add Course</Button>
                <Button type="reset" color="warning">Clear</Button>
            </Container>
        </Form>
    </Fragment>
}

export default AddCourse;