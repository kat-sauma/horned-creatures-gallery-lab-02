import React from 'react';
import ImageItem from '../MyImageItem/ImageItem.js';

export default class ImageList extends React.Component {
    render() {
        const imageList =
            this.props.creatures.map(
                creature => <ImageItem image={creature} key={creature.description} />
            )
        return (
            <ul>{imageList}</ul>
        )
    }
}