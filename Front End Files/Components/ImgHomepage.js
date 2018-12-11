import React, { Component } from 'react';
import { 
    Card, 
    CardTitle, 
    CardText, 
    Row, 
    Col,
    CardImg } from 'reactstrap';

class ImgHomepage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
              <img src="https://s3-eu-west-1.amazonaws.com/rb-cms/rbv5/production/uploads/cover_images/1a29e62b3931444eafd87ca02117c4594502/i1080x475.jpg" alt="image" height="360px" />
            </div>

        );
    }
}

export default ImgHomepage;

      