const fetch = require('node-fetch');

const { resMsg } = require('../../helper/resMsg');

exports.upload = async (req, res, next) => {
  const { body: data } = req;
  try {
    const url = 'http://localhost:5000/upload-nid';
    const body = JSON.stringify(data);
    const headers = { 'Content-Type': 'application/json' };
    const response = await fetch(url, { method: 'POST', body, headers });
    const resData = await response.json();
    console.log('resData', resData);
    return resMsg(resData, response.status, res, next);
  } catch (error) {
    console.log('error-----', error);
    return next(error);
  }
};


exports.match = async (req, res, next) => {
  const { body: data } = req;
  try {
    const url = 'http://localhost:5000/face-match';
    const body = JSON.stringify(data);
    const headers = { 'Content-Type': 'application/json' };
    const response = await fetch(url, { method: 'POST', body, headers });
    const resData = await response.json();
    console.log('resData', resData);
    return resMsg(resData, response.status, res, next);
  } catch (error) {
    console.log('error-----', error);
    return next(error);
  }
};
