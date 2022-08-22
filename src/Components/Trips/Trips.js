import React from 'react';
import './Trips.css';
import 'tachyons';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

class Trips extends React.Component {
	constructor(){
		super();
		this.state={
			hideshow: false,
			likes: 0,
		}
	}

	react = () =>{
		this.setState({react: true})
	}
	show= ()=>{
		this.setState({hideshow: true})
	}




	render(){
			const {LikeHandler, GetArticle, article,showArticle, hideArticle} = this.props;
			const namearr = this.props.publicPosts;
			const post = namearr.map(imagename =>(
				<div className="br2 ba dark-gray b--black-10  w-100 w-50-m w-25-l mw5 shadow"  key={imagename["photo"]}>
					  <img src={`http://localhost:3000/images/${imagename["photo"]}`} className="db center w-100 br2 fknimg2 br--top" alt={imagename["photo"]}/>
					  <div className="pa2 ph3-ns pb3-ns bg-white">
					    <div className="dt w-100 mt1 ">
					      <div className="dtc">
					        <h1 className="f5 f4-ns mv0 pointer " onClick={()=>GetArticle(imagename)}>{imagename["title"]}</h1>
					      </div>
					      <div className="dtc tr">
					      </div>
					    </div>
					     <span className="cut">---------</span>
					    <p className="f6 lh-copy measure mt2 mid-gray">
					      {imagename["desc"]}
					    </p>
					    <div className="react-pin">

					    { this.props.isSigned 
					    	? <FormControlLabel
        					control={<Checkbox icon={<FavoriteBorder />} 
                  			checkedIcon={<Favorite />}
         					 name="checkedH" />}    label={imagename["likes"]} className="react"
     							 onClick={() => LikeHandler(imagename)}/>
     						: <p><b>{imagename["likes"]} likes</b></p>
     					}

					    </div>
					  </div>

				</div>))

	if (!showArticle){
	return (
		<div className="card">
			{post}
		</div>	
	   );}
	else if (showArticle) {
		return (
					<div className={ !showArticle ? `hidden` : `shown`}>
						<div className="icons-side">
							<div className="react-pin">

					    { this.props.isSigned 
					    	? <div><p onClick={hideArticle} className="pointer bc">+</p>
					    	<FormControlLabel
        					control={<Checkbox icon={<FavoriteBorder />} 
                  			checkedIcon={<Favorite />}
         					 name="checkedH" />}    label=<b>{article["likes"]}</b> className="react"
     							 onClick={() => LikeHandler(article)}/> </div>
     						: <div className="inner-menu"><p onClick={hideArticle} className="pointer bc">+</p> <p><b>{article["likes"]} likes</b></p>
     						  </div>
     					}

					    </div>						</div>
						<div className="left-side">
							  	<img src={`http://localhost:3000/images/${article["photo"]}`} alt="article" className="article" />
							  	<p className="article-text tit">{article["title"]}</p>
							  	<p className="article-text des">{article["desc"]}</p>
					  	</div>
					  </div>);
	}
	}
}

export default Trips;