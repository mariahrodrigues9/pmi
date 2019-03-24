import { Component } from 'react'
import PropTypes from 'prop-types'

class CarouselState extends Component {
  state = {
    slideIndex: 0,
    firstSlide: true,
    lastSlide: this.props.total <= 1
  }

  handleSlidePrev = () => {
    const { slideIndex } = this.state

    if (slideIndex > 0) {
      this.setState((prevState, props) => {
        return {slideIndex: prevState.slideIndex - 1};
      });
    }
  }

  handleSlideNext = () => {
    const { slideIndex } = this.state
    const { total } = this.props
    const slidesToShow = this.props.slidesToShow || 1

    if (slideIndex < (total - slidesToShow)) {
      this.setState((prevState, props) => {
        return {slideIndex: prevState.slideIndex + 1};
      });
    }
  }

  handleAfterSlide = (index) => {
    const { total } = this.props
    const slidesToShow = this.props.slidesToShow || 1

    this.setState({
      slideIndex: index,
      firstSlide: index === 0 ? true : false,
      lastSlide: index === (total - slidesToShow) ? true : false
    });
  }

  getStateAndHelpers() {
    return {
      slideIndex: this.state.slideIndex,
      firstSlide: this.state.firstSlide,
      lastSlide: this.state.lastSlide,
      handleSlidePrev: this.handleSlidePrev,
      handleSlideNext: this.handleSlideNext,
      handleAfterSlide: this.handleAfterSlide,
    }
  }

  render() {
    return this.props.children(this.getStateAndHelpers())
  }
}

CarouselState.propTypes = {
  total: PropTypes.number.isRequired
}

export default CarouselState