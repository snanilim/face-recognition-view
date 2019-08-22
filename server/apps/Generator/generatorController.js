const Cookies = require('universal-cookie');
const fetch = require('node-fetch');
const { resMsg } = require('../../helper/resMsg');

exports.createGenerator = async (req, res, next) => {
  const { body: data } = req;
  const cookies = new Cookies(req.headers.cookie);
  const { token } = cookies.cookies;
  try {
    const url = 'http://localhost:4000/v1/generator';
    const body = JSON.stringify(data);
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await fetch(url, { method: 'POST', body, headers });
    const resData = await response.json();
    return resMsg(resData, response.status, res, next);
  } catch (error) {
    return next(error);
  }
};

exports.updateGenerator = async (req, res, next) => {
  const cookies = new Cookies(req.headers.cookie);
  const { token } = cookies.cookies;
  const { body: data, params } = req;
  try {
    const url = `http://localhost:4000/v1/generator/${params.generatorID}`;
    const body = JSON.stringify(data);
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await fetch(url, { method: 'PUT', body, headers });
    const resData = await response.json();
    console.log('resData', resData);
    return resMsg(resData, response.status, res, next);
  } catch (error) {
    console.log('error', error);
    return next(error);
  }
};

exports.generators = async (req, res, next) => {
  const cookies = new Cookies(req.headers.cookie);
  const { token } = cookies.cookies;
  try {
    const url = 'http://localhost:4000/v1/generator';
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await fetch(url, { method: 'GET', headers });
    const resData = await response.json();
    return resMsg(resData, response.status, res, next);
  } catch (error) {
    return next(error);
  }
};

exports.getOneGenerator = async (req, res, next) => {
  const cookies = new Cookies(req.headers.cookie);
  const { token } = cookies.cookies;
  const { params } = req;
  console.log('generatorID', params.generatorID);
  try {
    const url = `http://localhost:4000/v1/generator/${params.generatorID}`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await fetch(url, { method: 'GET', headers });
    const resData = await response.json();
    return resMsg(resData, response.status, res, next);
  } catch (error) {
    return next(error);
  }
};

exports.deleteGenerator = async (req, res, next) => {
  const cookies = new Cookies(req.headers.cookie);
  const { token } = cookies.cookies;
  const { params } = req;
  try {
    const url = `http://localhost:4000/v1/generator/${params.generatorID}`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await fetch(url, { method: 'DELETE', headers });
    const resData = await response.json();
    return resMsg(resData, response.status, res, next);
  } catch (error) {
    return next(error);
  }
};
