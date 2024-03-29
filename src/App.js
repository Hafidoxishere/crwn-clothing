import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// const hatsPage=()=>
// (
//   <div>
//     <h1>You are at Hats Page</h1>
//   </div>
// )

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth=null;

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=> {
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
           this.setState({
             currentUser:{
               id:snapShot.id,
               ...snapShot.data()
             }
           }, ()=> console.log(this.state))
        });

        console.log(this.state)
      }
        this.setState({currentUser:userAuth});
    });
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route component={HomePage} path='/' exact/>
          <Route component={ShopPage} path='/shop'/>
          <Route component={SignInAndSignUpPage} path='/signin'/>
        </Switch>
      </div>
    );
  }
}

export default App;