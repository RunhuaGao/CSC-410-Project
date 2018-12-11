import React, { Component } from 'react';
import  GoogleMapReact from 'google-map-react';
// import Marker from 'google-map-react';
import { withRouter} from 'react-router-dom';
var startplace;
var newplace;
var gameplace;
var destination = 'Robert B. Goergen Athletic Center, Rochester, NY 14611';
const Marker = ({name}) => <div>{name}</div>;
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
    Center(){
        console.log(newplace.j.j)
        this.setState({
            center:{
                lat : newplace.l.l,
                lng : newplace.j.j,
            },
            game:{
                lat : gameplace.l.l,
                lng : gameplace.j.j,
            },
            zoom : 14,
        });
    };
    apiIsLoaded = (map,maps) => {
        startplace = this.props.match.params.address;
        const directionsService = new maps.DirectionsService();
        const directionsDisplay = new maps.DirectionsRenderer();
        directionsService.route({
            origin: startplace,
            destination: destination,
            travelMode: 'DRIVING'
        }, (response, status) => {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
                // console.log(response.routes[0].overview_path, 'Ruta')
                const routePolyline = new window.google.maps.Polyline({
                path: response.routes[0].overview_path
                });
                routePolyline.setMap(map);
                startplace = this.props.match.params.address;
                const newcenter = new window.google.maps.Geocoder();
                const game = new window.google.maps.Geocoder();
                newcenter.geocode({'address':startplace},
                    function(result,status){
                        if(status==='OK'){
                            console.log(result[0]);
                            newplace = result[0].geometry.viewport;
                            console.log(newplace)
                            // this.props.center=result[0].geometry.location;
                        }
                    }
                )
                game.geocode({'address':destination},
                    function(result,status,){
                        if(status==='OK'){
                            console.log(result[0]);
                            gameplace = result[0].geometry.viewport;
                            console.log(gameplace)
                            // this.props.center=result[0].geometry.location;
                        }
                    }
                )
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    render() {
        return (
            // Important! Always set the container height explicitly
            <div>
                <div style={{ height: '80vh', width: '100%' }}>
                    <div>
                        <button type="button" onClick={this.Center.bind(this)}> get router </button>
                    </div>
                    {console.log(this.state)}
                    <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyBgQLnJTKDPzXVEyYSe3oyXTYfulgmtFO0'}} 
                        center={this.state.center} 
                        zoom={this.state.zoom} 
                        yesIWantToUseGoogleMapApiInternals 
                        onGoogleApiLoaded={({ map, maps }) => this.apiIsLoaded(map, maps)}>  
                        <Marker name={startplace} lat={this.state.center.lat}  lng={this.state.center.lng}/> 
                        <Marker name={destination} lat={this.state.game.lat} lng={this.state.game.lng}/>
                    </GoogleMapReact>
                </div>
            </div>
        );
    }
}

export default withRouter(SimpleMap);
