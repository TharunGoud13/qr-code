"use strict";

// netlify/functions/server.js
var { createRequestHandler } = require("@remix-run/netlify"), path = require("path");
exports.handler = createRequestHandler({
  build: require(path.resolve(__dirname, "../../build"))
  // Fix the path here
});
