import React from "react";
import User from "../Users"
const fontcolor = "White";

function ShowInfo(props){
    console.log(props)
    return (
        <div className = {props.infoname} style={{marginTop:"35"}}>
            {/* <font style = {{color:fontcolor}}> */}
                {props.infoname}:{props.value}
            {/* </font> */}
        </div>
    );
}
function ShowUser(props){
    {console.log(props.user)}
    return (
        <div className = "User info" style = {{marginTop:"5px",marginLeft:"440px",marginRight:"440px",backgroundColor:"Blue",width:"500"}} align="center">
        <ShowInfo infoname = "User Name" value={props.user.fullname}/>
        <ShowInfo infoname = "Age" value={props.user.age}/>
        <ShowInfo infoname = "Gender" value={props.user.gender}/>
        <ShowInfo infoname = "contestgroup" value={props.user.group}/>
        <ShowInfo infoname = "Address" value={props.user.address}/>
        </div>
    );
}

export {User,ShowUser};
