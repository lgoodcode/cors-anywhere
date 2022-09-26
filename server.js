import corsProxy from 'cors-anywhere'

const PORT = process.env.port || 8000
const HOST = process.env.RENDER_EXTERNAL_URL || process.env.host || 'localhost'

corsProxy.createServer({
  // Allow all origins
  originWhitelist: [], 
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(PORT, () => console.log('Running CORS Anywhere on ' + HOST + ':' + PORT))