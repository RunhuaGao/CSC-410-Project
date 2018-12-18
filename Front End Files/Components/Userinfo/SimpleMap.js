import React, { Component } from 'react';
import  GoogleMapReact from 'google-map-react';
// import Marker from 'google-map-react';
import { withRouter} from 'react-router-dom';
import { Button} from 'reactstrap';
var startplace;// define the global variance 
var newplace;
var gameplace;
var destination = 'Robert B. Goergen Athletic Center, Rochester, NY 14611';
const Marker = ({name}) => <div>{name}</div>; // define the component of marker

// define the simplemap component
class SimpleMap extends Component {
    constructor(props){
        super(props)
        this.state={
            center:{
                lat : 40.688484269,
                lng : -74.047238,
            },
            game:{
                lat : 59.95,
                lng : 30.33,
            },
            zoom : 11,
        };
        this.Center=this.Center.bind(this);
    }
    // console.log(newplace.la.j)
    // change the default center to the address center
    Center(){
        this.setState({
            center:{
                lat : newplace.la.l,
                lng : newplace.ea.j,
            },
            game:{
                lat : gameplace.la.l,
                lng : gameplace.ea.j,
            },
            zoom : 14,
        });
    };

    // define the load api process
    apiIsLoaded = (map,maps) => {
        startplace = this.props.match.params.address; // get address information from URL
        const directionsService = new maps.DirectionsService(); // load service of find direction
        const directionsDisplay = new maps.DirectionsRenderer(); // load the service of display direction

        // define the parameters of direction service
        directionsService.route({
            origin: startplace,
            destination: destination,
            travelMode: 'DRIVING' // the transportation way is driving
        }, (response, status) => {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
                // console.log(response.routes[0].overview_path, 'Ruta')

                // define how to display the direction
                const routePolyline = new window.google.maps.Polyline({
                path: response.routes[0].overview_path
                });
                routePolyline.setMap(map);

                // load another service getcode and it can find absolute Geographic location of Latitude and longitude
                const newcenter = new window.google.maps.Geocoder();
                const game = new window.google.maps.Geocoder();
                
                // find the player address Latitude and longitude
                newcenter.geocode({'address':startplace},
                    function(result,status){
                        if(status==='OK'){
                            // console.log(result[0]);
                            newplace = result[0].geometry.viewport;
                            // console.log(newplace)
                            // this.props.center=result[0].geometry.location;
                        }
                    }
                )

                // find game place Latitude and longitude
                game.geocode({'address':destination},
                    function(result,status,){
                        if(status==='OK'){
                            // console.log(result[0]);
                            gameplace = result[0].geometry.viewport;
                            // console.log(gameplace)
                            // this.props.center=result[0].geometry.location;
                        }
                    }
                )
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };

    // define the page
    render() {
        return (
            // Important! Always set the container height explicitly
            <div>
                <div style={{ height: '80vh', width: '80%' }}>
                    <div>
                        <Button style={{marginLeft:"500px",marginRight:"auto"}}outline color="primary" sm={10} onClick={this.Center.bind(this)}> get router </Button>
                    </div>
                    
                    {/* load google map api and set default parameter */}
                    <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyBgQLnJTKDPzXVEyYSe3oyXTYfulgmtFO0'}} 
                        center={this.state.center} 
                        zoom={this.state.zoom} 
                        yesIWantToUseGoogleMapApiInternals 
                        onGoogleApiLoaded={({ map, maps }) => this.apiIsLoaded(map, maps)}>  
                        <Marker name={startplace} lat={this.state.center.lat}  lng={this.state.center.lng}/> 
                        <Marker name={destination} lat={this.state.game.lat} lng={this.state.game.lng}/>
                    </GoogleMapReact>
                    <Button style={{marginLeft:"500px",marginRight:"auto"}} outline color="primary" sm={10}  onClick={()=>this.props.history.push('/login')} >Log Out</Button>{ ' ' }
                </div>
            </div>
        );
    }
}

export default withRouter(SimpleMap);
