const { createRequestHandler } = require("@remix-run/netlify");
const path = require("path");

exports.handler = createRequestHandler({
  build: require(path.resolve(__dirname, "../../build")), // Fix the path here
});
