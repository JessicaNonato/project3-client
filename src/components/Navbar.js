import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// form and modal modules
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Modal
} from 'antd';
import "antd/dist/antd.css";
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  return (
    <div>
        <nav>
        <NavLink to={'/'} id='signup' style={{textDecoration: "none"}}>Signup</NavLink>
        <NavLink to={'/'} id='login' style={{textDecoration: "none"}}>Login</NavLink>
        </nav>
    </div>
  )
}

export default Navbar