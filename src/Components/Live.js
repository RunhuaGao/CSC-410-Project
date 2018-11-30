import React, { Component } from 'react';
import { 
    Navbar,
    NavbarBrand,
    Card, 
    Button, 
    CardTitle, 
    CardText, 
    Row, 
    Col } from 'reactstrap';
import fetch from 'cross-fetch';


class Live extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playername1:"",
      playername2:"",
      playerscore1:"",
      playerscore2:""
  }
  global.name = ""
  this.handleChange = this.handleChange.bind(this) ;
}
  

  handleChange(){

    fetch('http://localhost:4000/court',{method:'GET'})
        //body: JSON.stringify(court1), // data can be `string` or {object}!
        //headers:{
        //  'Content-Type': 'application/json'
        //}
      //})

        .then(
            function(response){
                console.log(response)
                return response.json()
            }
        )
        .then(
            data => {console.log(data);

                this.setState({
                    playername1: data.player1,
                    playername2: data.player2,
                    playerscore1: data.score1,
                    playerscore2: data.score2,
                    occupied: data.occupied
                })
            }
        )
        .catch(function(err){
            console.log("Fetch错误:"+err);
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.handleChange(), 3000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    var occupied = this.state.occupied

    function Availability() {
        if (occupied == true)
            {return 'Occupied'}
        else
            {return 'Availble'}
    }


  


    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
              Court1
          </NavbarBrand>
        </Navbar>
          <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle >{this.state.playername1}</CardTitle>
                  <CardText >{this.state.playerscore1}</CardText> 
                  <CardText>{Availability()}</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>{this.state.playername2}</CardTitle>
                  <CardText>{this.state.playerscore2}</CardText> 
                  <CardText>{Availability()}</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
          </Row>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
              Court2
          </NavbarBrand>
        </Navbar>
          <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle >{this.state.playername1}</CardTitle>
                  <CardText>{this.state.playerscore1}</CardText> 
                  <CardText>{Availability()}</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>{this.state.playername2}</CardTitle>
                  <CardText>{this.state.playerscore2}</CardText> 
                  <CardText>{Availability()}</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
          </Row>
      </div>
    );
  }
}

export default Live;