import express, {Express} from 'express';
import * as bodyParser from 'body-parser';
import messageRouter from './routes/messages'

const app: Express = express()
const port = process.env.port || 3000;

app.use(bodyParser.json());
app.use(messageRouter)

/** Error handling */
app.use((req, res, next) => {
  const error = new Error('not found');
  return res.status(404).json({
      message: error.message
  });
});


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
})

export default app;