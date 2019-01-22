
  import mongoose, { Schema } from 'mongoose';
  const NotificationSchema = new Schema(
    {},
    { timestamps: true }
  );
  
  export default mongoose.model(Notification, NotificationSchema);
  