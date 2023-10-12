import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import records from "./routes/record.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
console.log(`Server is running on port: ${PORT}`);
console.log('Server is now running and ready to accept requests.');
});
app.get('/', (req, res) => {
res.send('Welcome to the homepage!');
});