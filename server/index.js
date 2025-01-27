const express = require('express')
const cors = require('cors')
require('dotenv').config()
const port  = process.env.PORT || 5000;
const app = express()


const corsOption = {
    origin : ['http://localhost:5173'],
    credentials : true,
    optionSuccessStatus : 200,
}

app.use(cors(corsOption))
app.use(express.json())



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ddujh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const menuCollection = client.db('urbanFeast').collection('menu')
    const reviewCollection = client.db('urbanFeast').collection('review')
    const orderCollection = client.db('urbanFeast').collection('order')
    // Connect the client to the server	(optional starting in v4.7)
    


    app.get('/menu', async(req,res) => {
        const result = await menuCollection.find().toArray()
        res.send(result)
    })

    app.get('/menu/:id', async(req,res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await menuCollection.findOne(query)
      res.send(result)
    })


    // reviews
    app.get('/review', async(req,res) => {
      const result = await reviewCollection.find().toArray()
      res.send(result)
  })


  // for order

  // save a single order data into database
  app.post('/order', async(req,res) => {
    const orderData = req.body; // console.log(bidData);  // data will be coming from front-end inside the req.body
    const result = await orderCollection.insertOne(orderData);
    res.send(result)
  })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } 
  
  
  finally {
    
  }
}
run().catch(console.dir);



app.get('/', (req,res) => {
    res.send('solo-Sphere is running')
})


app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);
})