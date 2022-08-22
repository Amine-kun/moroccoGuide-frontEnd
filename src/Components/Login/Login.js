import React from 'react';
import './Login.css';
import landscape from './landscape.jpg'
import 'tachyons';

class Login extends React.Component {
		constructor(props){
			super(props);
			this.state={
				signInEmail:'',
				signInPassword:'',
			}
		}

componentDidMount() {
    document.body.style.background = 'white';
}

			onEmailChange = (event) => {
				this.setState({signInEmail: event.target.value})
			}
			onPasswordChange = (event) => {
				this.setState({signInPassword: event.target.value})
			}
			onSubmitGet = (props) =>{
				fetch('http://localhost:3001/signin',{
					method:'post',
					headers:{'Content-Type': 'application/json'},
					body: JSON.stringify({
						email: this.state.signInEmail,
						pass: this.state.signInPassword
					})
				})
			   .then(response => response.json())
				.then(user => {
					if (user.id){
						this.props.insertId(user["id"]);
						this.props.GetUserPost();
						 this.props.GetUserInfo();
						this.props.LoginIn();
						this.props.changingRoute('profile');
					}
					else {
						console.log('no user');
						// const element = document.getElementById("incorrect");
						//  element.classList.remove("inv");

					}
				})

			}



	render(){
		const {changingRoute} = this.props;
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
										<p className="signin"> Singin </p>
								</div>
								<div className="email-pass">
										<p className="input-text">Email</p>
										<input className="login-input hovering" type="text" placeholder="Email" onChange={this.onEmailChange}/>
								</div>
								<div className="email-pass">	
										<p className="input-text">Password</p>
										<input className="login-input hovering" type="Password" placeholder="Password" onChange={this.onPasswordChange}/>
								</div>

								<div className="submit">	
										<button  type="button" onClick={this.onSubmitGet} className="btn hovering pointer " >
									        Sign In
									    </button>
									  	  Or 
									    <button type="button" onClick={()=>changingRoute('register')} className=" register-btn hovering pointer " >
									        Register
									    </button>
							</div>
						</div>
						</div>
					</div>
				</div>	
			);
    }
}


export default Login;