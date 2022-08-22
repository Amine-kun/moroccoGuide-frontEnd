import React from 'react';
import './Profile.css';
import 'tachyons';
import SettingsIcon from './SettingsIcon.png';


class Profile extends React.Component {
			constructor(props){
				super(props);
				this.state={
					upload: false,
					imgid:'',
					title:'',
					image:[],
					imageData:[],
					desc:'',
					pageChoice:'',
				}
			}

			settitle = (event) =>{
			this.setState({title: event.target.value})
			}
			setimage = (event) =>{
					this.setState({image:event.target.files[0]})
			}
			setdesc = async (event) =>{
				await this.setState({desc: event.target.value})
			}
			handleChange = (event) => {
			    const {value} = event.target;

			    this.setState({
			      pageChoice: value,
			    });
			  };

			onSubmitSend = (props) =>{
				const id = this.props.userID;
				const data = new FormData();
				data.set("title", this.state.title);
				data.append('file', this.state.image);
				data.set("desc", this.state.desc);
				data.set("userID", id);
				data.set("categorie", this.state.pageChoice);
						fetch('http://localhost:3001/upload',{
							method:'post',
							body:data,
						})
						.then(response =>response.json())
						.then(data => 
							this.props.uploadPhoto(data), 
							this.setState({imageData: data}))
							
						this.setState({upload: false});
					}

			showUpload = (upload) =>{
			 	this.setState({upload: true});
			}
			hideUpload = (upload) =>{
			 	this.setState({upload: false});
			}

	render(){ 
		const {upload}= this.state;
		const DeletePost = this.props.DeletePost;
		const namearr = this.props.contents;
		const changingRoute = this.props.changingRoute;
		const result = [];
		const arr = namearr.map((value, index, arrayRef)=>(
			result.push(arrayRef.length)
		))
		const displayimage = namearr.map((imagename) => (
					<div className="rows col-md-4"  key={imagename}>
						<p className="delete-btn" onClick={()=>DeletePost(imagename)}>+</p>
						<img data-img-src={imagename} className="fknimg" alt={imagename} src={`http://localhost:3000/images/${imagename}`} />
					</div>
		))
		const profilepic = (
			<div className="photo-left" >
				 <img className="photoX" alt= {this.props.userinfo["picture"]} src={`http://localhost:3000/images/${this.props.userinfo["picture"]}`}/>
				 </div>)
			return (
						<div className="profile-css">
								  <header>
								    <i className="fa fa-bars" aria-hidden="true"></i>
								    <img alt="settings" src={SettingsIcon} className="Edit1" onClick={()=>changingRoute("settings")}/>
								  </header>
										  <div className="main">
												<div className="row">
												      <div className="leftX col-lg-4">
													        
													         		{profilepic}
													        
												        <h4 className="nameX">{this.props.userinfo["username"]}</h4>
												        <p className="infoX">{this.props.userinfo["title"]}</p>
												        <p className="infoX brd">{this.props.userinfo["bio"]}</p>
													        <div className="statsX row-stats">
														          <div className="stat col-xs-4">
														            <p className="number-stat">0{result[0]}</p>
														            <p className="desc-stat" >Uploads</p>
														          </div>
													        </div>
												        <p className="descX">{this.props.userinfo["description"]}</p>
													        <div className="socialX">
													          <img alt="icon" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_facebook-128.png" className="icon mr2"/>
									        		<img alt="icon" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/instagram_online_social_media_photo-128.png" className="icon mr2"/>
									        		<img alt="icon" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/twitter_online_social_media-128.png" className="icon mr2"/>
									        		<img alt="icon" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/linked_in_online_social_media-128.png" className="icon mr2"/>
													        </div>
												      </div>
												      <div className="rightX col-lg-8">
												      		<div className="sub-header">
													        <ul className="navX">
													          <li onClick={this.showUpload}>Upload</li>
													          <li>Posts</li>

													        </ul>
												        
												        </div>
													       {!upload 
													       		?<div className="sub-row gallery">
													       			{displayimage}
													       	    </div>
													       		: <div className="upload-section">
															        <input type="text" name="title" className="upload-input input-styling hovering" placeholder="Title"onChange={this.settitle}/>
															        <input type="file" name="file" className="upload-f "onChange={this.setimage}/>
															       <div>hotels <input type="radio" className="radio" name="option" value="hotel" onChange={this.handleChange} />
															        trips <input type="radio" className="radio" name="option" value="trips" onChange={this.handleChange}/></div>
															        <textarea  name="desc" className="desc-input input-styling hovering" placeholder="Description"onChange={this.setdesc}/>
															        <button  name="submiting" type="button" className="btn hovering pointer" onClick={this.onSubmitSend}> Submit </button>
															       </div>}
												      </div>
											    </div>
										</div>
			 			</div>	
			);
				
	}
}


export default Profile;