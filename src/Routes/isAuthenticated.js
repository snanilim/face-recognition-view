import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();
export const isAuthenticated = () => {
  const cookieValue = cookies.get('token');
  if (cookieValue) return true;
  return false;
};

export function setAuthTokenToHeader(response) {
  console.log('setAuthTokenToHeader', response);
    if (response) {
        axios.defaults.headers.common.authorization = `Bearer ${response.token.accessToken}`;
        return;
    }
    delete axios.defaults.headers.common.authorization;
}
