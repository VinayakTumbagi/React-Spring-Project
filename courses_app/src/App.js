import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Button, Col, Container, Row} from "reactstrap"
import { ToastContainer,toast } from "react-toastify"
import Home from './components/Home';
import Course from './components/Course';
import Allcourses from './components/Allcourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header'
import Menus from './components/Menus';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

function App() {

  const btnHandle = () =>{
    toast.success("Completed")
  }

  return (
      <div>
      <Router>
        <ToastContainer position="top-right"/>
        <Header/>
        <Container>
          <Row className=''>
            <Col md={4}>
                <Menus/>
            </Col>

            <Col md={8}>
            
              <Routes>
                
                <Route path='/' element={<Home/>} exact/>
                <Route path='/add-course' element = {<AddCourse/>} exact />
                <Route path='/view-courses' element={<Allcourses/>} exact/>

              </Routes>

            
                

            </Col>
          </Row>
        </Container>
        </Router>
      </div>
    );
}

export default App;
