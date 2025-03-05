// The address if this server connected to the network is: 
// URL -> http://localhost:9999
// IP -> 127.0.0.1:9999

import express  from 'express';
const app = express();

const PORT = 9999

app.listen(PORT, () => console.log('plgged in'));
