// routes/record.mjs
// Import necessary packages and modules	
import express from "express"; // Import the Express framework	
import db from "../db/conn.mjs"; // Import the database connection module	
import { ObjectId } from "mongodb"; // Import ObjectId from MongoDB library	
	
// Create an Express Router instance	
const router = express.Router();	
	
////////////////////This section defines a route to GET ALL a list of all records//////////////////////	
////////////////////This section defines a route to GET ALL a list of all records//////////////////////	
////////////////////This section defines a route to GET ALL a list of all records//////////////////////	
////////////////////This section defines a route to GET ALL a list of all records//////////////////////	
////////////////////This section defines a route to GET ALL a list of all records//////////////////////	

	
router.get("/", async (req, res) => {	
// Access the "recordsxx" collection using the database connection	
let collection = await db.collection("records");	
// Find all documents in the collection and convert them to an array	
let results = await collection.find({}).toArray();	
// Send the results as a response with a status code of 200 (OK)	
res.send(results).status(200);	
});	
	
/////////////////// This section defines a route to GET A SINGLE record by its id	//////////////////
/////////////////// This section defines a route to GET A SINGLE record by its id	//////////////////
/////////////////// This section defines a route to GET A SINGLE record by its id	//////////////////
/////////////////// This section defines a route to GET A SINGLE record by its id	//////////////////
/////////////////// This section defines a route to GET A SINGLE record by its id	//////////////////

	
router.get("/:id", async (req, res) => {	
// Access the "recordsxx" collection using the database connection	
let collection = await db.collection("records");	
	
// Construct a query object using the provided id parameter	
let query = { _id: new ObjectId(req.params.id) };	
	
// Find one document in the collection that matches the query	
let result = await collection.findOne(query);	
	
// If no result is found, send a "Not found" response with a status code of 404	
if (!result) res.send("Not found").status(404);	
else res.send(result).status(200);	
});	
	
	
/////////////////// This section defines a route to CREATE a new record/////////////////////////
/////////////////// This section defines a route to CREATE a new record////////////////////////
/////////////////// This section defines a route to CREATE a new record////////////////////////
/////////////////// This section defines a route to CREATE a new record////////////////////////
/////////////////// This section defines a route to CREATE a new record////////////////////////

	

	
router.post("/", async (req, res) => {	
// Create a new document using data from the request body	
let newDocument = {	
name: req.body.name,	
position: req.body.position,	
level: req.body.level,	
};	
	
// Access the "recordsxx" collection using the database connection	
let collection = await db.collection("records");	
	
// Insert the new document into the collection	
let result = await collection.insertOne(newDocument);	
	
// Send a response with a status code of 204 (No Content)	
res.send(result).status(204);	
});	
	
////////////////////// This section defines a route to UPDATE a record by its id////////////////////
////////////////////// This section defines a route to UPDATE a record by its id////////////////////
////////////////////// This section defines a route to UPDATE a record by its id////////////////////
////////////////////// This section defines a route to UPDATE a record by its id////////////////////
////////////////////// This section defines a route to UPDATE a record by its id////////////////////

	
router.patch("/:id", async (req, res) => {	
// Construct a query object using the provided id parameter	
const query = { _id: new ObjectId(req.params.id) };	
	
// Create an updates object based on data from the request body	
const updates = {	
$set: {	
name: req.body.name,	
position: req.body.position,	
level: req.body.level,	
},	
};	
	
// Access the "recordsxx" collection using the database connection	
let collection = await db.collection("records");	
	
// Update the document that matches the query with the specified updates	
let result = await collection.updateOne(query, updates);	
	
// Send a response with a status code of 200 (OK)	
res.send(result).status(200);	
});	
	
//////////////////////// This section defines a route to DELETE a record by its id////////////////////
//////////////////////// This section defines a route to DELETE a record by its id////////////////////
//////////////////////// This section defines a route to DELETE a record by its id////////////////////
//////////////////////// This section defines a route to DELETE a record by its id////////////////////
//////////////////////// This section defines a route to DELETE a record by its id////////////////////

	
router.delete("/:id", async (req, res) => {	
// Construct a query object using the provided id parameter	
const query = { _id: new ObjectId(req.params.id) };	
	
// Access the "recordsxx" collection using the database connection	
const collection = db.collection("records");	
	
// Delete the document that matches the query	
let result = await collection.deleteOne(query);	
	
// Send a response with a status code of 200 (OK)	
res.send(result).status(200);	
});	
	
// Export the router to be used in other parts of the application	
export default router;	

