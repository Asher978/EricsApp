import React, { Component } from 'react';
import axios from 'axios';


class Bio extends Component {
    constructor () {
        super();
        this.state = {
            pictures: null,
            picturesLoaded: false
        }
    }

    componentDidMount() {
        axios('/uploads', {
          method: 'GET',
        }).then(res => {
            this.setState({
              pictures: res.data.pics,
              picturesLoaded: true
            })
        }).catch(err => {
            console.log(err);
        })
    }

    renderPics () {
        if (this.state.picturesLoaded) {
            return this.state.pictures.map(pic => {
                console.log(pic.pic)
                console.log(pic.pic[0])
                return <img key={pic.id} src={pic.pic} alt={pic.id} />
            })
        } else {
            return <h3>Loading ....</h3>
        }
    }
    

    render () {
        // console.log(this.state.pictures)
        return (
            <div className="bio container">
                <h1>Bio Page</h1>
            </div>
        )
    }
}

export default Bio;