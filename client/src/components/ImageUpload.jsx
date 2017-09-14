import React, { Component } from 'react';


class ImageUpload extends Component {
    constructor () {
        super();
        this.state = {
            file: '',
        }
    }

    render () {
        return (
            <div>
                <form>
                    <input type="file" />
                    <button type="submit">Upload Image</button>
                </form>
            </div>
        )
    }
}

export default ImageUpload;