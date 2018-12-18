import React, { Component } from "react";
import {
    Button, Form, FormGroup, Label, Input,
    FormText,
} from "reactstrap";
import axios from "axios"; // axiso library, use it to fetch data from server
var apikey = "AIzaSyDRLD78FxOy42tdPVfLSbpbmBCC_bHmVg4"; // Google cloud translate api key
var basicurl = "https://translation.googleapis.com/language/translate/v2?";// Google cloud translate prefix url 
// RuleComponent class definition
class RuleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResult: "",
            keyword: "",
            targetlanguage: "targetlanguage"
        }
        this.search.bind(this);
    }
    
    // handle input word value change(the text to be translated)
    handleGetInputValue = (event) => {
        this.setState({
            keyword: event.target.value,
        })
    };

    // translate button event handler
    search = (event) => {
        if (this.state.keyword != undefined) {
            axios.get(basicurl + `q=${this.state.keyword}&target=${this.state.targetlanguage}&format=text&&key=${apikey}`)
                .then(res => {
                    var word = res.data.data.translations[0].translatedText;
                    this.setState({ searchResult: word }, () => {
                        console.log(this.state.searchResult);
                    })
                })
                .catch(err => {
                    console.log(err);
                    this.setState({ searchResult: "Something Wrong, please try again." });
                })
        }
    }

    // target language chnage handler
    changelanguage = (event) => {
        this.setState({ targetlanguage: event.target.value }, () => {
            console.log(this.state.targetlanguage);
        })
    }
    
    
    // final return function
    render() {
        return (
            <div style={{backgroundColor:"skyblue"}}>
                <div className="Rule Text" align="left">
                    <title>2018 Badminton Game Rule</title>
                    <h2>2018 Badminton Game Rule</h2>
                    <p>A game must take place with two players(In same Group).</p>
                    <p>The dimensions are 6.1m by 13.4m, The net is situated through the middle of the court and is set at 1.55m.</p>
                    <p>
                        To score a point the shuttlecock must hit within the parameters of the opponents court.
                      <p>If the shuttlecock hits the net or lands out then a point is awarded to your opponent.</p>
                      Players must serve diagonally across the net to their opponent. As points are won then serving stations move from one side to the other. There are no second serves so if your first serve goes out then your opponent wins the point.
                      A serve must be hit underarm and below the servers waist. No overarm serves are allowed.
                    </p>

                    <p>
                        Each game will start with a toss to determine which player will serve first and which side of the court the opponent would like to start from.
                         Once the shuttlecock is ‘live’ then a player may move around the court as they wish. They are permitted to hit the shuttlecock from out of the playing area.
                         If a player touches the net with any part of their body or racket then it is deemed a fault and their opponent receives the point.
                   </p>
                    <p>
                        A fault is also called if a player deliberately distracts their opponent, the shuttlecock is caught in the racket then flung, 
                        the shuttlecock is hit twice or if the player continues to infract with the laws of badminton.
                        Each game is umpired by a referee on a high chair who overlooks the game. There are also line judges who monitor if the shuttlecock lands in or not. 
                        The referee has overriding calls on infringements and faults.
                        Let may be called by the referee if an unforeseen or accidental circumstance arose. These may include the shuttlecock getting stuck in the bet, 
                        server serving out of turn, one player was not ready or a decision which is too close to call.
                    </p>
                    <p>
                        The game has only two rest periods coming the form of a 90 second rest after the first game and a 5 minute rest period after the second game.
                        If the laws are continuously broken by a player then the referee holds the power to dock that player of points with persisting fouls receiving a forfeit of the set or even the match.
                    </p>
                </div>
                <Form align="left" style={{marginTop:"100px"}}>
                    <font><b><i>Translate words into other language</i></b></font>
                    <FormGroup>
                        <Input id="keyword" placeholder="Word" onChange={this.handleGetInputValue} />
                        <select onChange={this.changelanguage} value="Target Language">
                            <option selected disabled value="Target Language">{this.state.targetlanguage}</option>
                            <option value="en">English</option>
                            <option value="zh">中文</option>
                            <option value="es">Spain</option>
                            <option value="fr">France</option>
                        </select>
                        <Button onClick={this.search} color="blue">Translate</Button>
                    </FormGroup>
                    <div>
                        Translate Result: {this.state.searchResult}
                    </div>
                </Form>
            </div>
        );
    }
}
export default RuleComponent;
