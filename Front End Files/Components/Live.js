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


class Live extends Component {
    constructor(props) {
      super(props)
      this.state = {
        court1name1:null,
        court1name2:null,
        court1score1:null,
        court1score2:null,
        court2name1:null,
        court2name2:null,
        court2score1:null,
        court2score2:null,
        court3name1:null,
        court3name2:null,
        court3score1:null,
        court3score2:null,
    }
    global.name = ""
    this.handleChange = this.handleChange.bind(this) ;
  }
  
// define what to do after get response from server
  handleChange(){
// send request to server
    fetch('http://localhost:3001/court?id=4',{method:'GET'})

        .then(
            function(response){
                console.log(response)
                return response.json()
            }
        )
        // change the state as response
        .then(
            data => {console.log(data);

                this.setState({
                    court1name1: data.court1.player1,
                    court1name2: data.court1.player2,
                    court1score1: data.court1.score1,
                    court1score2: data.court1.score2,
                    court1occupied: data.court1.occupied,
                    court2name1: data.court2.player1,
                    court2name2: data.court2.player2,
                    court2score1: data.court2.score1,
                    court2score2: data.court2.score2,
                    court2occupied: data.court2.occupied,
                    court3name1: data.court3.player1,
                    court3name2: data.court3.player2,
                    court3score1: data.court3.score1,
                    court3score2: data.court3.score2,
                    court3occupied: data.court3.occupied
                })
            }
        )
        .catch(function(err){
            console.log("Fetch错误:"+err);
    });
  }

  // define every 3 second to send a request to server
  componentDidMount() {
    this.interval = setInterval(() => this.handleChange(), 3000);
  }

  // after 3000s, clear the storage
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // how to display the page
  render() {
    var occupied1 = this.state.court1occupied
    var occupied2 = this.state.court2occupied
    var occupied3 = this.state.court3occupied

  // judge whether the court is available
    function Availability1() {
        if (occupied1 === true)
            {return 'Occupied'}
        else
            {return 'Availble'}
    }

    function Availability2() {
      if (occupied2 === true)
          {return 'Occupied'}
      else
          {return 'Availble'}
  }
    function Availability3() {
      if (occupied3 === true)
          {return 'Occupied'}
      else
          {return 'Availble'}
  }
  

  // define the display form
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
              Court1 {Availability1()}
          </NavbarBrand>
        </Navbar>
          <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle >{occupied1 ? this.state.court1name1:null}</CardTitle>
                  <CardText >{occupied1 ? this.state.court1score1:null}</CardText> 
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>{occupied1 ? this.state.court1name2:null}</CardTitle>
                  <CardText>{occupied1 ? this.state.court1score2:null}</CardText> 
                </Card>
              </Col>
          </Row>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
              Court2 {Availability2()}
          </NavbarBrand>
        </Navbar>
          <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle >{occupied2 ? this.state.court2name1:null}</CardTitle>
                  <CardText>{occupied2 ? this.state.court2score1:null}</CardText> 
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>{occupied2 ? this.state.court2name2:null}</CardTitle>
                  <CardText>{occupied2 ? this.state.court2score2:null}</CardText> 
                </Card>
              </Col>
          </Row>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
              Court3 {Availability3()}
          </NavbarBrand>
        </Navbar>
          <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle> {occupied3 ? this.state.court3name1:null}</CardTitle>
                  <CardText>{occupied3 ? this.state.court3score1:null}</CardText> 
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>{occupied3 ? this.state.court3name2:null}</CardTitle>
                  <CardText>{occupied3 ? this.state.court3score2:null}</CardText> 
                </Card>
              </Col>
          </Row>
      </div>
    );
  }
}

export default Live;