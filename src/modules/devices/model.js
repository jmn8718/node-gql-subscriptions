import mongoose, { Schema } from 'mongoose';

const DeviceSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Required name'],
  },
  location: {
    lat: {
      type: Number,
      required: true,
      min: -85,
      max: 85,
    },
    lng: {
      type: Number,
      required: true,
      min: -180,
      max: 180,
    },
  },
}, {
  timestamps: true,
});

export default mongoose.model('Device', DeviceSchema);
