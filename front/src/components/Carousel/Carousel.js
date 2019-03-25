import React from 'react'
import PropTypes from 'prop-types'
import NukaCarousel from 'nuka-carousel'

const Carousel = (props) => (
  <NukaCarousel 
    swiping={props.swiping}
    dragging={props.dragging} 
    slideIndex={props.slideIndex}
    slidesToShow={props.slidesToShow} 
    afterSlide={props.afterSlide}
    edgeEasing={'easeCircleOut'}
    renderBottomCenterControls={() => {}}
    renderCenterLeftControls={() => {}}
    renderCenterRightControls={() => {}}
    >
    {props.children}
  </NukaCarousel>
)

Carousel.propTypes = {
  swiping: PropTypes.bool.isRequired,
  dragging: PropTypes.bool.isRequired,
  slideIndex: PropTypes.number.isRequired,
  slidesToShow: PropTypes.number.isRequired,
  afterSlide: PropTypes.func.isRequired
}

Carousel.defaultProps = {
  swiping: true,
  dragging: true,
  slidesToShow: 1,
  afterSlide: () => {}
}

export default Carousel