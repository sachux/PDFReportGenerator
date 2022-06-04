import express from  'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './router/generatorRouter.js'

const app = express()
const port = 3000

app.use(bodyParser.json({limit:"20mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"20mb", extended: true}));
app.use(cors());

app.use('/generate', routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})