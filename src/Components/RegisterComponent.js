import React, { Component } from 'react';
import User from './Users';
import './RegisterStyle.css';
import fetch from'cross-fetch';
import {Form, FormGroup, Input, Col,Label,Row} from 'reactstrap';


class Register extends Component{
    constructor(props){
        super(props)
        this.lastname = React.createRef();
        this.firstname = React.createRef();
        this.address = React.createRef();
        this.email = React.createRef();
        this.gender = React.createRef();
        this.group = React.createRef();
        this.age = React.createRef();
        this.state = { 
            lastName : null,
            age : 18,
            firstName : null,
            email : null,
            address : null,
            gender : "male",
            group : "a",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(id,event){
        event.preventDefault();
        var value = event.target.value;
        switch(id){
            case 1: this.setState({ lastName : value}); break;
            case 2: this.setState({ firstName : value}); break;
            case 3: this.setState({ age : value}); break;            
            case 4: this.setState({ gender : value}); break;
            case 5: this.setState({ address : value}); break;
            case 6: this.setState({ email : value}); break;
            case 7: this.setState({ group : value}); break;
            default: return null;
       }
    }

    submit(){
        var user = new User(
            this.state.firstName,
            this.state.lastName,
            this.state.email,
            this.state.address,
            this.state.gender,
            this.state.group,
            this.state.age
        )
        // console.log(user);
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
        this.handleReset();
    }

    handleReset(){
        this.setState({
            lastName : null,
            age : 18,
            firstName : null,
            email : null,
            address : null,
            gender : "male",
            group : "a",
        });
        this.lastname.current.value = "";
        this.firstname.current.value = "";
        this.address.current.value = "";
        this.email.current.value = "";
        this.gender.current.value = "male";
        this.group.current.value = "a";
        this.age.current.value = "";
    }

    render(){
        return (
            <Form>
                <FormGroup>
                    <img src="https://s3-eu-west-1.amazonaws.com/rb-cms/rbv5/production/uploads/cover_images/1a29e62b3931444eafd87ca02117c4594502/i1080x475.jpg" alt='world champion'
                    width="100%" height="50">
                    </img> 
                </FormGroup>
                <FormGroup>
                    <Row>
                        <Col>
                            <img src="https://s3-eu-west-1.amazonaws.com/rb-cms/rbv5/production/uploads/cover_images/1a29e62b3931444eafd87ca02117c4594502/i1080x475.jpg" alt='world champion'
                            width="100%" height="100%" >
                            </img> 
                        </Col>
                        <Col style={{backgroundColor: "#43b3b3",width:"100%"}}>
                        <FormGroup>
                                <Col style={{marginTop:"15px"}}>
                                    <Label for="name" >LastName</Label><br></br>
                                    <Input type="text" innerRef={this.lastname} placeholder="请输入名称"  onChange={this.handleChange.bind(this,1)}/>
                                </Col>
                                <Col style={{marginTop:"15px"}}>
                                    <Label for="name">FirstName</Label><br></br>
                                    <Input type="text" innerRef={this.firstname} placeholder="请输入名称"  onChange={this.handleChange.bind(this,2)}/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col style={{marginTop:"15px"}}>
                                    <Label for="name">Address</Label><br></br>
                                    <Input valid type="text" innerRef={this.address} placeholder="请输入名称" onChange={this.handleChange.bind(this,5)}/>
                                </Col>
                                <Col style={{marginTop:"15px"}}>
                                    <Label for="name">Email</Label><br></br>
                                    <Input valid type="text" innerRef={this.email} placeholder="请输入名称" onChange={this.handleChange.bind(this,6)}/>
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
                            <FormGroup style={{marginTop:"15px",marginLeft:"auto"}}>
                                <button type="button" className="btn btn-info" onClick={this.submit}>Submit</button>
                            </FormGroup>
                            {/* {console.log(this.innerRefs.firstname)} */}
                        </Col>
                    </Row>
                </FormGroup>
            </Form>
        );
    }
}
export default Register; 