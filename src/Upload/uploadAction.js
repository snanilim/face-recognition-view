import React from 'react';
import axios from 'axios';

export const upload = (nid_number, img_path, img_name, props) => {
    console.log('call')
    return async (dispatch) => {
      dispatch({ type: 'CLEAR_MESSAGES' });
  
      try {
        const response = await axios({
          method: 'post',
          url: '/v1/face/upload',
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify({ nid_number, img_path, img_name }),
        });
        dispatch({
          type: 'UPLOAD_SUCCESS',
          data: response.data,
          messages: [response.data.message],
        });
      } catch (error) {
        console.log('error', error);
        const { data } = error.response;
        return dispatch({
          type: 'UPLOAD_FAILURE',
          data: Array.isArray(data.message) ? data.message : [data.message],
        });
      }
    };
};