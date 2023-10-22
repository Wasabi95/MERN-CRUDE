// models/record.js
import mongoose from 'mongoose';

const recordSchema = new mongoose.Schema({
  name: String,
  position: String,
  level: String,
});

const Record = mongoose.model('Record', recordSchema);

export default Record;
