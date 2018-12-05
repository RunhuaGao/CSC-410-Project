import React,{Component} from "react";
import { func } from "prop-types";
import User from "../Users"
import fetch from 'cross-fetch';
const fontcolor = "White";


// default User info content:
// First Name
// Last Name
// Age
// Gender
// Contest Group
// Address
function ShowInfo(props){
    return (
        <p className = {props.infoname} style={{marginTop:"35"}}>
            <font style = {{color:fontcolor}}>
                {props.infoname}:{props.value}
            </font>
        </p>
    );
}
function ShowUser(props){
    return (
        <div className = "User info" style = {{marginTop:"5px",marginLeft:"440px",marginRight:"440px",backgroundColor:"Blue",width:"500"}} align="center">
        <ShowInfo infoname = "User Name" value={props.user.fullname}/>
        <ShowInfo infoname = "Age" value={props.user.age}/>
        <ShowInfo infoname = "Gender" value={props.user.gender}/>
        <ShowInfo infoname = "contestgroup" value={props.user.contestgroup}/>
        <ShowInfo infoname = "Address" value={props.user.address}/>
        </div>
    );
}

export {User,ShowUser};
