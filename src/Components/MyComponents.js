import React,{Component} from 'react';
import {Media} from 'reactstrap';
class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            dishes:[1,2,3]
        }
    }

    render(){
        const menu = this.state.dishes;
        return (
            <div className="container">
                <div className="row">
                <Media list>
                    {menu}
                </Media>
                </div>
            </div>
        );
    }
}

export default Menu