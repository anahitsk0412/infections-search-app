const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',  // Allow only this origin
  methods: 'GET,POST,PUT,DELETE',   // Allow specific HTTP methods
  allowedHeaders: 'Content-Type,Authorization'  // Allow specific headers
}));

// Configure the proxy middleware
app.use('/api', createProxyMiddleware({
  target: `${process.env.BACKEND_URL}`,
  changeOrigin: true,
  pathRewrite: {
    '^/api': '',
  },
  onProxyReq: (proxyReq, req, res) => {
    console.log('Proxying request:', req.method, req.url);
  }
}));

// Start the server
const PORT = 5050;
app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});

