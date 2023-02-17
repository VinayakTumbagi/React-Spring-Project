import React, { useEffect } from "react";
import { Button, Container } from "reactstrap";

const Home=()=>{

    useEffect(()=>{
        document.title=("Home || Courses app")
    },[]);
    return (
        <div className="text-center">
        <div class="p-4 bg-secondary text-white rounded">
            <h1>Learn code with Vinu</h1>
            <p>Welcome to my coding channel, masti with vinu</p>
            <Container>
                <Button color="primary" outline>Start Using!</Button>
            </Container>
        </div>
        </div>
    )
}

export default Home