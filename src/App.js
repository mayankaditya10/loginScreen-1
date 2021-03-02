import React from "react";
import Button from '@material-ui/core/Button';
import "./styles/Login.css";
import {
	fade,
	ThemeProvider,
	withStyles,
	makeStyles,
	createMuiTheme,
  } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
// import CircularLoader from './CircularLoader';

const BootstrapInput = withStyles((theme) => ({
	root: {
	  'label + &': {
		marginTop: theme.spacing(3),
	  },
	},
	input: {
	  borderRadius: 4,
	  position: 'relative',
	  backgroundColor: theme.palette.common.white,
	  border: '1px solid #ced4da',
	  fontSize: 16,
	  width: '90%',
	  padding: '10px 12px',
	  transition: theme.transitions.create(['border-color', 'box-shadow']),
	  // Use the system font instead of the default Roboto font.
	  fontFamily: [
		'-apple-system',
		'BlinkMacSystemFont',
		'"Segoe UI"',
		'Roboto',
		'"Helvetica Neue"',
		'Arial',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	  ].join(','),
	  '&:focus': {
		boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
		borderColor: theme.palette.primary.main,
	  },
	},
  }))(InputBase);

class LoginComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { phoneNumber:false, errNo: false, subjectChatDetails: [] };
	}
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

fetchAPI =() =>{
  fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()).then((res) => {console.log("This is the response i get from the api call", res)})
}


	checkMobileLength = () =>{
	if(this.state.phoneNumber.length === 10)
	{
		var regex = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
		var validate = regex.test(this.state.phoneNumber);
			if(validate)
			{
				// this?.props?.sendOtp(this?.state?.phoneNumber);
				this.setState({errNo: false});
			}
			else
			{
				console.log("not a valid indian Number");
			}
	}
	else{this.setState({errNo: true})}
	}
	render() {
		// const { isMobile } = this.props;
		return (
			<div class="loginMainDiv">
				<div class="loginLeftDiv">
				<div style={{color:"#7367F0", fontSize:"50px", fontWeight:"bolder"}}>Welcome!</div>
				<div>Please Login To Continue...</div>
				</div>
				<div class="loginRightDiv">
				<div class="loginRightDivContaint">
					<div class="contentTopDiv">
						<span style={{fontSize:"24px", fontWeight:"bold"}}>Sign In</span>
						<div><span style={{fontSize:"14px"}}>New member?</span>
						<span style={{fontSize:"14px", color:"#7367F0"}}>Sign Up</span>
						</div>
					</div>
					<div class="contentMiddleDiv">
					<FormControl style={{width:"80%"}}>
					<InputLabel shrink htmlFor="bootstrap-input" style={{fontSize:"14px"}}>
					Please enter your mobile number
					</InputLabel>
					<BootstrapInput required  onKeyUp={this.checkMobileLength} pattern="/^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/" maxLength="10" onChange={this.handleChange} inputProps={{
                  style: {
                    padding: "13.5px 14px"
                  },
                  maxLength: 10
                }} type="tel" name="phoneNumber" placeholder="Enter your mobile number" id="bootstrap-input"style={{width:"100%"}} />
					{this.state.errNo ? <span style={{fontSize:"14px", color:"red", paddingTop:"5px"}}>Enter valid 10 digit no</span> : null}
      			</FormControl>
				  <FormControl style={{width:"80%"}}>
					<InputLabel shrink htmlFor="bootstrap-input" style={{fontSize:"14px"}}>
					Please enter four digits OTP that has sent to your mobile no.
					</InputLabel>
					<BootstrapInput inputProps={{
                  style: {
                    padding: "13.5px 14px"
                  },
                  maxLength: 4
                }} onChange={this.handleChange}  placeholder="Enter OTP" name="otp" id="bootstrap-input"style={{width:"100%"}} />
					<span style={{fontSize:"14px", color:"#7367F0", paddingTop:"15px"}}>Resend OTP</span>
      			</FormControl>
					</div>
					<div class="contentBottomDiv">
					<Button variant="contained" onClick={e => {e.preventDefault(); this.fetchAPI();}} style={{height:"50px", width:"80%", backgroundColor:"#7367F0", color:"white"}}>
					Sign up
				</Button>
				{/* {this?.props?.otpLoading ? <span style={{paddingTop:"10px"}}>Please wait you will receive OTP on entered mobile no...</span> : null } */}
					</div>
				</div>
				</div>
			</div>
		);
	}
}



export default LoginComponent
