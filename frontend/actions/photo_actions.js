import * as PhotoApiUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";
export const RECEIVE_UPLOAD_ERRORS = 'RECEIVE_UPLOAD_ERRORS';
export const RECEIVE_NO_ERRORS = 'RECEIVE_NO_ERRORS';
export const LIKE_PHOTO = 'LIKE_PHOTO';
export const UNLIKE_PHOTO = 'UNLIKE_PHOTO';
export const COMMENT_PHOTO = 'COMMENT_PHOTO';
export const UNCOMMENT_PHOTO = 'UNCOMMENT_PHOTO';
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_COMMENTS';



export const fetchPhotos = () => dispatch => (
  PhotoApiUtil.fetchPhotos().then(payload => dispatch(receiveAllPhotos(payload)))
);

export const fetchPhoto = id => dispatch => (
  PhotoApiUtil.fetchPhoto(id).then(photo => dispatch(receivePhoto(photo)))
);

export const fetchComments = photoId => dispatch => (
  PhotoApiUtil.fetchComments(photoId).then(payload => dispatch(receiveAllComments(payload)))
)

export const receiveAllComments = payload => {
  return {
    type: RECEIVE_ALL_COMMENTS,
    payload
  }
};

export const createComment = comment => {
  return dispatch => {
    return PhotoApiUtil.createComment(comment).then(comment => {
      return dispatch(receiveComment(comment));
    }, errors => {
      return dispatch(receiveErrors(errors.responseJSON));
    });
  };
};

export const receiveComment = comment => {
    return {
    type: COMMENT_PHOTO,
    comment
  }
};

export const deleteComment = comment => {
  return dispatch => {
    return PhotoApiUtil.deleteComment(comment).then(data =>
      dispatch(ReceiveDeleteComment(data)));
  };
};

const ReceiveDeleteComment = comment => {
  return {
    type: UNCOMMENT_PHOTO,
    comment
  }
};

export const createPhoto = photo => {
  return dispatch => {
    return PhotoApiUtil.createPhoto(photo).then(photo => {
      return dispatch(receivePhoto(photo));
    }, errors => {
      return dispatch(receiveErrors(errors.responseJSON));
    });
  };
};


export const updatePhoto = photo => {
  return dispatch => {
    return PhotoApiUtil.updatePhoto(photo).then(photo => {
      return dispatch(receivePhoto(photo));
    }
    // , errors => {
    //   return dispatch(receiveErrors(errors.responseJSON));
    // }
  );
  };
};

export const unlikePhoto = id => dispatch => (
  PhotoApiUtil.unlikePhoto(id).then(data =>
    dispatch(ReceiveUnlikePhoto(data)))
);

const ReceiveUnlikePhoto = like => {
  return {
    type: UNLIKE_PHOTO,
    like
}
};

export const likePhoto = photoId => {
return dispatch => (
  PhotoApiUtil.likePhoto(photoId).then(payload =>
    dispatch(receiveLikePhoto(payload)))
)};

const receiveLikePhoto = like => {
    return {
    type: LIKE_PHOTO,
    like
  }
};

export const deletePhoto = photoId => {
  return dispatch => {
    return PhotoApiUtil.deletePhoto(photoId).then(photo => {
      return dispatch(removePhoto(photoId));
    });
  };
};

export const receiveAllPhotos = payload => ({
  type: RECEIVE_ALL_PHOTOS,
  photos: payload.photos,
  users: payload.users
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const removePhoto = photoId => ({
  type: REMOVE_PHOTO,
  photoId
});

export const receiveNoErrors = () => {
  return {
    type: RECEIVE_NO_ERRORS,
  };
};

function receiveErrors(errors) {
  return {
    type: RECEIVE_UPLOAD_ERRORS,
    errors
  };
}
