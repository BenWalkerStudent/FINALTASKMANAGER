const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config();
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler');
const { error } = require('console');

// middleware
app.use(express.static('./public'))
app.use(express.json())

//routes
app.use('/api/v1/tasks', tasks)

app.use(notFound)                                             

app.use(errorHandler)



// app.get('/api/v1/tasks)
// app.post('/api/v1/tasks)
// app.get('/api/v1/tasks:id)
// app.patch('/api/v1/tasks:id)
// app.delete('/api/v1/tasks:id)

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start()

