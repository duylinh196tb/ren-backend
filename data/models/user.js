
  import mongoose, { Schema } from 'mongoose';
  const UserSchema = new Schema(
    {},
    { timestamps: true }
  );
  
  export default mongoose.model(User, UserSchema);
  