const Cookies = require('universal-cookie');
const fetch = require('node-fetch');
const { resMsg } = require('../../helper/resMsg');

exports.createCost = async (req, res, next) => {
  const { body: data } = req;
  const cookies = new Cookies(req.headers.cookie);
  const { token } = cookies.cookies;
  try {
    const url = 'http://localhost:4000/v1/cost';
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

exports.updateCost = async (req, res, next) => {
  const { body: data, params } = req;
  const cookies = new Cookies(req.headers.cookie);
  const { token } = cookies.cookies;
  try {
    const url = `http://localhost:4000/v1/cost/${params.costID}`;
    const body = JSON.stringify(data);
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await fetch(url, { method: 'PUT', body, headers });
    const resData = await response.json();
    return resMsg(resData, response.status, res, next);
  } catch (error) {
    return next(error);
  }
};

exports.deleteCost = async (req, res, next) => {
  const cookies = new Cookies(req.headers.cookie);
  const { token } = cookies.cookies;
  const { params } = req;
  try {
    const url = `http://localhost:4000/v1/cost/${params.costID}`;
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

exports.costs = async (req, res, next) => {
    const cookies = new Cookies(req.headers.cookie);
  const { token } = cookies.cookies;
  try {
    const url = 'http://localhost:4000/v1/cost';
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

exports.getOneCost = async (req, res, next) => {
    const cookies = new Cookies(req.headers.cookie);
  const { token } = cookies.cookies;
  const { params } = req;
  try {
    const url = `http://localhost:4000/v1/cost/${params.costID}`;
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
