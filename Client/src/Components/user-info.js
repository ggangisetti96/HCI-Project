import React from "react";

import Avatar from "../images/avatar.png";
function UserProfile(props) {


return (

<div className="align-center">
  <br/>
<img src={Avatar} className=" rounded-circle " style={{width:"150px"}}
  alt="Avatar" />
  <br></br>
  <br></br>
<div className="flexCol">
  <span><b> User Name : </b>  {props.user.User_First} , {props.user.User_Last} </span> 
  <br></br>
<span><b>Email: </b> {props.user.User_Email}</span> 
<br></br>    
<br></br>  
<button  className="btn btn-block btn-md btn-secondary mx-3"  onClick={props.handleLogout}>Logout </button>  

</div>
</div>
  );
}

export default UserProfile;
