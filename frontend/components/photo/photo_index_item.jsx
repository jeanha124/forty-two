import React from 'react';
import { Link } from 'react-router-dom';

class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let imgSrc = this.props.user.profile_url;
    if (this.props.user.profile_picture) {
      imgSrc = this.props.user.profile_picture.photo_url;
    }

    return(

      <li className='index-items'>
        <ul className='index-item-info'>
          <li><Link to={`/profile/${this.props.photo.artist_id}`}>
            <div className="profile-index-container">
              <img className='profile-index' src={imgSrc} />
            </div>
          </Link></li>
          <li>
            <Link to={`/profile/${this.props.photo.artist_id}`}>{this.props.user.name}<br/>
              <p className='time-posted-index'>
                Uploaded {this.props.photo.time_posted} ago
              </p>
            </Link>
          </li>
        </ul>
        <img onClick={() => this.props.openModalShow(this.props.photo.id)} src={`${this.props.photo.img_url}`} />
        <p className='index-item-info2'>
          {this.props.photo.title}
        </p>
      </li>);
  }
}

export default PhotoIndexItem;
