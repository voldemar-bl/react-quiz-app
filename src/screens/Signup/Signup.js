import React, { Component } from 'react';
import '../../App.css';
import Header from '../../components/Header/Header'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import Typography from '@material-ui/core/Typography'; 
import {
    FormGroup,
    Label,
    Input,
    FormText,
    Button,
    Card,
    CardBody
  } from "reactstrap";
  
class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPass: false
        }
    }

    toggle() {
        const { showPass } = this.state;

        this.setState({
            showPass: !showPass
        })
    }


    render() {
        const { updateText, showLogin, register} = this.props;
        const { showPass } = this.state;
        return (
<div className="wrapper">

<div className="main-panel" style={{borderTop:"1px solid #f3a4b5", display:"flex", justifyContent:"center",alignItems:"center"}}>
<div>
<Card style={{border: "1px solid #f3a4b526",width:"20rem",display:'inline-block',margin:"0 0.54%", overflow:"hidden"}}>
    <CardBody className="text-right">

    <form>
    <FormGroup className="text-left">
<Label for="Username">Username</Label>
<Input
className="inputTransparent"
  type="text"
  name="name"
  id="Username"
  placeholder="Username"
  onChange={updateText}
/>
</FormGroup>
<FormGroup className="text-left">
<Label for="userEmail">Email address</Label>
<Input
className="inputTransparent"
  type="email"
  name="userEmail"
  id="userEmail"
  placeholder="Enter email"
  onChange={updateText}
/>
</FormGroup>
<FormGroup className="text-left">
<Label for="userPassword">Password</Label>
<Input
  type="password"
  name="userPassword"
  id="userPassword"
  placeholder="Password"
  onChange={updateText}
  autoComplete="off"
  
/>
</FormGroup>
<Button className="btn-link float-left" onClick={showLogin}><code>Back</code></Button>

<Button className="btn-link" style={{border: "1px solid #f3a4b526"}} onClick={register}><code>Register</code></Button> 
</form>
    </CardBody>
</Card>
</div>
</div>
</div>
//             <div>


        );
    }
}

export default Signup;
