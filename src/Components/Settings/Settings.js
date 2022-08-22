import React from 'react';
import './Settings.css';
import 'tachyons';
import Camera from './camera.png';


class Settings extends React.Component {
			constructor(props){
				super(props);
				this.state={
					previewimg:'',
					newcover:'',
					newpic:this.props.userinfo["picture"],
					currentpic:this.props.userinfo["picture"],
					newname:this.props.userinfo["username"],
					newtitle:this.props.userinfo["title"],
					newbio:this.props.userinfo["bio"],
					newdesc:this.props.userinfo["description"],
				}
			}

//event handlers
			//image preview ti the user
			ImagePreview = (event) => {
							 if (event.target.files && event.target.files[0]) {
							   this.setState({
							     previewimg: URL.createObjectURL(event.target.files[0]),
							     newpic:event.target.files[0]
							   });
							 }
							}
			changeName = (event) => {
				this.setState({newname:event.target.value});
			}
			changeTitle = (event) => {
				this.setState({newtitle:event.target.value});
			}
			changeBio = (event) => {
				this.setState({newbio:event.target.value});
			}
			changeDesc = (event) => {
				this.setState({newdesc:event.target.value});
			}

//sending data

		onSubmitRequest = (props) =>{
				const id = this.props.userID;
				const data = new FormData();
				data.append('file', this.state.newpic);
				data.set('id', id);
				data.set('newname', this.state.newname);
				data.set('newtitle', this.state.newtitle);
				data.set('newbio', this.state.newbio);
				data.set('newdesc', this.state.newdesc);
				data.set('currentpic', this.state.currentpic);

						fetch('http://localhost:3001/settings',{
							method:'post',
							body:data,
						})
						.then(response =>response.json())
						.then(data => 
							this.props.userInfo(data),
							this.props.changingRoute('profile'))
												
					}

	render(){ 
				const {changingRoute, userinfo}= this.props;
			return (
						<div className="profile-css">
								  <header>
								    <i className="fa fa-bars" aria-hidden="true"></i>
								  </header>
										  <div className="main">
												<div className="settings-div">
												      <div className="settings-area">
													        <div className="photo-div ">
													        	<span className="pointer-trick ">
													        	<input type="file" className="dis" onChange={this.ImagePreview}/>
													        	<p className="change-pic "><img src={Camera} alt="icon" className="camera"/></p>
													        	</span>
													          { !this.state.previewimg ?<img className="photoX" alt="showpp" src={`http://localhost:3000/images/${userinfo["picture"]}`}/>
													      								:<img className="photoX" alt="showpp" src={this.state.previewimg}/>}
													        </div>

													        <div className="flex-inp">
													        		<h4>New name</h4>
												    			    <input type="text" name="newname" value={this.state.newname} className="upload-input input-styling hovering"  placeholder="New name" onChange={this.changeName}/>
												    		</div>
												        	<div className="flex-inp">
												        			<h4 className="inp2">New title</h4>
															        <input type="text" name="newtitle" value={this.state.newtitle} className="upload-input input-styling hovering"  placeholder="New title" onChange={this.changeTitle}/>
															</div>
															<div className="flex-inp">
																	<h4 className="inp3">New bio</h4>
															        <input type="text" name="newbio" value={this.state.newbio} className="upload-input input-styling hovering"  placeholder="New bio" onChange={this.changeBio}/>
															 </div>
															<div className="flex-inp">
																	<h4 className="inp4">New description</h4>
															        <input type="text" name="newdesc" value={this.state.newdesc}  className="upload-input input-styling hovering" placeholder="New description" onChange={this.changeDesc}/>
															</div>
												        <div className="btn-section">
												    	<span className="follow save-btn" onClick={this.onSubmitRequest}>Save changes</span>
												    	<span className="follow cancel-btn" onClick={()=>changingRoute('profile')}>cancel</span>
												    	</div>
												      </div>
											    </div>
										</div>
			 			</div>	
			)
				
	}
}


export default Settings;