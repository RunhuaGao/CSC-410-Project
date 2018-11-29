import React, { Component } from 'react';
import { 
    Nav, 
    NavItem, 
    Navbar,
    NavbarBrand,
    Card, 
    Button, 
    CardTitle, 
    CardText, 
    Row, 
    Col } from 'reactstrap';

class Score extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    var playerName1 = ['Rick', 'Alice'];
    var playerName2 = ['Bob', 'Nancy'];
    var playerScore1 = ['0','0'];
    var playerScore2 = ['0','0'];


    function Occupation1(){
        if (playerName1[0] != null)
            {return 'Occupied'}
        else
            {return 'Availble'}
    }
    function Occupation2(){
        if (playerName2[0] != null)
            {return 'Occupied'}
        else
            {return 'Availble'}
    }


    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
              Site1
          </NavbarBrand>
        </Navbar>
          <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle >{playerName1[0]}</CardTitle>
                  <CardText >{playerScore1[0]}</CardText> 
                  <CardText>{Occupation1()}</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>{playerName1[1]}</CardTitle>
                  <CardText>{playerScore1[1]}</CardText> 
                  <CardText>{Occupation1()}</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
          </Row>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
              Site2
          </NavbarBrand>
        </Navbar>
          <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle >{playerName2[0]}</CardTitle>
                  <CardText>{playerScore2[0]}</CardText> 
                  <CardText>{Occupation2()}</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>{playerName2[1]}</CardTitle>
                  <CardText>{playerScore2[1]}</CardText> 
                  <CardText>{Occupation2()}</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
          </Row>
      </div>
    );
  }
}

export default Score;