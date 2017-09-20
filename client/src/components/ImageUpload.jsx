import React, { Component } from 'react';
import superagent from 'superagent';
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';
import axios from 'axios';
import { Jumbotron } from 'react-bootstrap';
import drop from '../assets/drop.svg'



class ImageUpload extends Component {
    constructor () {
        super();
        this.state = {
            uploadedPic: null,
            picFromDb: null,
            picFromDbLoaded: false,
            accept: [],
            reject: [],
        }
    }

    uploadFile = (files, reject) => {
        this.setState({
            accept: files,
            reject: reject,
        });
        const image = files[0]

        const cloudName = 'dnixq4nvb';
        const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload';

        // cloudinary API requires timestamp in milli seconds
        const timestamp = Date.now()/1000;
        const uploadPreset = 'gsolnxvn';

        // prepping the string for the upload
        const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'e-1DajckQfu24NBJcwTcAvNtlYM';
        
        //encrypting the string before sending it to API
        const signature = sha1(paramsStr); 
        const params = {
            'api_key': '862335133837131',
            'timestamp': timestamp,
            'upload_preset': uploadPreset,
            'signature': signature
        }

        let uploadRequest = superagent.post(url)
        uploadRequest.attach('file', image)

        Object.keys(params).forEach((key) => {
            uploadRequest.field(key, params[key])
        })

        uploadRequest.end((err, res) => {
            if (err) {
                console.log(err)
                return
            } else {
                var imgUrl = res.body.secure_url
                this.setState({ uploadedPic: imgUrl })

                // pushing the uploaded url to rails db
                axios.post('/uploads', {
                    upload: {
                        pic: this.state.uploadedPic
                    }
                }).then(res =>{
                    console.log(res.data.data.pic)
                    this.setState({
                        picFromDb: res.data.data.pic,
                        picFromDbLoaded: true,
                    })
                }).catch(err => {
                    console.log(err);
                })
            }
        })
    }


    renderUploadedPic () {
        if(this.state.picFromDbLoaded) {
            return (
                <div>
                    <img className="uploadedImage" src={this.state.picFromDb} alt="Uploaded Pic"/>
                </div>
            ) 
        }
    }

    render () {
        return (
            <div className="container">
                <Jumbotron>
                    <h1>Image Uploads</h1>
                    <img src={drop} />
                </Jumbotron>
                <Dropzone
                accept="image/jpeg, image/png, image/jpg"
                onDrop={(files, reject) => this.uploadFile(files, reject)}>
                {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
                        return this.state.accept.length || this.state.reject.length
                            ? `Accepted ${this.state.accept.length}, rejected ${this.state.reject.length} files`
                            : "Drag a Pic or Click in the box to upload a picture";
                }}
                </Dropzone>
                {this.renderUploadedPic()}
                <aside>
                    <h3>Accepted files</h3>
                    <ul>
                        {
                        this.state.accept.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                        }
                    </ul>
                    <h3>Rejected files</h3>
                    <ul>
                        {
                        this.state.reject.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                        }
                    </ul>
                </aside>
            </div>
        )
    }
}

export default ImageUpload;