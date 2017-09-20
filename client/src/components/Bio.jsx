import React, { Component } from 'react';
import Lightbox from 'react-images';
import axios from 'axios';
import { Jumbotron } from 'react-bootstrap';


class Bio extends Component {
    constructor () {
        super();
        this.state = {
            pictures: '',
            lightBoxImage: '',
            picturesLoaded: false,
            lightboxIsOpen: false,
            currentImage: 0,
        }
    }


    // SOURCE: https://github.com/jossmac/react-images
    openLightbox = (index, event) => {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
	}
	closeLightbox = () => {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}
	gotoPrevious = () => {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}
	gotoNext = () => {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}
	gotoImage = (index) => {
		this.setState({
			currentImage: index,
		});
	}
	handleClickImage = () => {
		if (this.state.currentImage === this.state.pictures.length - 1) return;

		this.gotoNext();
	}

    componentDidMount() {
        axios('/uploads', {
          method: 'GET',
        }).then(res => {
            let imageSet = res.data.pics.map(p => {
                return {
                    src: p.pic,
                    srcset: [p.pic],
                    caption: 'Photo By Wiley Inc™'
                }
            })
            this.setState({
              pictures: res.data.pics,
              lightBoxImage: imageSet,
              picturesLoaded: true
            })
        }).catch(err => {
            console.log(err);
        })
    }

    renderPics () {
        if (this.state.picturesLoaded) {
            const gallery = this.state.pictures.map((obj, i) => {
                return (
                    <div key={i} className="col-lg-3 col-sm-4 col-xs-6">
                    <a
                        href={obj.pic}
                        key={i}
                        onClick={(e) => this.openLightbox(i, e)}
                    >
                        <img className="thumbnail img-responsive" src={obj.pic} alt="" />
                    </a>
                    </div>
                );
            });

            return (
                <div className="container">
                    <div className="row">
                        {gallery}
                    </div>
                </div>
            );
        }
    }


    render () {
        return (
            <div className="container">
                <Jumbotron>
                    <h1>Gallery</h1>
                </Jumbotron>
                <div className="container">
                    <div className="row">
                            {this.renderPics()}
                            <Lightbox
                                currentImage={this.state.currentImage}
                                images={this.state.lightBoxImage}
                                isOpen={this.state.lightboxIsOpen}
                                onClickImage={this.handleClickImage}
                                onClickNext={this.gotoNext}
                                onClickPrev={this.gotoPrevious}
                                onClose={this.closeLightbox}
                            />
                            <hr />
                        <hr />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Bio;