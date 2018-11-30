import React,{Component} from 'react';
import { Switch , Route,Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import LoginIn from './LoginIn';
import Register from './RegisterComponent';
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
                    <Route exact path="/login" component={()=><LoginIn/>} />
                    <Route exact path= "/register" component={()=><Register/>} />
                    <Redirect to="/home" />
                </Switch>
                <footer style={footerstyle}>
                    CopyRight@ CNDevelopers in Fall 2018 WebProgramming
                </footer>
            </div>
        );
    }
}
export default Home;