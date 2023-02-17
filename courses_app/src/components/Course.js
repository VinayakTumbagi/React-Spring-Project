import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { 
Card,
CardBody,
CardTitle,
CardSubtitle,
CardText,
CardFooter,
Button,
Container, } 
from "reactstrap";
import base_url from "../api/bootapi";


const Course = ({course}) =>{

    const deleteCourse = (id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("Course deleted successfully")
                window.location.reload(false)
            }
            ,
            (error)=>{
                toast.error("Something went wrong")
            }
        )
    }


    return(
        <Card className="text-center"
            // style={{
            //     width: '18rem'
            // }}
            >
            {/* <img
                alt="Sample"
                src="https://picsum.photos/300/200"
                height={2}

            /> */}
            <CardBody>
                <CardTitle tag="h5">
                    {course.title}
                </CardTitle>
                <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
                >
                    {course.description}
                </CardSubtitle>
                <CardText>
                    
                </CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={()=>{
                        deleteCourse(course.id)
                    }}>Delete </Button>
                    <Button color="warning ms-3">Update </Button>

                </Container>
                
            </CardBody>
        </Card>
    )
}

export default Course;