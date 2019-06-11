import React from 'react'
import { render } from 'react-dom'
import PhotoGallery from './components/PhotoGallery.jsx'
import { photos } from './data/photos'
import './style.css'

render(<PhotoGallery photos={photos} />, document.querySelector('#root'))