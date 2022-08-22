import react, {Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Background from './Components/Background/Background';
import Content from './Components/Content/Content';
import Hotels from './Components/Hotels/Hotels';
import Trips from './Components/Trips/Trips';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Profile from './Components/Profile/Profile';
import UserCredentials from './Components/UserCredentials/UserCredentials';
import Settings from './Components/Settings/Settings';
import Footer from './Components/Footer/Footer';

class App extends Component  {

  constructor() {
    super();
    this.state={
      reaction:false,
      route:'content',
      isSigned: false,
      contents:[],
      userID:'',
      publicPosts:[],
      showArticle:false,
      article:{
        id:'',
        userid:'',
        title:'',
        desc:'',
        photo:'',
        likes:'',
        categorie:''
      },
      userinfo:[{
              userid2:'',
              picture:'',
              bio:'',
              description:'',
              title:'',
              username:''
             }],
      user:{
        id:'',
        name: '',
        email: '',
        password: '',
        date: ''
      }
    }
  }



  //loading users
  loadUser = (data) => {
    this.setState({user :{
      id:data.id ,
      name:data.name ,
      email:data.email ,
      password: data.password ,
      date: data.date
    }})
  }


//inserting current user id
  insertId = (data) =>{
    this.setState({userID: data})
  }


//user info
    userInfo = (data) =>{
      this.setState({userinfo:{
              userid2:data.userid,
              picture:data.picture,
              bio:data.bio,
              description:data.description,
              title:data.title,
              username:data.username,}
       });
      this.setState({userID:data.userid});
      this.setState({profilePicture:[data.picture]});
    }


//user content 
        uploadPhoto = (data) =>{
          this.setState({
            contents:data,
          })
        }

//switching signin/signout
LoginIn = () =>{
  this.setState({isSigned: true})
}
LoginOff = () => {
  this.setState({isSigned: false})
  this.setState({route: 'content'})
}

//handling routing (temporary)
  changingRoute = (route) =>{
    this.setState({route: route})
  }

  onSubmitClick = (changingRoute) =>{
    changingRoute('profile');
  }

//
 hideArticle = ()=>{
  this.setState({showArticle: false });
 }
  //fetching / interacting with the backend

      //fetching user posts when login
        GetUserPost =  (contents) =>{
          const id = this.state.userID;
            fetch(`http://localhost:3001/profile?id=${id}`,{
              method:'get',
            })
            .then(response =>response.json())
            .then( async (data) => {
              await this.setState({contents: data[0]});
               });

          }

        //fetching user info when login (bad practice but it works xd)
        GetUserInfo = () =>{
          const id = this.state.userID;
            fetch(`http://localhost:3001/profileinfo?id=${id}`,{
              method:'get',

            })
            .then(response =>response.json())
            .then(async (data) => {
              await this.setState({userinfo:{
              userid2:data.userid,
              picture:data.picture,
              bio:data.bio,
              description:data.description,
              title:data.title,
              username:data.username,}
                });
              });
          }

        //fetchin public hotels posts 
        GetHotelsPosts =  (route) =>{
              fetch(`http://localhost:3001/hotels`,{
              method:'get',
            })
            .then(response =>response.json())
            .then(async(data) => {
              await this.setState({publicPosts: data[0]});
               this.setState({route: 'hotels'});}
             );

        }
        //fetchin public trips posts 
        GetHotelsTrips = (route) =>{
              fetch(`http://localhost:3001/trips`,{
              method:'get',
            })
            .then(response =>response.json())
            .then(async (data) => {
             await this.setState({publicPosts: data[1]});
               this.setState({route: 'trips'})});
            

        }
        //deleting post
        DeletePost = (imagename) =>{
          const id = this.state.userID;
          console.log(imagename);
            fetch(`http://localhost:3001/profile?id=${id}&imagename=${imagename}`,{
              method:'delete',
            })
            .then(response =>response.json())
            .then(data => 
              this.setState({contents: data}));
          }

        //updating likes
          LikeHandler = async (imagename) => {
            if(!this.state.reaction){
                  await this.setState({reaction:true})
                  await this.setState({likes:imagename["likes"] +1})}
            else if (this.state.reaction){
                await   this.setState({reaction:false})
                  await this.setState({likes:this.state.likes -1})
            }
            fetch('http://localhost:3001/Like',{
                    method:'post',
                    headers:{'Content-Type': 'application/json'},
                    body: JSON.stringify({
                      likes: this.state.likes,
                      UIS: imagename["id"],
                    })
                  })
                  .then(response => response.json())
                  .then(data => {
                    if(this.state.route === 'hotels'){
                    this.setState({publicPosts: data[0]})}
                    else if(this.state.route === 'trips'){
                      this.setState({publicPosts: data[1]})
                    }
                  })
                   
          } 
              //getting article
                  GetArticle = (imagename) =>{
                      const imgid = imagename["id"];
                          fetch(`http://localhost:3001/article?articleid=${imgid}`,{
                            method:'get',

                          })
                          .then(response =>response.json())
                          .then(articledata =>{
                              this.setState({article:{
                                    id:articledata["id"],
                                    userid:articledata["userid"],
                                    title:articledata["title"],
                                    desc:articledata["desc"],
                                    photo:articledata["photo"],
                                    likes:articledata["likes"],
                                    categorie:articledata["categorie"]
                    }}); this.setState({showArticle:true});
                            }
                            );
                        }

 render() {
    const nav=  (<Navigation 
                                    changingRoute={this.changingRoute} 
                                    isSigned={this.state.isSigned} 
                                    LoginOff={this.LoginOff} 
                                    GetHotelsPosts={this.GetHotelsPosts}
                                    GetHotelsTrips={this.GetHotelsTrips}
                                    route={this.state.route}/>);
    const footer=(<Footer 
                                changingRoute={this.changingRoute} 
                                  isSigned={this.state.isSigned} 
                                  LoginOff={this.LoginOff}/>)
  return ( 
    <div className="App"> 

      { this.state.route === 'content'
       ? <div>
            <Background/>
              {nav}
              <Content/>
            {footer}
         </div>
          : ( this.state.route === 'hotels'
              ?<div className="login-blur">
                     {nav}
                      <Hotels 
                                publicPosts={this.state.publicPosts}
                                changingRoute={this.changingRoute}
                                isSigned={this.state.isSigned} 
                                userID={this.state.userID} 
                                LikeHandler={this.LikeHandler}
                                GetArticle={this.GetArticle}
                                article={this.state.article}
                                showArticle={this.state.showArticle}
                                hideArticle={this.hideArticle}/>
                    {footer}             
               </div>
              : ( this.state.route ==='login'
                ?<div className="login-blur">
                   <Login 
                          changingRoute={this.changingRoute} 
                          userID={this.state.userID} 
                          insertId={this.insertId}
                          loadUser={this.loadUser} 
                          GetUserPost ={this.GetUserPost} 
                          onSubmitClick={this.onSubmitClick} 
                          route={this.state.route}
                          GetUserInfo={this.GetUserInfo}
                          LoginIn={this.LoginIn}/>

                </div>
                : ( this.state.route === 'profile'
                  ? <div className="login-blur">
                      {nav}
                      <Profile 
                          uploadPhoto={this.uploadPhoto} 
                          userID={this.state.userID} 
                          contents={this.state.contents}
                          userinfo={this.state.userinfo}
                          changingRoute={this.changingRoute}
                          DeletePost={this.DeletePost}/>
                      {footer}
                    </div>
                  : ( this.state.route === 'register'
                    ? <div className="login-blur">
                        <Register 
                                  loadUser={this.loadUser} 
                                  changingRoute={this.changingRoute}/>
                    </div>
                    
                    : ( this.state.route === 'usercredentials'
                      ? <div className="login-blur">
                        <UserCredentials 
                                        changingRoute={this.changingRoute} 
                                        isSigned={this.state.isSigned} 
                                        user={this.state.user} 
                                        userInfo={this.userInfo}
                                        LoginIn={this.LoginIn}/>
                        </div>
                      : ( this.state.route === 'trips'
                            ?<div className="login-blur">
                                  {nav}
                                  <Trips 
                                            publicPosts={this.state.publicPosts}
                                            changingRoute={this.changingRoute}
                                            isSigned={this.state.isSigned} 
                                            userID={this.state.userID} 
                                            LikeHandler={this.LikeHandler}
                                            article={this.state.article}
                                            GetArticle={this.GetArticle}
                                            showArticle={this.state.showArticle}
                                            hideArticle={this.hideArticle}/>
                                  {footer}
                             </div>
                        : <div>
                            <Background/>
                              {nav}
                              <Settings 
                                          changingRoute={this.changingRoute} 
                                          userID={this.state.userID} 
                                          userInfo={this.userInfo} 
                                          userinfo={this.state.userinfo} />
                               {footer}
                          </div>
                    ))))))
        }
    </div>
  );
}
}




export default App;
