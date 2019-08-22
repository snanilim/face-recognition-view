import axios from 'axios';
import React from 'react';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';

const cookies = new Cookies();
const cookieValue = cookies.get('token');

export const createUser = (name, email, address, password, role, status, props) => {
  return async (dispatch) => {
    dispatch({ type: 'CLEAR_MESSAGES' });
    try {
      const response = await axios({
        method: 'post',
        url: '/v1/user',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          name,
          email,
          address,
          password,
          role,
          status,
        }),
      });
      // console.log('response', response.data.token.accessToken);
      dispatch({
        type: 'CREATE_USER_SUCCESS',
        messages: Array.isArray(response.msg) ? response.msg : [response.msg],
      });
      return window.location.reload();
    } catch (error) {
      return dispatch({
        type: 'CREATE_USER_FAILURE',
        messages: error,
      });
    }
  };
};


export const updateUser = (userId, name, email, address, role, status) => {
  return async (dispatch) => {
    dispatch({ type: 'CLEAR_MESSAGES' });
    try {
      const response = await axios({
        method: 'put',
        url: `/v1/user/${userId}`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          name,
          email,
          address,
          role,
          status,
        }),
      });
      // console.log('response', response.data.token.accessToken);
      dispatch({
        type: 'UPDATE_USER_SUCCESS',
        messages: Array.isArray(response.msg) ? response.msg : [response.msg],
      });
      return window.location.reload();
    } catch (error) {
      return dispatch({
        type: 'UPDATE_USER_FAILURE',
        messages: error,
      });
    }
  };
};

export const users = () => {
  return async (dispatch) => {
    dispatch({ type: 'CLEAR_MESSAGES' });
    try {
      const response = await axios({
        method: 'get',
        url: '/v1/user',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return dispatch({
        type: 'USERS_SUCCESS',
        data: response.data,
      });
    } catch (error) {
      return dispatch({
        type: 'USERS_FAILURE',
        messages: error,
      });
    }
  };
};

export const getOneUser = (userId) => {
  return async (dispatch) => {
    dispatch({ type: 'CLEAR_MESSAGES' });
    try {
      const response = await axios({
        method: 'get',
        url: `/v1/user/${userId}`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return dispatch({
        type: 'ONE_USER_SUCCESS',
        data: response.data,
      });
    } catch (error) {
      return dispatch({
        type: 'ONE_USER_FAILURE',
        messages: error,
      });
    }
  };
};

export const deleteUser = (userId) => {
  return async (dispatch) => {
    dispatch({ type: 'CLEAR_MESSAGES' });
    try {
      const response = await axios({
        method: 'delete',
        url: `/v1/user/${userId}`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      dispatch({
        type: 'DELETE_USER_SUCCESS',
        data: response.data,
      });
      return window.location.reload();
    } catch (error) {
      return dispatch({
        type: 'DELETE_USER_FAILURE',
        messages: error,
      });
    }
  };
};

export const toogleDrwer = (value) => {
  return async (dispatch) => {
    return dispatch({
      type: 'TOOGLE_DRAWER',
      visible: value,
    });
  };
};
