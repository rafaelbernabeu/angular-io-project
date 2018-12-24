
const proxy = [
  {
    context: '/',
    target: 'http://localhost:8080',
    secure: false,
    //pathRewrite: {'^/v1' : ''}
  }
];
module.exports = proxy;