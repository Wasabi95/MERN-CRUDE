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



// import express from "express";
// import db from "../db/conn.mjs";
// import { ObjectId } from "mongodb";

// const router = express.Router();

// const getCollection = async () => {
//   const collection = await db.collection("records");
//   return collection;
// };

// //////////////////////------GET USERS-----///////////////////////
// //////////////////////------GET USERS-----///////////////////////
// //////////////////////------GET USERS-----///////////////////////

// router.get("/", async (req, res) => {
//   const collection = await getCollection();
//   const results = await collection.find({}).toArray();

//   if (results.length === 0) {
//     res.status(404).json({ message: "Users Not Found" });
//   } else {
//     res.status(200).json({ message: "Users Found", data: results });
//   }
// });

// router.get("/:id", async (req, res) => {
//   const collection = await getCollection();
//   const query = { _id: new ObjectId(req.params.id) };
//   const result = await collection.findOne(query);
//   if (!result) {
//     res.status(404).json({ message: "User Not Found" });
//   } else {
//     res.status(200).json({ message: "User Found", data: result });
//   }
// });

// //////////////////////------CREATE USERS-----///////////////////////
// //////////////////////------CREATE USERS-----///////////////////////
// //////////////////////------CREATE USERS-----///////////////////////

// router.post("/", async (req, res) => {
//   try {
//     const { name, position, level } = req.body;

//     if (!name || !position || !level) {
//       // If any required field is missing, return a 400 Bad Request response
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const newDocument = {
//       name,
//       position,
//       level,
//     };

//     const collection = await getCollection();
//     const result = await collection.insertOne(newDocument);

//     // Return a success response
//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     // Handle any errors that may occur during user creation
//     console.error('Error creating user:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// //////////////////////------PATCH USERS-----///////////////////////
// //////////////////////------PATCH USERS-----///////////////////////
// //////////////////////------PATCH USERS-----///////////////////////

// router.patch("/:id", async (req, res) => {
//   const query = { _id: new ObjectId(req.params.id) };
//   const updates = {
//     $set: {
//       name: req.body.name,
//       position: req.body.position,
//       level: req.body.level,
//     },
//   };
//   const collection = await getCollection();
//   const result = await collection.updateOne(query, updates);

//   if (result.matchedCount === 0) {
//     // If no documents were updated, return a 404 Not Found response
//     res.status(404).json({ message: 'User not found' });
//   } else {
//     // Return a success response
//     res.status(200).json({ message: 'User updated successfully' });
//   }
// });

// //////////////////////------DELETE USERS-----///////////////////////
// //////////////////////------DELETE USERS-----///////////////////////
// //////////////////////------DELETE USERS-----///////////////////////

// router.delete("/:id", async (req, res) => {
//   const query = { _id: new ObjectId(req.params.id) };
//   const collection = await getCollection();
//   const result = await collection.deleteOne(query);
//   res.status(200).send(result);
// });

// export default router;
