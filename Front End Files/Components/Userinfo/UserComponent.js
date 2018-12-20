import React from "react";
import User from "../Users"

// define the format of userinformation
function ShowInfo(props){
    // console.log(props)
    return (
        <div className = {props.infoname} style={{marginTop:"35"}}>
            {/* <font style = {{color:fontcolor}}> */}
                {props.infoname}:{props.value}
            {/* </font> */}
        </div>
    );
}


// define how to display user information
function ShowUser(props){
    // {console.log(props.user)}
    return (
        <div className = "User info" style = {{marginTop:"5px",width:"100%",backgroundColor:"#43b3b3"}} align="center">
        <ShowInfo infoname = "User Name" value={props.user.fullname}/>
        <ShowInfo infoname = "Age" value={props.user.age}/>
        <ShowInfo infoname = "Gender" value={props.user.gender}/>
        <ShowInfo infoname = "contestgroup" value={props.user.group}/>
        <ShowInfo infoname = "Address" value={props.user.address}/>
        </div>
    );
}

export {User,ShowUser};
