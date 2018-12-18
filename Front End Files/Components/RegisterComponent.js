import React, { Component } from 'react';
import User from './Users';
import { withRouter } from 'react-router-dom';
import fetch from'cross-fetch';
import {AvForm,AvField} from 'availity-reactstrap-validation';
import { FormGroup, Input, Col,Label,Row} from 'reactstrap';

// define Register component
class Register extends Component{
    constructor(props){
        super(props)
        this.state = { 
            lastName : null,
            age : 18,
            firstName : null,
            email : null,
            address : null,
            gender : "male",
            group : "a",
            password:null,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    // when the data of input change, the value will be transited to state 

    handleChange(id,event){
        event.preventDefault();
        var value = event.target.value;

        //  handle different events
        switch(id){
            case 1: this.setState({ lastName : value}); break;
            case 2: this.setState({ firstName : value}); break;
            case 3: this.setState({ age : value}); break;            
            case 4: this.setState({ gender : value}); break;
            case 5: this.setState({ address : value}); break;
            case 6: this.setState({ email : value}); break;
            case 7: this.setState({ group : value}); break;
            case 8: this.setState({ password : value}); break;
            default: return null;
       }
    }

    // when click the submit button, it will sent request to server
    submit(){
        // console.log(this.refs.signupform.state.submitted)
        // judge if the input data is valid
        if(JSON.stringify(this.refs.signupform.state.invalidInputs) === "{}"){
            var user = new User(
                this.state.firstName,
                this.state.lastName,
                this.state.email,
                this.state.address,
                this.state.gender,
                this.state.group,
                this.state.age,
                this.state.password
            )
            console.log(user);
            // console.log(this.fpassword.current.value);
            // console.log(this.spassword.current.value);

            // send request
            fetch('http://localhost:3001/player',
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

            // callback function 
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
            .then(response=>response.text())

            // handle the data that server returns
            .then(data=>{
                console.log(data);
                if (data === '1'){
                    alert("successful");
                    // console.log(this.props.history);
                    this.props.history.push('/login')
                    // <NavLink href='/login'> tiaozhuan </NavLink>
                } else{
                    alert("register fail")
                }
            })

            // how to handle error
            .catch(function(err){
                console.log("Cant post:"+err);
                alert("something wrong")
            });

            // reset the form
            this.refs.signupform.reset();
        }else{
            alert('some field is invaild')
        }
    }

    // render is define how the page displays
    render(){
        return (
            <div>
            <FormGroup>
                <img src="https://s3-eu-west-1.amazonaws.com/rb-cms/rbv5/production/uploads/cover_images/1a29e62b3931444eafd87ca02117c4594502/i1080x475.jpg" alt='world champion'
                width="100%" height="50">
                </img> 
            </FormGroup>

            {/* define the form */}
            <AvForm ref='signupform'>
                <FormGroup>
                    <Row>
                        <Col>
                            <img src="https://s3-eu-west-1.amazonaws.com/rb-cms/rbv5/production/uploads/cover_images/1a29e62b3931444eafd87ca02117c4594502/i1080x475.jpg" alt='world champion'
                            width="100%" height="100%" >
                            </img> 
                        </Col>
                        <Col style={{backgroundColor: "#43b3b3",width:"100%"}}>
                        <FormGroup>
                            <Col style={{marginTop:"15px"}} >
                                <Label for="name" >LastName</Label><br></br>
                                <AvField type="text" name='lastname' placeholder="请输入名称"  onChange={this.handleChange.bind(this,1)}
                                validate={{
                                    required:{value:true, errorMessage:'you have to input your lastname'},
                                }}/>
                            </Col>
                            <Col style={{marginTop:"15px"}}>
                                <Label for="name">FirstName</Label><br></br>
                                <AvField type="text" name='firstname' placeholder="请输入名称"  onChange={this.handleChange.bind(this,2)}
                                validate={{
                                    required:{value:true, errorMessage:'you have to input your firstname'},
                                }}/>                            
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col style={{marginTop:"15px"}}>
                                <Label for="name">Password</Label><br></br>
                                <AvField type="password" name='fpassword' placeholder="请输入名称"  onChange={this.handleChange.bind(this,8)}
                                validate={{
                                    required:{value:true, errorMessage:'you have to input your password'},
                                    pattern:{value:'/^.*(?=.{6,20})(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).*$/',errorMessage:'password needs to contain at least one lowcase letter and one uppercase letter and one number'},
                                    minLength:{value:8,errorMessage:'at least 8 chars'},
                                    maxLength:{value:20,errorMessage:'at most 20 chars'},
                                }}/>                            
                            </Col>
                            <Col style={{marginTop:"15px"}}>
                                <Label for="name">Verify Password</Label><br></br>
                                <AvField type="password" name='spassword' placeholder="请输入名称" 
                                validate={{
                                    required:{value:true, errorMessage:'you have to verify your password'},
                                    match:{value:'fpassword',errorMessage:"the password don't match"},
                                }}/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col style={{marginTop:"15px"}}>
                                <Label for="name">Address</Label><br></br>
                                <AvField type="text" name='address' placeholder="请输入名称" onChange={this.handleChange.bind(this,5)}
                                validate={{
                                    required:{value:true,errorMessage:'you need to input your address'},
                                    maxLength:{value:80},
                                }}/>
                            </Col>
                            <Col style={{marginTop:"15px"}}>
                                <Label for="name">Email</Label><br></br>
                                <AvField type="email"  name="email" placeholder="请输入名称" onChange={this.handleChange.bind(this,6)}
                                validate={{required:{value:true,errorMessage:'you need to input email'},
                                email:{value:true,errorMessage:"please input valid email"}}}/>
                            </Col>
                        </FormGroup>
                        <Row style={{marginTop:"15px"}}>
                            <Col >
                                <Label for="name">Gender</Label><br></br>
                                <Input type='select' innerRef={this.gender} defaultValue="male" onChange={this.handleChange.bind(this,4)}>
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                </Input>
                            </Col>
                            <Col>
                                <Label for="name">Group</Label><br></br> 
                                <Input type='select' innerRef={this.group} defaultValue="a" onChange={this.handleChange.bind(this,7)}>
                                    <option value="a">A</option>
                                    <option value="b">B</option>
                                    <option value="c">C</option>
                                    <option value="d">D</option>
                                </Input>
                            </Col>
                            <Col>
                                <Label for="name">Age</Label><br></br>
                                <Input type="number" innerRef={this.age} placeholder="18" size="2" onChange={this.handleChange.bind(this,3)}/>   
                            </Col>
                        </Row>
                        <FormGroup style={{marginTop:"15px",marginLeft:'45%'}}>
                            <button type="button" className="btn btn-info" onClick={this.submit}>Submit</button>
                        </FormGroup>
                            {/* {console.log(this.innerRefs.firstname)} */}
                        </Col>
                    </Row>
                </FormGroup>
            </AvForm>
            </div>
        );
    }
}
export default withRouter(Register); 