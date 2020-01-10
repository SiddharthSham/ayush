const server = require('server');
const { get } = server.router;
const main = require('./main.js');

// API endpoints
const api = [
  // return complete data sheet
  get('/convert/data', main.data),

  // return converted value
  get('/convert/:system/:author/:metric/:convert_from/:convert_to/:value', main.convert),

  // return json of available systems
  get('/convert/systems', main.systems),

  // return json of available authors
  get('/convert/:system/authors', main.authors),

  // return json of available metrics
  get('/convert/:system/:author/metrics', main.metrics),

  // return json of available units
  get('/convert/:system/:author/:metric/units', main.units),
  
  // return json of available conversion values
  get('/convert/:system/:author/:metric/values', main.values),
];

// Launch server
server(api);
console.log("Server started!")

