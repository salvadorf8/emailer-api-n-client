var localtunnel = require('localtunnel');

localtunnel(5000, { subdomain: 'salvador772209' }, function(err, tunnel) {
    console.log('LT running url: ', tunnel.url);
    console.log('LT running error: ', err);
});
