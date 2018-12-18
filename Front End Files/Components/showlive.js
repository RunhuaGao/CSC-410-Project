import React, { Component } from 'react';
import { 
    Navbar,
    NavbarBrand,
    Card, 
    CardTitle, 
    CardText, 
    Row, 
    Col } from 'reactstrap';
import fetch from 'cross-fetch';


function CourtInfo(props){
    console.log(props.info)
    if(props.info.occupied === false){
        return("")
    }
    return(
        <Row>
            <Col sm="6">
                <Card body>
                    <CardTitle >{props.info.player1}</CardTitle>
                    <CardText >{props.info.score1}</CardText> 
                </Card>
            </Col>
            <Col sm="6">
                <Card body>
                    <CardTitle >{props.info.player2}</CardTitle>
                    <CardText >{props.info.score2}</CardText> 
                </Card>
            </Col>
        </Row>
    )
}

  
class Lives extends Component{
    constructor(props){
        super(props)
        this.state = {
            court1:null,
            court2:null,
            court3:null,
            occupied1:false,
            occupied2:false,
            occupied3:false,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){
        fetch('http://localhost:3001/court?id=4',{method:'GET'})
    
            .then(
                function(response){
                    console.log(response)
                    return response.json()
                }
            )
            .then(
                data => {
                    // console.log(data)
                    this.setState({
                        court1 : data.court1,
                        occupied1 : data.court1.occupied,
                        court2 : data.court2,
                        occupied2 : data.court2.occupied,
                        court3 : data.court3,
                        occupied3 : data.court3.occupied,
                    })
                }
            )
            .catch(function(err){
                console.log("Fetch错误:"+err);
        });
      }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    componentWillMount() {
        // console.log("1");
        this.interval = setInterval(() => this.handleChange(), 3000);
    }
  
    Availability(key) {
        if (key === true)
            {return 'Occupied'}
        else
            {return 'Availble'}
    }

    render() {
        console.log(this.state.court1)
        return (
            <div>
                <Navbar color="light" light expand="md">
                <NavbarBrand>
                    Court1 {this.Availability(this.state.occupied1)}
                </NavbarBrand>
                </Navbar>
                    <CourtInfo info = {this.state.court1} />
                <Navbar color="light" light expand="md">
                <NavbarBrand>
                    Court2 {this.Availability(this.state.occupied2)}
                </NavbarBrand>
                </Navbar>
                    <CourtInfo info = {this.state.court2} />
                <Navbar color="light" light expand="md">
                <NavbarBrand>
                    Court3 {this.Availability(this.state.occupied3)}
                </NavbarBrand>
                </Navbar>
                    <CourtInfo info = {this.state.court3} />
            </div>
        );
    }
}

export default Lives;