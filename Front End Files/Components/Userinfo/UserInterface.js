import React, { Component } from 'react';
import { ShowUser } from "./UserComponent";
import { withRouter} from 'react-router-dom';
import ShowGame from "./ShowGame";
import {Button} from "reactstrap";
var buttonstyle = {
marginLeft:"600px",
marginRight:"auto",
marginTop:"50px",

};
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
                    {console.log(this.props.location.state)}
                    <ShowUser user={this.props.location.state.info}/>
                    <ShowGame username={this.props.location.state.info.fullname} games={this.props.location.state.game} />   
                </div>
                <div style={buttonstyle}>
                <Button outline color="primary" sm={10}  onClick={()=>this.props.history.push('/map/'+this.props.location.state.info.address)} >Find Route</Button>{ ' ' }        
                <Button outline color="primary" sm={10}  onClick={()=>this.props.history.push('/login')} >Log Out</Button>{ ' ' }
                </div>
            </div >
        );
    };
}
export default withRouter(UserInterface);