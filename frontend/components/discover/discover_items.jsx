import React from 'react';
import ReactModal from 'react-modal';

export default class DiscoverItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let imgSrc = this.props.user.profile_url;
    if (this.props.user.profile_picture) {
      imgSrc = this.props.user.profile_picture.photo_url;
    }
    return (
      <div className="gallery-item" style={{
      width: `${this.props.photo.width * 360 / this.props.photo.height}px`,
      flexGrow: `${this.props.photo.width * 360 / this.props.photo.height}`
  }}>
        <img className="gallery-img" onClick={() => this.props.openModalShow(this.props.photo.id)} src={`${this.props.photo.img_url}`}/>
      </div>
    );
  }
}
