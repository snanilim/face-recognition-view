import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const cookieValue = cookies.get('token');

export const createMaterial = (name, weight, value) => {
  return async (dispatch) => {
    dispatch({ type: 'CLEAR_MESSAGES' });
    try {
      const response = await axios({
        method: 'post',
        url: '/v1/material',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookieValue}`,
        },
        data: JSON.stringify({
          name,
          weight,
          value,
        }),
      });
      // console.log('response', response.data.token.accessToken);
      dispatch({
        type: 'CREATE_MATERIAL_SUCCESS',
        messages: Array.isArray(response.msg) ? response.msg : [response.msg],
      });
      return window.location.reload();
    } catch (error) {
      return dispatch({
        type: 'CREATE_MATERIAL_FAILURE',
        messages: error,
      });
    }
  };
};

export const updateMaterial = (materialId, name, weight, value) => {
  return async (dispatch) => {
    dispatch({ type: 'CLEAR_MESSAGES' });
    try {
      const response = await axios({
        method: 'put',
        url: `/v1/material/${materialId}`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          name,
          weight,
          value,
        }),
      });
      // console.log('response', response.data.token.accessToken);
      dispatch({
        type: 'UPDATE_MATERIAL_SUCCESS',
        messages: Array.isArray(response.msg) ? response.msg : [response.msg],
      });
      return window.location.reload();
    } catch (error) {
      return dispatch({
        type: 'UPDATE_MATERIAL_FAILURE',
        messages: error,
      });
    }
  };
};

export const materials = () => {
  return async (dispatch) => {
    dispatch({ type: 'CLEAR_MESSAGES' });
    try {
      const response = await axios({
        method: 'get',
        url: '/v1/material',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookieValue}`,
        },
      });
      return dispatch({
        type: 'MATERIALS_SUCCESS',
        data: response.data,
      });
    } catch (error) {
      return dispatch({
        type: 'MATERIALS_FAILURE',
        messages: error,
      });
    }
  };
};

export const getOneMaterial = (materialId) => {
  return async (dispatch) => {
    dispatch({ type: 'CLEAR_MESSAGES' });
    try {
      const response = await axios({
        method: 'get',
        url: `/v1/material/${materialId}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookieValue}`,
        },
      });
      return dispatch({
        type: 'ONE_MATERIAL_SUCCESS',
        data: response.data,
      });
    } catch (error) {
      return dispatch({
        type: 'ONE_MATERIAL_FAILURE',
        messages: error,
      });
    }
  };
};

export const deleteMaterial = (materialId) => {
  return async (dispatch) => {
    dispatch({ type: 'CLEAR_MESSAGES' });
    try {
      const response = await axios({
        method: 'delete',
        url: `/v1/material/${materialId}`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      dispatch({
        type: 'DELETE_MATERIAL_SUCCESS',
        data: response.data,
      });
      return window.location.reload();
    } catch (error) {
      return dispatch({
        type: 'DELETE_MATERIAL_FAILURE',
        messages: error,
      });
    }
  };
};

export const toogleDrwer = (value) => {
  return async (dispatch) => {
    return dispatch({
      type: 'TOOGLE_MATERIAL_DRAWER',
      visible: value,
    });
  };
};
