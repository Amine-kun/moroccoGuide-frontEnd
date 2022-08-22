import React from 'react';
import './UserCredentials.css';
import landscape from '../Login/landscape.jpg'
import 'tachyons';

class userCredentials extends React.Component {
		constructor(props){
			super(props);
			this.state={
				previewimg:'',
				title:'',
				propic:'',
				bio:'',
				descri:'',
				username:'',
				renderc:false
			}
		}

			renderChange = () =>{
				this.setState({renderc:true})
			} 


			onUsernameChange = (event) =>{
				this.setState({username: event.target.value})
			}
			onTitleChange = (event) => {
				this.setState({title: event.target.value})
			}
			onBioChange = (event) => {
				this.setState({bio: event.target.value})
			}
			onDescChange = (event) => {
				this.setState({descri: event.target.value})
			}
			onPicChange = (event) => {
				if (event.target.files && event.target.files[0]) {
							   this.setState({
							     previewimg: URL.createObjectURL(event.target.files[0]),
							     propic: event.target.files[0]
							   });
							 }
			}

			sendCred = (props) =>{
				const id = this.props.user["id"];
				const data = new FormData();
				data.set("bio", this.state.bio);
				data.set("title", this.state.title);
				data.append('file', this.state.propic);
				data.set("descri", this.state.descri);
				data.set("username", this.state.username);
				data.set("id", id);
				fetch('http://localhost:3001/credentials',{
					method:'post',
					body: data,
				})
				.then(response => response.json())
				.then(user => {
					if (user){
						this.props.userInfo(user);
						this.props.changingRoute('profile');
						this.props.LoginIn();
					}
					else {
						console.log('no user');
						// const element = document.getElementById("incorrect");
						//  element.classList.remove("inv");

					}
				})

			}



	render(){
			if (!this.state.renderc){
				return (
					<div className="rendering-div">
						<div className="div-content">
							<div className="img-div">
								<img alt="login" className="login-img" src={landscape}/>
							</div>
							<div className="login-form">
								<div className="sub-form">
									<div className="signin-div">
											<p className="signin"> About You </p>
									</div>
									<div className="email-pass">
											<p className="input-text"> Username </p>
											<input className="login-input hovering shadow" type="text" placeholder="Username" onChange={this.onUsernameChange}/>
									</div>
									<div className="email-pass">
											<p className="input-text"> Your Title </p>
											<input className="login-input hovering shadow" type="text" placeholder="Your Title" onChange={this.onTitleChange}/>
									</div>
									<div className="email-pass">
											<p className="input-text">Your Bio</p>
											<input className="login-input hovering shadow" type="text" placeholder="Your Bio" onChange={this.onBioChange}/>
									</div>
									<div className="email-pass">	
											<p className="input-text">Description</p>
											<textarea className="login-input desc-inp hovering shadow" type="Password" placeholder="Description about you" onChange={this.onDescChange}/>
									</div>

									<div className="submit-cre">	
											<button  type="button" className="btn2 hovering pointer shadow" onClick={this.renderChange} >
										        Continue
										    </button>
									</div>
								</div>
							</div>
						</div>
					</div>	
				);}
				else{
					return(
					<div className="rendering-div">
						<div className="div-content">
							<div className="img-div">
								<img alt="login" className="login-img" src={landscape}/>
							</div>
							<div className="login-form">
								<div className="sub-form">
									<div className="signin-div">
											<p className="signin"> One last Step! </p>
									</div>
									<div className="email-pass">
											<p className="input-text">Set a profle picture</p>
											<input className="upload-f shadow" type="file" name="file" onChange={this.onPicChange}/>
									</div>
									<div className="circle shadow">
											{ !this.state.previewimg
												?<p className="disp-photo">Photo</p> 
												:<img className="photoX2" alt="showpp" src={this.state.previewimg}/>}
									</div>
									<div className="submit-cre">	
											<button  type="button" className="btn2 hovering pointer " onClick={this.sendCred} >
										        Submit
										    </button>
									</div>
								</div>
							</div>
						</div>
					</div>	);

				}
		    }
		}


export default userCredentials;