import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
var formstyle = {
    width:"400px",
    marginLeft:"auto",
    marginRight:"auto",
};
class LoginIn extends Component{
    constructor(props){
        super(props);
        this.email = React.createRef();
        this.password = React.createRef();
        this.state={
            email:null,
            password:null,
        }
        this.submit=this.submit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(id,event){
        event.preventDefault();
        var value = event.target.value;
        switch(id){
            case 1: this.setState({ email : value}); break;
            case 2: this.setState({ password : value}); break;
            default: return null;
       }
    }

    submit(){
        // var user = new User(
        //     this.state.firstName,
        //     this.state.lastName,
        //     this.state.email,
        //     this.state.address,
        //     this.state.gender,
        //     this.state.group,
        //     this.state.age
        // )
        // console.log(user);
        var user = this.state;
        console.log(this.state.email)
        fetch('http://localhost:3001/user',
        {
            method:'POST',
            body : JSON.stringify(user),
            headers: 
                {
                    // 'Accept': 'application/json',
                    'Content-Type':"application/json",
                    // 'credentials': 'include' 
              　 },
        })
            .then(
                response=>{
                    if(response.ok){
                        console.log(response)
                        return response
                    }else{
                        var err = new Error('错误'+response.status+":"+response.statusText);
                        err.response = response;
                        throw err
                    }
                },
                err => {
                    throw err;
                }
            )
            .then(response=>response.json())
            .then(data=>{console.log(data)})
            .catch(function(err){
                console.log("Cant post:"+err);
        });
        // console.log(this.state)
        this.handleReset();
    }

    handleReset(){
        this.setState({
            email : null,
            password:null,
        });
        this.email.current.value="";
        this.password.current.value="";
    }
    render() {
        return (
        <Form style={{marginTop:'200px',marginBottom:"auto"}}>
            <FormGroup style = {formstyle} >
                <Label for="exampleEmail">Email</Label>
                <Input type="email" innerRef={this.email} id="exampleEmail" onChange={this.handleChange.bind(this,1)} placeholder="email" />
            </FormGroup>
            <FormGroup style = {formstyle}>
                <Label for="examplePassword">Password</Label>
                <Input type="password" innerRef={this.password} id="examplePassword" onChange={this.handleChange.bind(this,2)} placeholder="password" />
            </FormGroup>
            <Button onClick={this.submit}>
                Submit
            </Button>
        </Form>
        );
    }
}
export default LoginIn;