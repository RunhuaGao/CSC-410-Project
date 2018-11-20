import React,{Component} from 'react';
import {ShowUser} from "./UserComponent";
import ShowGame from "./ShowGame";
var backgroundimgurl = "https://s3-eu-west-1.amazonaws.com/rb-cms/rbv5/production/uploads/cover_images/1a29e62b3931444eafd87ca02117c4594502/i1080x475.jpg";
class UserInterface extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <img src={backgroundimgurl} alt="background image" width="400px" align="center"/>
                <h3 >
                    <font style={{color:"Blue"}} back>
                        2018    Badminton    Contest
                        User Info Page
                    </font>
                 </h3>
                <ShowUser user = {this.props.user}/>
                <ShowGame username = {this.props.user.fullname} games = {this.props.user.games}/>
                <br></br>
                <footer>
                    CopyRight@ CNDevelopers in Fall 2018 WebProgramming
                </footer>
            </div>
            
        );
    };         
}
export default UserInterface;
