import React,{Component} from 'react';
import {ShowUser} from "./UserComponent";
import { withRouter} from 'react-router-dom';
import { Col,Row} from 'reactstrap';
import ShowGame from "./ShowGame";
import {NavLink} from 'reactstrap';

var backgroundimgurl = "https://s3-eu-west-1.amazonaws.com/rb-cms/rbv5/production/uploads/cover_images/1a29e62b3931444eafd87ca02117c4594502/i1080x475.jpg";
class UserInterface extends Component{

    render(){
        return (
            
            <div>
                <img src={backgroundimgurl} alt="background image" width="100%" height="100px" align="center"/>
                {console.log(this.props.location.state)}
                <h3 >
                    <font style={{color:"Blue"}} back>
                        2018    Badminton    Contest
                        User Info Page
                    </font>
                </h3>
                <Row>
                    <Col>
                        <ShowUser user = {this.props.location.state}/>
                    </Col>
                    <Col>
                        <NavLink href={'/map/'+this.props.location.state.address}>
                            check router
                        </NavLink>
                    </Col>
                </Row>
                {/* <ShowGame username = {this.props.location.state.firstName} games = {this.props.location.state.lastName}/> */}
                <br></br>
            </div>
            
        );
    };         
};
export default withRouter(UserInterface);
