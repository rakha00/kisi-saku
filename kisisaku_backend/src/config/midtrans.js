const midtransClient = require('midtrans-client');

const snap = new midtransClient.Snap({
  isProduction: false, // Set true untuk production
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
});

module.exports = snap;
