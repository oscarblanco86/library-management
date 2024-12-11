const express = require('express');
const routerApi = require('./routes');
const handler = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 5000;

//MiddleWares
app.use(express.json());

app.get('/api', (req,res) => {
    res.send('Library management API using express')
});

routerApi(app);

app.use(handler.boomHandlerLogError)

app.listen(port, () => console.log(`Server running on port ${port}`));
