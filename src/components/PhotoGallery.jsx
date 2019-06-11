import React from 'react'
import ReactSwipe from 'react-swipe'
import PropTypes from 'prop-types'

export default class PhotoGallery extends React.Component {
    render() {
        return (
            <div>
                <ReactSwipe
                    className='carousel'
                    swipeOptions={{ continuous: true }}
                    childCount={this.props.photos.length}
                    ref={el => (this.reactSwipeEl = el)}
                >
                    {this.props.photos.map((photo, i) => (
                    <div className='item' key={i}>
                        <img src={photo.url} />
                        <p>{photo.caption}</p>
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