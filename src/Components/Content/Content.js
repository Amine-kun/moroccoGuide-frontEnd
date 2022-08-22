import React, { useState, useEffect } from 'react';
import './Content.css'
import { Carousel } from 'react-carousel-minimal';
import 'react-multi-carousel/lib/styles.css';

const data = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: "San Francisco"
    },
    {
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland"
    },
    {
      image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco"
    },
    {
      image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco"
    },
    {
      image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling"
    }
  ];
const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }


const Content = () => {
		const [mounted, setMounted] = useState(false)
		if(!mounted){
	    	document.body.style.background = 'url(https://images.pexels.com/photos/1036371/pexels-photo-1036371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
  	}
  	useEffect(() =>{
    setMounted(true)
 	 },[])

	return (
		<div className="content-flex" >
			<div className="intro">
				<p className="nav-toggle1 title-name">Morocco</p>
				<p className="nav-toggle landing-text">
						Text is the exact, original words written by an author. 
						Text is also a specific work as written by the original author. 
						Text is also commonly used to refer to a text message or to send a text message. Text has several other senses as a noun.
						Text refers to the actual words written in a book, 
						newspaper, blog post, or any other written work.
						Pictures, charts, and other images are not text.
						When you read something, you are looking at text and using 
						your language skills to get meaning out of it.
						Something that doesn’t contain any text is textless.
				</p>
			</div>
			<div className="slider-parent ">
			<Carousel
            data={data}
            time={4000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            alt="hello"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
              padding:"0 50px 0 50px"
            }}
          />

			</div>
			<div className="adiv-container gap">
									<h3 className="head-title bot">
									Travel With Culture Trip
									</h3>
								<div className="the-child-container  bot">
									<div className="the-grandchild-container ">
										<h4 color="#121416" className="title">
										Multi-day adventures curated by travel experts
										</h4>
										<p color="#121416" className="explaining">
										We know the world's best bits – our award-winning content proves it. Now we’re using that expertise to bring
										 you curated trips that combine thoughtful planning with authentic experiences and hand-picked accommodation.
										</p>
									</div>
										<img  alt="imgtrip" src="https://img.theculturetrip.com/514x406/universal-app/images/trips-hub/banner-asset-1-v2.png" className="imgtrip"/>
								</div >
								<div className="the-child-container-reversed bot">
									<div className="the-grandchild-container-reversed">
											<h4 color="#121416" className="title">
											What’s in it for you?
											</h4>
											<p color="#121416" className="explaining">
											Led by Local Insiders, our trips bring together small groups of culturally curious travellers who embrace 
											the value of shared experiences, cultural immersion and travel that never feels rushed.
											</p>
									</div>
										<img alt="imgtrip" className="imgtrip" src="https://img.theculturetrip.com/514x406/universal-app/images/trips-hub/banner-asset-2-v2.png"/>
								</div >
								<div className="the-child-container " >
									<div className="the-grandchild-container">
											<h4 color="#121416" className="title">
											End-to-end support
											</h4>
											<p color="#121416" className="explaining">
											Whether you need help choosing your adventure, or you’re nervous about travelling solo, or something 
											unexpected happens during your trip, just drop us 
												</p>
									</div>
												<img alt="imgtrip" className="imgtrip" src="https://img.theculturetrip.com/514x406/universal-app/images/trips-hub/banner-asset-3-v2.png"/>
								</div>
			</div>
		</div>
	);
}


export default Content;