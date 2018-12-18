import React, { Component } from 'react';
import {AvForm,AvField} from 'availity-reactstrap-validation';
import { Button } from 'reactstrap';

class Test extends Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(){
        console.log(this.refs.form._inputs.lastname.value)
        this.refs.form.reset()
    }
    render(){
        return(
            <AvForm ref='form'>
                <AvField ref='name' type="text" name="lastname" validate={{
                    required:{value:true,errorMessage:'wrong'},
                    minLength:{value:3,errorMessage:'wrong min'},
                    maxLength:{value:5,errorMessage:'wrong max'},
                }}/>
                <Button onClick={this.handleSubmit}> submit</Button>
            </AvForm>
        );
    }
}
export default Test;