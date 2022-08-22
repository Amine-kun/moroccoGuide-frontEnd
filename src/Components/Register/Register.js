import React from 'react';
import './Register.css';
import landscape from '../Login/landscape.jpg'
import 'tachyons';

class Register extends React.Component{
		constructor(props){
			super(props);
			this.state={
				email:'',
				pass:'',
				firstname:'',
				lastname:'',
			}
		}

//handlers
		emailHanlder=(event)=>{
				this.setState({email: event.target.value})
		}
		passHanlder=(event)=>{
			this.setState({pass: event.target.value})

		}
		fnameHanlder=(event)=>{
			this.setState({firstname: event.target.value})

		}
		lnameHanlder=(event)=>{
			this.setState({lastname: event.target.value})

		}

	onSubmitRegister = (props) =>{
		fetch('http://localhost:3001/register',{
			method:'post',
			headers:{'Content-Type': 'application/json'},
			body: JSON.stringify({
				firstname: this.state.firstname,
				lastname: this.state.lastname,
				email: this.state.email,
				pass: this.state.pass,
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user.id){
				this.props.loadUser(user);
				this.props.changingRoute('usercredentials');
			}
			else {
				console.log('enter valid credentials');
				// const element = document.getElementById("incorrect");
				//  element.classList.remove("inv");

			}
		})

	}


	render(){
		const {changingRoute}=this.props;
			return (
				<div className="rendering-div">
					<div className="div-content">
						<div className="img-div">
							<img className="login-img" alt="landscape" src={landscape}/>
						</div>
						<div className="login-form">
						<p className="back  hovering pointer" onClick={()=>changingRoute('content')}>+</p>
							<div className="sub-form">
								<div className="signin-div">
										<p className="signin"> Register </p>
								</div>
							<div className="firstandsecond">
								<div className="email-pass">
										<p className="input-text">First name</p>
										<input className="login-input-exe hovering" type="text" placeholder="Name" onChange={this.fnameHanlder}/>
								</div>
								<div className="email-pass">
										<p className="input-text"> Last name</p>
										<input className="login-input-exe hovering" type="text" placeholder="Name"onChange={this.lnameHanlder}/>
								</div>
							</div>
								<div className="email-pass">
										<p className="input-text">Email</p>
										<input className="login-input hovering" type="text" placeholder="Email" onChange={this.emailHanlder}/>
								</div>
								<div className="email-pass">	
										<p className="input-text">Password</p>
										<input className="login-input hovering" type="Password" placeholder="Password" onChange={this.passHanlder}/>
								</div>

								<div className="submit">	
										<button  type="button" className="btn hovering pointer " onClick={this.onSubmitRegister}>
									        Submit
									    </button>
									     <p className="backtosign" onClick={()=>changingRoute('login')}>or Already have an account?</p>

							</div>
						</div>
						</div>
					</div>
				</div>	
			);
		}
}

export default Register;