import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as ImageGalleryActions from '../redux/actions/index';
import GalleryImage from './GalleryImage';
import GalleryThumbs from './GalleryThumbs';

export class Gallery extends Component {
  componentDidMount() {
    this.props.loadImages();
  }

  render() {
    const {images, selectedImage, selectImage} = this.props;
    return (
      <div className="image-gallery" hidden={!selectedImage}>
        <GalleryImage image={selectedImage} />
        <GalleryThumbs selectImage={selectImage} images={images} />
      </div>
    )
  }
}
//function này làm nhiệm vụ trả về object là substate của global state cái mà component cần.
function mapStateToProps(state) {
  console.log('get date first')
  return {
    images: state.images,
    selectedImage: state.selectedImage
  }
}

function mapActionCreatorsToProps(dispatch) {
  console.log(123)
  return bindActionCreators(ImageGalleryActions, dispatch);
}

// function connect là helper của redux nhận Gallery để truy xuất store
// export default connect(mapStateToProps, mapActionCreatorsToProps)(Gallery)

export default connect(
  state => ({images: state.images, selectedImage: state.selectedImage}),
  dispatch => bindActionCreators(ImageGalleryActions, dispatch)
)(Gallery)
