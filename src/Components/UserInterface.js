import React, { Component } from 'react';
import { ShowUser } from "./UserComponent";
import ShowGame from "./ShowGame";
import {
    Button, Row, Col,
} from "reactstrap";

var navstyle = {
    width: "950px",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "white",
    marginTop:"40px"
}
class UserInterface extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iscollapsed: true
        }
    }

    render() {
        return (
            <div>
                <div >
                    <h3>
                        <font className="Heading text-info" style={{ color: "Blue" }} back>
                            2018    Badminton    Contest
                            User Info Page
                    </font>

                    </h3>
                    {/* <Navbar color="faded" style = {navstyle}>
                        <NavbarBrand href="/" className="mr-auto">User Info</NavbarBrand>
                        <NavItem style={{marginRight:"20px"}}> User Private Info</NavItem>
                        <NavItem >Game History</NavItem>
                    </Navbar> */}
                <ShowUser user={this.props.user}/>
                <ShowGame username={this.props.user.fullname} games={this.props.user.games} />
                <br></br>
            </div>
            <Button outline color="primary" sm={10} style={{ marginTop: "50px" }}>Log Out</Button>{ ' ' }
        <Row >
            <Col sm="12" md={{ size: 6, offset: 3 }} style={{ marginTop: "50px" }}>
                CopyRight@ CNDevelopers in Fall 2018 WebProgramming
               </Col>
        </Row>
            </div >
        );
    };
}
export default UserInterface;
