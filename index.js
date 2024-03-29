const express = require('express');
// const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const db = require('./app/models');
const app = express();

const swaggerDoc = require('./swagger.json');
const PORT = process.env.PORT || 8800;
const hostname = process.env.hostname || 'localhost';

app.use(express.json({ type: 'application/json'}));

app.get('/', (req, res) => {
    res.json({message: `API's are working !`});
});

db.sequelizeOptions.sync();

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

require('./app/routes/users.routes')(app);

app.listen(PORT, () =>{
    console.log(`Server is running on ${hostname}:${PORT}`);
});
// app.use(express.json())s

