/* eslint-disable */
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require("path");

const URL = 'https://62224954666291106a22d82f.mockapi.io/'

const app = express()

app.use(express.static(path.join(__dirname, "..", "build")));

app.use('/api/todo', createProxyMiddleware({target:URL, changeOrigin:true, pathRewrite: {'^/api/todo' : '/todo'} }))

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(8080)