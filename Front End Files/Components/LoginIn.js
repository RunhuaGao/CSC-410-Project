import React,{Component} from 'react';
import { withRouter } from 'react-router-dom';
import { Button, FormGroup, Label } from 'reactstrap';
import {AvForm,AvField} from 'availity-reactstrap-validation';

// define the style of form 
var formstyle = {
    width:"400px",
    marginLeft:"auto",
    marginRight:"auto",
};

// define loginin component
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

    // similar with part in register
    handleChange(id,event){
        event.preventDefault();
        var value = event.target.value;
        switch(id){
            case 1: this.setState({ email : value}); break;
            case 2: this.setState({ password : value}); break;
            default: return null;
       }
    }

    // how to handle sumit and send request
    submit(){
        // console.log(JSON.stringify(this.refs.loginform.state.invalidInputs))
        if(JSON.stringify(this.refs.loginform.state.invalidInputs) === "{}"){
            var user = this.state;
            // console.log(user)
            fetch('http://localhost:3001/login',
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
                            // console.log(response)
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
                .then(data=>{
                    // console.log(data)
                    if(data.validation === 1){
                        this.props.history.push('/userinfo',data)
                    }else{
                        alert('Password wrong or email do not exist')
                    }
                })
                .catch(function(err){
                    console.log("Cant post:"+err);
            });
            // console.log(this.state)
            // reset the form
            this.refs.loginform.reset();
        }else{
            alert('some fields are invalid')
        }
    }

    // how to display the form
    render(){
        return (
        <AvForm style={{marginTop:'200px',marginBottom:"auto"}} ref='loginform'>
            <FormGroup style = {formstyle} >
                <Label for="exampleEmail">Email</Label>
                <AvField type="email"  name="email" placeholder="请输入名称" onChange={this.handleChange.bind(this,1)}
                validate={{required:{value:true,errorMessage:'you need to input email'},
                email:{value:true,errorMessage:"please input valid email"}}}/>
            </FormGroup>
            <FormGroup style = {formstyle}>
                <Label for="examplePassword">Password</Label>
                <AvField type="password" name='fpassword' placeholder="请输入名称"  onChange={this.handleChange.bind(this,2)}
                validate={{
                    required:{value:true, errorMessage:'you have to input your password'},
                    pattern:{value:'/^.*(?=.{6,20})(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).*$/',errorMessage:'password needs to contain at least one lowcase letter and one uppercase letter and one number'},
                    minLength:{value:8,errorMessage:'at least 8 chars'},
                    maxLength:{value:20,errorMessage:'at most 20 chars'},
                }}/>             
            </FormGroup>
            <FormGroup style={formstyle}>
                <Button onClick={this.submit} style={formstyle}>
                    <Label>Submit</Label>
                </Button>
            </FormGroup>
        </AvForm>
        );
    }
}
export default withRouter(LoginIn);