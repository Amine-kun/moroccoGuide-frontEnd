import React from 'react';
import './Footer.css';
import 'tachyons';

const Footer = ({changingRoute,isSigned,LoginOff}) => {
	return (
		<div >
				<div className="flex-column" >
				<span className="line">----------------</span>
			        <div className="flex-row" >
			                <div >
			                    <h5 className="footer-text">SURF THROUGH!</h5>
			                    <ul className="table">
			                        <li><p className="footer-text pointer">Hotels</p></li>
			                        <li><p className="footer-text pointer">Trips</p></li>
			                    </ul>
			                </div>

			                <div >
			                    <h5 className="footer-text">ABOUT US</h5>
			                    <ul className="table">
			                        <li><p className="footer-text pointer">Who we are?</p></li>
			                        <li><p className="footer-text pointer">What is this for?</p></li>
			                    </ul>
			                </div>

			        </div>
			        <div className=" cent">
			        	<h5 className="footer-text "> OR </h5>
			        	{!isSigned ?<p className="footer-text log" onClick={()=>changingRoute('login')}> LOG IN! </p> : <p className="footer-text log" onClick={()=>LoginOff()}> SIGN OUT! </p>}
			        </div>
			        <span className="line">----------------</span>
			        <div className="belowfooter">
			        	<p className="footer-text">All right reserved</p>
			        		<div className="social">
			        		<img alt="icon" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/facebook_online_social_media-128.png" className="icon"/>
			        		<img alt="icon" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/instagram_online_social_media-128.png" className="icon"/>
			        		<img alt="icon" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_linked_in-128.png" className="icon"/>
			        		<img alt="icon" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_twitter-128.png" className="icon"/>
			        		</div>

			        </div>
			           <div className="bot-footer">
			                <img alt="logo" className="logo logo1" src="https://cdn-icons-png.flaticon.com/512/2707/2707826.png"/>
			            </div>
		  	  </div>

		</div>	
	);
}


export default Footer;