require("../test/env");
require("../d3.data_grid");

require("util").puts(JSON.stringify({
  "name": "d3.data_grid",
  "version": "0.1.0",
  "description": "Using d3.js for data table displays",
  "keywords": ["dom", "w3c", "visualization"],
  "homepage": "http://vlandham.github.com/d3.data_grid/",
  "author": {"name": "Jim Vallandingham", "url": "http://vallandingham.me"},
  "repository": {"type": "git", "url": "http://github.com/vlandham/d3.data_grid.git"},
  "main": "d3.data_grid.js",
  "dependencies": {
    "jsdom": "0.2.10",
    "d3": "2.8.0"
  },
  "devDependencies": {
    "uglify-js": "1.2.3",
    "coffee-script": "1.2.0",
    "vows": "0.6.x"
  },
  "scripts": {"test": "./node_modules/vows/bin/vows"}
}, null, 2));
