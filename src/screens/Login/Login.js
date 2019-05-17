import React, { Component } from 'react';
import '../../App.css';
import Header from '../../components/Header/Header'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import List from '../QuizList/QuizList';

// import { Card, CardImg, CardBody, CardTitle, CardText, Button, CardHeader } from 'reactstrap';
import {
    FormGroup,
    Label,
    Input,
    FormText,
    Button,
    Card,
    CardBody
  } from "reactstrap";

// import Grid from '@material-ui/core/Grid';
// import Email from '@material-ui/icons/Email';
// import Lock from '@material-ui/icons/Lock';

// import Input from '@material-ui/core/Input';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import Typography from '@material-ui/core/Typography';  


class Login extends Component {
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

        const { updateText, validation, showSignup } = this.props;
        const { showPass } = this.state;
        return (
            <div className="wrapper">

            <div className="main-panel" style={{borderTop:"1px solid #f3a4b5", display:"flex", justifyContent:"center",alignItems:"center"}}>
            <div>
            <Card style={{border: "1px solid #f3a4b526",width:"20rem",display:'inline-block',margin:"0 0.54%", overflow:"hidden"}}>
                <CardBody className="text-right">

                <form>
          <FormGroup className="text-left">
            <Label for="exampleEmail">Email address</Label>
            <Input
            className="inputTransparent"
              type="email"
              name="loginEmail"
              id="exampleEmail"
              placeholder="Enter email"
              onChange={updateText}
            />
          </FormGroup>
          <FormGroup className="text-left">
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="loginPass"
              id="examplePassword"
              placeholder="Password"
              onChange={updateText}
              autoComplete="off"
              
            />
          </FormGroup>
          <Button className="btn-link float-left" onClick={showSignup}><code>Register</code></Button>
          <Button className="btn-link" style={{border: "1px solid #f3a4b526"}} onClick={validation}><code>Login</code></Button> 
          
          
           
        </form>
                {/* <CardTitle><h4 className="mb-0 text-left title-up text-uppercase">{quiz.name}</h4></CardTitle>

                    <CardText><footer className="blockquote-footer  text-left">{quiz.description}</footer></CardText>
                    <Button className="btn-link" style={{border: "1px solid #f3a4b526"}} onClick={() => onPress(index)}><code>Join</code></Button> */}
                </CardBody>
            </Card>
            </div>
            </div>
            </div>
            //     <Header />
            //     <div className='mainDiv'>


            //         <FormControl className="formDiv">

            //             <Typography variant="display2" >
            //                 Sign In
            //             </Typography>
            //             <br />
            //             <TextField className="formEle" id="input-with-icon-grid"
            //                 // placeholder="abc@mail.com"
            //                 // inputProps={{ maxLength: 17 }}
            //                 // fullWidth={true}
            //                 // style={{width:300}}
            //                 label="Email"
            //                 type="email"
            //                 onChange={updateText}
            //                 name="loginEmail"
            //                 // helperText="Some important text"
            //                 margin="normal"
            //             // required={true} "show * means required"
            //             // error={true} "shows like there is error"
            //             // multiline={true} "behaves like textarea"
            //             />


            //             <TextField className="formEle" id="input-with-icon-grid"
            //                 label="Password"
            //                 type={showPass ? 'text' : 'password'}
            //                 onChange={updateText}
            //                 name="loginPass"
            //                 margin="normal"
            //                 InputProps={{
            //                     endAdornment: (
            //                         <InputAdornment position="end">
            //                             <IconButton
            //                                 aria-label="Toggle password visibility"
            //                                 onClick={this.toggle.bind(this)}
            //                             >
            //                                 {showPass ? <VisibilityOff /> : <Visibility />}
            //                             </IconButton>
            //                         </InputAdornment>
            //                     ),
            //                 }}
            //             />
            //             <br />


            //             <Button className="formEle" color="primary" >
            //                 Forgot password?
            //             </Button>
            //             <br />

            //             <Button className="formEle" variant="contained" color="primary" onClick={validation}>
            //                 Sign In
            //             </Button>
            //             <br /><br />
            //             <Typography variant="body2" >
            //                 New to QuizCloud?
            //             </Typography>

            //             <Button className="formEle" variant="contained" color="secondary" onClick={showSignup}>
            //                 Sign up
            //             </Button>


            //         </FormControl>


            //     </div>
            // </div>
        );
    }
}

export default Login;
