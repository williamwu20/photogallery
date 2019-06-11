import React from 'react'
import ReactSwipe from 'react-swipe'
import PropTypes from 'prop-types'

export default class PhotoGallery extends React.Component {
    state = {
        photos: []
    }
    reactSwipeEl;
    componentDidMount() {
        this.setState({photos: this.props.photos})
    }
    render() {
        return (
            <div>
                <ReactSwipe
                    className='carousel'
                    swipeOptions={{ continuous: true }}
                    childCount={this.state.photos.length}
                    ref={el => (this.reactSwipeEl = el)}
                >
                    {this.state.photos.map(photo => (
                    <div className='item'> 
                        <img src={photo.url} />
                        <div className='caption'>
                            <p>{photo.caption}</p>
                        </div>
                    </div>))}
                </ReactSwipe>
                <div className='controls'>
                    <button onClick={() => this.reactSwipeEl.prev()}>Previous</button>
                    <button onClick={() => this.reactSwipeEl.next()}>Next</button>
                </div>
            </div>
        )
    }
}