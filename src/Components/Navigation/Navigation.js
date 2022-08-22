import React, {useState}  from 'react';
import './Navigation.css';
import logout from './logout.png'
import 'tachyons';

const Navigation = ({changingRoute,GetHotelsPosts,isSigned, LoginOff, route,GetHotelsTrips}) => {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = ()=> setSidebar(!sidebar);

	if (!isSigned){
	return (
		<div className="shadow">
					<div className="nav">
						<p className="welcome">Welcome to Morocco</p>
					</div>			
					<div className="container">
							<div className="child-container1">
									<img alt="logo" className="logo pointer" onClick={()=>changingRoute('content')} src="https://cdn-icons-png.flaticon.com/512/2707/2707826.png"/>
									{/*<input id=" Search" className="input" type="search" placeholder="search"/>*/}
							</div>
							<div className={sidebar ? 'hidden-nav actv' : 'hidden-nav'} >
								<p className=" nav-text pointer" onClick={()=>changingRoute('content')}>Home</p>
								<p className=" nav-text pointer"  onClick={()=>GetHotelsPosts()}>Hotels</p>
								<p className=" nav-text pointer" onClick={()=>GetHotelsTrips()}>Places to visit</p>
							</div>

							<div className="nav-toggle drop-down sidemenu">
								<div className={sidebar ? 'hidden-nav actv' : 'hidden-nav'}>
									<img className="pointer icon login-icon" alt="icon" onClick={()=>changingRoute('login')} src="https://cdn3.iconfinder.com/data/icons/ink-basic/35/login-256.png" />
								</div>
									<img className="pointer icon menu" alt="bar" src="https://cdn4.iconfinder.com/data/icons/miscellaneous-001-line-bold/64/menu_option_1-256.png" onClick={showSidebar}/>

							</div>
					</div>
					<div>
							<nav className={sidebar ? 'nav-menu actv' : 'nav-menu'}>
									<ul className="nav-menu-items">
											<p className="pointer barcancel" onClick={showSidebar} >+</p>
										<li className="nav-menu-item"onClick={()=>changingRoute('content')}>
											<p className=" nav-text-exp" >Home</p>
										</li>
										<li className="nav-menu-item"  onClick={()=>GetHotelsPosts()}>
											<p className=" nav-text-exp">Hotel</p>
										</li>
										<li className="nav-menu-item" onClick={()=>GetHotelsTrips()}>
											<p className=" nav-text-exp" >Places to visit</p>
										</li>
										<li className="nav-menu-item" onClick={()=>changingRoute('login')}>
											<p className=" nav-text-exp" >Login</p>
										</li>											
									</ul>
							</nav>
					</div>


		</div>	
	);} else if (isSigned){
		return(
			<div className="shadow">
					<div className="nav">
						<p className="welcome">Welcome to Morocco</p>
					</div>			
					<div className="container">
							<div className="child-container1">
									<img alt="logo" className="logo pointer" onClick={()=>changingRoute('content')}src="https://cdn-icons-png.flaticon.com/512/2707/2707826.png"/>
									{/*<input id=" Search" className="input" type="search" placeholder="search"/>*/}
							</div>
							<div className={sidebar ? 'hidden-nav actv' : 'hidden-nav'} >
								<p className=" nav-text pointer" onClick={()=>changingRoute('content')}>Home</p>
								<p className=" nav-text pointer"  onClick={()=>GetHotelsPosts()}>Hotels</p>
								<p className=" nav-text pointer" onClick={()=>GetHotelsTrips()}>Places to visit</p>
							</div>
							
							{ route ==='hotels' || route ==='content' || route ==='trips' 
								? 						<div className="nav-toggle drop-down sidemenu">
															
															<div className={sidebar ? 'hidden-nav actv' : 'hidden-nav'}>
															<img className="pointer icon profile login-icon" alt="login-icon" onClick={()=>changingRoute('profile')} src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"/>
																<img className="pointer icon login-icon" alt="login-icon" onClick={LoginOff} src={logout}/>
															</div>
																<img className="pointer menu icon" alt="bar" src="https://cdn4.iconfinder.com/data/icons/miscellaneous-001-line-bold/64/menu_option_1-256.png" onClick={showSidebar}/>
							
														</div>
								:
														<div className="nav-toggle drop-down sidemenu">
															<div className={sidebar ? 'hidden-nav actv' : 'hidden-nav'}>
																<img className="pointer icon login-icon" alt="login-icon" onClick={LoginOff} src={logout}/>
															</div>
																<img className="pointer menu icon" alt="bar" src="https://cdn4.iconfinder.com/data/icons/miscellaneous-001-line-bold/64/menu_option_1-256.png" onClick={showSidebar}/>
							
														</div>}
					</div>
					{			route ==='hotels' || route ==='content' || route ==='trips' 			
										?<div>
												<nav className={sidebar ? 'nav-menu actv' : 'nav-menu'}>
														<ul className="nav-menu-items">
																<p className="pointer barcancel" onClick={showSidebar} >+</p>
															<li className="nav-menu-item">
																<p className=" nav-text-exp" onClick={()=>changingRoute('content')}>Home</p>
															</li>
															<li className="nav-menu-item">
																<p className=" nav-text-exp" onClick={()=>GetHotelsPosts()}>Hotel</p>
															</li>
															<li className="nav-menu-item">
																<p className=" nav-text-exp" onClick={()=>GetHotelsTrips()}>Places to visit</p>
															</li>
															<li className="nav-menu-item">
																<p className=" nav-text-exp"  onClick={()=>changingRoute('profile')}>Profile</p>
															</li>
															<li className="nav-menu-item benching">
																<p className=" nav-text-exp "  onClick={LoginOff}>Sign out</p>
															</li>											
														</ul>
												</nav>
										</div>
										: <div>
												<nav className={sidebar ? 'nav-menu actv' : 'nav-menu'}>
														<ul className="nav-menu-items">
																<p className="pointer barcancel" onClick={showSidebar} >+</p>
															<li className="nav-menu-item">
																<p className=" nav-text-exp" onClick={()=>changingRoute('content')}>Home</p>
															</li>
															<li className="nav-menu-item">
																<p className=" nav-text-exp" onClick={()=>GetHotelsPosts()}>Hotel</p>
															</li>
															<li className="nav-menu-item">
																<p className=" nav-text-exp" onClick={()=>GetHotelsTrips()}>Places to visit</p>
															</li>
															<li className="nav-menu-item benching">
																<p className=" nav-text-exp "  onClick={LoginOff}>Sign out</p>
															</li>											
														</ul>
												</nav>
										</div>}


		</div>	
	);}
}


export default Navigation;