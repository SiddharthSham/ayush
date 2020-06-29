const server = require('server');
const { get } = server.router;
const helmet = require('helmet')({});
const helmetInstance = server.utils.modern(helmet);

const main = require('./methods.js');

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
server(
  { port: 3000 }, 
  ctx => console.log('Mode:', ctx.options.env),
  api,
  ).catch(err => console.log(err));

console.log("Server started on port 3000!")
console.log('\n')
console.log('Available routes:')
console.log('/convert/data')
console.log('/convert/:system/:author/:metric/:convert_from/:convert_to/:value')
console.log('/convert/systems')
console.log('/convert/:system/authors')
console.log('/convert/:system/:author/metrics')
console.log('/convert/:system/:author/:metric/units')
console.log('/convert/:system/:author/:metric/values')


