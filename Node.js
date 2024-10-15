# Create project directory
mkdir simple-node-app
cd simple-node-app

# Initialize Node.js app
npm init -y

# Install Express.js
npm install express --save

# Create app.js
echo "
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World from Node.js App!'));

app.listen(PORT, () => console.log('Server running on port ' + PORT));
" > app.js

