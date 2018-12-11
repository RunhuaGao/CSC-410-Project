import React, { Component } from "react";
import User from "./User"
import { Col, Row ,Container} from "reactstrap";
import background1 from "../images/BackGround.jpg";
var sectionstyle = {
    // backgroundImage:'url(' + background1 + ')',
    align: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
}


// default User info content:
// First Name
// Last Name
// Age
// Gender
// Contest Group
// Address
function ShowInfo(props) {
    return (
        <Col  text-align="center" md="4">
        <p className="text-danger" style={{fontSize:"20"}}>{props.infoname}: {props.value}</p>
        </Col>
    );
}
function ShowUser(props) {

    return (
        <Container className="User info" align="center" style={sectionstyle}>
            <Row width="200px" align="center" md="10">
                <ShowInfo infoname="User Name" value={props.user.fullname}/>
                <ShowInfo infoname="Age" value={props.user.age} />
                <ShowInfo infoname="Gender" value={props.user.gender} />
            </Row>
            <Row md="10">
                <ShowInfo infoname="Contestgroup" value={props.user.contestgroup} />
                <ShowInfo infoname="Address" value={props.user.address} />
            </Row>
        </Container>
    );
}

export { User, ShowUser };
