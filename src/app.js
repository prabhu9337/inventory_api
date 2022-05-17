const express = require('express');
require('./database/connection');
const productsRouter = require('./routers/productsRouter')
const userRouter = require('./routers/userRouter')

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json())
app.use(productsRouter)
app.use(userRouter)

app.listen(port, () => {
    console.log(`connection is successful with port no ${port}....`);
});