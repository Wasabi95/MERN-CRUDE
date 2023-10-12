// recordSlice.js
// recordSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define an asynchronous action creator
export const loadRecordsAsync = createAsyncThunk(
  'records/loadRecords',
  async () => {
    // Fetch your records here and return the data
    const response = await fetch("http://localhost:5050/record/");
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }
    const records = await response.json();
    return records;
  }
);

const recordSlice = createSlice({
  name: "records",
  initialState: {
    data: [], // Your records will be stored here
    status: 'idle',
    error: null,
  },
  reducers: {
    // Reducers for synchronous actions (if needed)
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadRecordsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadRecordsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(loadRecordsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addRecord } = recordSlice.actions;
export default recordSlice.reducer;
