import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login, UserSignup, Delete, Account, UserProfile, ResSignup, ResHome, UserHome, Verification, AddProduct, DetailRes, MyAccount } from '../../Containers'

function BasicExample() {

  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/account" component={Account} />
      <Route path="/user-signup" component={UserSignup} />
      <Route path="/resturant-signup" component={ResSignup} />
      <Route path="/resturant-home" component={ResHome} />
      <Route path="/user-home" component={UserHome} />
      <Route path="/verify-email" component={Verification} />
      <Route path="/add" component={AddProduct} />
      <Route path="/delete" component={Delete} />
      <Route path="/profile" component={MyAccount} />
      <Route path="/resturant-detail" component={DetailRes} />
      <Route path="/user-profile" component={UserProfile} />
    </Router>
  );

  
}
export default BasicExample