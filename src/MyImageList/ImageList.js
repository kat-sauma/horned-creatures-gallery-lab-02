import React, { Component } from 'react';
import ImageItem from '../MyImageItem/ImageItem.js';


export default class ImageList extends Component {
    render() {
        // const { filteredCreatures } = this.props;
        // const imageList =
        //     this.props.creatures.map(
        //         creature => <ImageItem image={creature} key={creature.description} />
        //     )
        return (
            //     <ul>{imageList}</ul>
            <ul className='list'>
                { this.props.creatures.map(creature =>
                    <ImageItem
                        key={creature.url}
                        creatureProp={creature}
                    />)}
            </ul>
        )
    }
}