import React from 'react'
import { shallow } from 'enzyme'
import PhotoGallery from './PhotoGallery.jsx'
import '../jest.setup'

describe(PhotoGallery, () => {
  const photos = [{url: 'photo_url', caption: 'photo_caption'}]
  describe('props', () => {
    describe('.photos', () => {
      it('takes in an array of photo objects', () => {
        const wrapper = shallow(<PhotoGallery photos={photos} />)
        expect(wrapper.find('img').prop('src')).toEqual(photos[0].url)
        expect(wrapper.find('p').text()).toEqual(photos[0].caption)
      })
    })
  })

  describe('render', () => {
    it('renders previous and next buttons', () => {
      const wrapper = shallow(<PhotoGallery photos={photos} />)
      expect(wrapper.find('.previous').length).toEqual(1)
      expect(wrapper.find('.next').length).toEqual(1)
    })
  })
})
