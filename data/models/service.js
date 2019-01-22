
  import mongoose, { Schema } from 'mongoose';
  const ServiceSchema = new Schema(
    {},
    { timestamps: true }
  );
  
  export default mongoose.model(Service, ServiceSchema);
  