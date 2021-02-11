import React, { Component } from 'react';

export default class ImageItem extends Component {
    render() {
        const {
            creatureProp: {
                url,
                title,
                description,
                // keyword,
                // horns
            }
        } = this.props;
        return (
            // <li> <img alt="horned beast" src={this.props.image.url} />{this.props.image.title}</li >
            <li
                className='creature-prop'>
                <img alt='urls' className='creature-url' src={url} />
                <p className='creature-title'>{title}</p>
                <p className='description'>{description}</p>
                {/* <p>{keyword}</p> */}
                {/* <p>{horns}</p> */}
            </li>
        )
    }
}