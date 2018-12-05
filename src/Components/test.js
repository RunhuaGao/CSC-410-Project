import React, { Component } from 'react';
import fetch from 'cross-fetch';

class Test extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : "world",
            message:"hello ",
            servermessage:""
        }
        global.name = ""
        this.handleChange = this.handleChange.bind(this) ;
    }

    handleChange(name){
        console.log(this.refs.names.value)
        fetch('http://localhost:3001',
        {
            method:'POST',
            body : this.refs.names.value,
            headers: 
                {
                    // 'Access-Control-Allow-Origin,':'*',
                    'Content-Type':"text/plain",
                    // 'credentials': 'include' 
              　 },
        })
            .then(
                function(response){
                    console.log(response)
                    return response.text()
                }
            )
            .then(
                data => {
                    this.setState({
                        name: this.refs.names.value,
                        servermessage:data
                    })
                }
            )
            .catch(function(err){
                console.log("Fetch错误:"+err);
        });
    }
    renderMessage(message){
        return(
            <div>
                {message}
            </div>
        )
    }
    render(){
        return(
            <div>
                <div>{this.state.message} {this.state.name}</div>
                <div>{this.state.message} {this.state.servermessage}</div>
                <div>
                    <label for="chat">Message</label>
                    <input type="text" placeholder="input message" ref="names" maxLength="3"/>
                    <button type="button" className="btn btn-info" value= {this.state.message} onClick={this.handleChange.bind(this)}>Submit</button>
                </div>
            </div>
        );
    }
}
export default Test;