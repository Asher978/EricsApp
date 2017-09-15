import React, { Component } from 'react';
import superagent from 'superagent';
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';
import axios from 'axios';


class ImageUpload extends Component {
    constructor () {
        super();
        this.state = {
            uploadedPic: null,
        }
    }

    uploadFile = (files) => {
        console.log('uploadFile: ')
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
                }).catch(err => {
                    console.log(err);
                })
            }
        })
    }

    render () {
        return (
            <div>
                Images for Uploads
                <Dropzone onDrop={this.uploadFile} />
            </div>
        )
    }
}

export default ImageUpload;