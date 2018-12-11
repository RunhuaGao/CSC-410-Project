import React,{Component} from 'react';
import { Switch , Route,Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import LoginIn from './LoginIn';
import Register from './RegisterComponent';
import Userinterface from './UserInfoPage/UserInterface';
import SimpleMap from './UserInfoPage/SimpleMap';
import Live from "./Live";
var footerstyle = {
    width:"500px",
    marginLeft:"auto", 
    marginRight:"auto",
    marginBottom:"auto",
}
class Home extends Component{
    render(){
        return(
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/login" component={()=><LoginIn history='/login'/>} />
                    <Route exact path= "/register" component={()=><Register/>} />
                    <Route exact path="/userinfo" component={() =><Userinterface/>}/>
                    <Route exact path="/live" component={() =><Live/>}/>
                    <Route path="/map/:address" component={() =><SimpleMap/>}/>
                    <Redirect to="/login" />
                </Switch>
                <footer style={footerstyle}>
                    CopyRight@ CNDevelopers in Fall 2018 WebProgramming
                </footer>
            </div>
        );
    }
}
export default Home;