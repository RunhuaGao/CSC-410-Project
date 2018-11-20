import React, { Component } from 'react';

class Register extends Component{
    constructor(props){
        super(props)
        this.state = { 
            lastName : null,
            middleName : null,
            firstName : null,
            email : null,
            address : null,
            gender : null,
            group : null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id,event){
        var value = event.target.value;
        console.log(id);
        console.log(value);
        switch(id){
            case 1: this.setState({ lastName : value}); console.log(this.state.lastName);break;
            case 2: this.setState({ firstName : value}); console.log(this.state.firstName);break;
            case 3: this.setState({ middleName : value}); console.log(this.state.middleName);break;
            case 4: this.setState({ email : value}); console.log(this.state.email);break;
            case 5: this.setState({ address : value}); console.log(this.state.address);break;
            case 6: this.setState({ gender : value}); console.log(this.state.gender);break;
            case 7: this.setState({ group : value}); console.log(this.state.group);break;
            default:console.log("null");return null;
       }
    }

    render(){
        var lastname = this.state.lastName;
        var middlename = this.state.middleName;
        var firstname = this.state.firstName;
        var email = this.state.email;
        var address = this.state.address;

        return (
            <div>
                <div>
                    <label for="name">LastName</label>
                    <input type="text" key="1" placeholder="请输入名称"  value={lastname}  onChange={this.handleChange.bind(this,1)}/>
                    <label for="name">FirstName</label>
                    <input type="text" placeholder="请输入名称"  value={firstname}  onChange={this.handleChange.bind(this,2)}/>
                    <label for="name">MiddleName</label>
                    <input type="text" placeholder="请输入名称"  value={middlename}  onChange={this.handleChange.bind(this,3)}/>
                </div>
                <div className="form-group">
                    gender: 
                    <select defaultValue="male" onChange={this.handleChange.bind(this,4)}>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                </div>
                <div>
                    <label for="name">Address</label>
                    <input type="text" placeholder="请输入名称"  value={address}  onChange={this.handleChange.bind(this,5)}/>
                    <label for="name">Email</label>
                    <input type="text" placeholder="请输入名称"  value={email}  onChange={this.handleChange.bind(this,6)}/>
                </div>
                <div className="form-group">
                    group: 
                    <select defaultValue="a" onChange={this.handleChange.bind(this,7)}>
                        <option value="a">A</option>
                        <option value="b">B</option>
                        <option value="c">C</option>
                        <option value="d">D</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-info" onClick={this.Submit}>Submit</button>
                </div>
            </div>
        );
    }
}
export default Register;