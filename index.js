const path = require('path');
const express = require('express');
const app = express();
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer({changeOrigin: true});
const port = 3000;

app.use(express.static('./public'));

const HomeListingImages = "http://3.101.16.221:3001/";
// const SimilarHomes = "http://13.57.228.197/";
// const MortgageCalculator = "http://13.56.248.150";

// Home Listing Images
app.all("/api/listings/*", function(req, res) {
    console.log(`redirecting to HomeListingImages's server`);
    apiProxy.web(req, res, {target: HomeListingImages, changeOrigin: true});
});

// Similar Homes
// app.all("/api/similarListings", function(req, res) {
//     console.log(`redirecting to SimilarHomes's server`);
//     apiProxy.web(req, res, {target: SimilarHomes, changeOrigin: true});
// });
// app.all("/api/nearbyListings", function(req, res) {
//     console.log(`redirecting to SimilarHomes's server`);
//     apiProxy.web(req, res, {target: SimilarHomes, changeOrigin: true});
// });

// Mortgage Calculator
// app.all("/api/home1", function(req, res) {
//     console.log(`redirecting to MortgageCalculator's server`);
//     apiProxy.web(req, res, {target: MortgageCalculator, changeOrigin: true});
// });

app.listen(port, () => console.log(`\nlistening at http://localhost:${port}`));
