// src/models/Event.js
import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  location: {
    address: String,
    city: String,
    country: String
  },
  category: String,
  organizer: {
    name: String,
    email: String
  }
}, {
  timestamps: true
});

const Event = mongoose.models.Event || mongoose.model('Event', eventSchema);
export default Event;