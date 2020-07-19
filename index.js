const path = require('path');
const express  = require('express');
const app      = express();
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer({changeOrigin: true});
const port = 3000;
app.use(express.static('./public'));

const justin = "http://13.57.228.197/";
const sam = "http://13.52.76.182/";
const matty = "https://trulia-matthew.herokuapp.com/";
const kim = "http://13.56.248.150";

//Justin
app.all("/api/similarListings", function(req, res) {
    console.log(`redirecting to justin's server`);
    apiProxy.web(req, res, {target: justin, changeOrigin: true});
});
app.all("/api/nearbyListings", function(req, res) {
    console.log(`redirecting to justin's server`);
    apiProxy.web(req, res, {target: justin, changeOrigin: true});
});

// //Sam
app.all("/api/listings", function(req, res) {
    console.log(`redirecting to sam's server`);
    apiProxy.web(req, res, {target: sam, changeOrigin: true});
});

//Matt
app.all("/reviews", function(req, res) {
    console.log(`redirecting to matt's server`);
    apiProxy.web(req, res, {target: matty, changeOrigin: true});
});
app.all("/features", function(req, res) {
    console.log(`redirecting to matt's server`);
    apiProxy.web(req, res, {target: matty, changeOrigin: true});
});

//Kim
app.all("/api/home1", function(req, res) {
    console.log(`redirecting to kim's server`);
    apiProxy.web(req, res, {target: kim, changeOrigin: true});
});

app.listen(port, () => console.log(`\nlistening at http://localhost:${port}`));

//app.all = attaches to the application's router, so it's used whenever the app.router middleware is reached (which handles all the method routes... GET, POST, etc)