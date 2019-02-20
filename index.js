const express = require('express');
const app = express()

app.get('/',(req,res) => res.send("ya ttengo hambre x3"))
app.listen(3000, () => console.log('el servidor se ejecuta en http://localhost:3000'))
