import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const cookieValue = cookies.get('token');

export const match = (nid_number, img_path, img_name, props) => {
  console.log('call')
    return async (dispatch) => {
      dispatch({ type: 'CLEAR_MESSAGES' });
  
      try {
        const response = await axios({
          method: 'post',
          url: '/v1/face/match',
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify({ nid_number, img_path, img_name }),
        });
        dispatch({
          type: 'MATCH_SUCCESS',
          data: response.data,
          messages: [response.data.message],
        });
      } catch (error) {
        console.log('error', error);
        const { data } = error.response;
        return dispatch({
          type: 'MATCH_FAILURE',
          data: Array.isArray(data.message) ? data.message : [data.message],
        });
      }
    };
};

